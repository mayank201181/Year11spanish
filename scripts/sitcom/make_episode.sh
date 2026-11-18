#!/usr/bin/env bash
# Build + render one or more episodes end to end using read-only .tts-env (WORKERS=1, ultrafast, 8fps).
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"
PY="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/python"
FFMPEG="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffmpeg"
FFPROBE="/Users/mayankrawat/Downloads/year8-workspace/.tts-env/.venv/bin/ffprobe"
mkdir -p "$ROOT/public/videos/posters"
find tts_cache -name "*.raw.wav" -delete 2>/dev/null || true
find tts_cache -name "*.wav" -size 0 -delete 2>/dev/null || true
for T in "$@"; do
  MP4="$ROOT/public/videos/$T.mp4"
  JPG="$ROOT/public/videos/posters/$T.jpg"
  if [ -s "$MP4" ] && [ -s "$JPG" ]; then
    CODECS="$("$FFPROBE" -v error -show_entries stream=codec_name -of csv=p=0 "$MP4" | tr '\n' ',' || true)"
    DUR="$("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 "$MP4" 2>/dev/null || echo 0)"
    if echo "$CODECS" | grep -q "h264" && echo "$CODECS" | grep -q "aac" && awk "BEGIN {exit !($DUR > 60)}"; then
      echo "=== $T: already valid ($DUR s, $CODECS) — skipping"
      continue
    fi
  fi
  echo "=== $T: lint"; "$PY" lint_episode.py "episodes/$T.py"
  if [ -s "out/$T/audio.wav" ] && [ -s "out/$T/timeline.json" ]; then
    echo "=== $T: voices + timeline already built — reusing"
  else
    echo "=== $T: voices + timeline"; OMP_NUM_THREADS=2 MKL_NUM_THREADS=2 "$PY" build.py "episodes/$T.py" "out/$T"
  fi
  echo "=== $T: frames (workers=${WORKERS:-1})"; rm -f out/$T/part*.mp4; "$PY" render_py.py "out/$T" --workers "${WORKERS:-1}"
  echo "=== $T: encode"
  "$FFMPEG" -y -loglevel error -f concat -safe 0 -i "out/$T/parts.txt" -i "out/$T/audio.wav" \
    -c:v copy \
    -af "loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -c:a aac -b:a 128k -movflags +faststart -shortest \
    "$MP4"
  "$PY" render_py.py "out/$T" --poster "$JPG"
  rm -f out/$T/part*.mp4
  echo "=== $T: done $(du -h "$MP4" | cut -f1) $("$FFPROBE" -v error -show_entries format=duration -of csv=p=0 "$MP4")s"
done
