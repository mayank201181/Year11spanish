"use client";
// /episodes — every ¡Qué Caos! episode in one place: a player plus a playlist,
// with an optional binge mode that rolls straight into the next episode.
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SHOW_TITLE, SITCOM_EPISODES } from "@/lib/sitcom";
import { topicCourseOrder, topicCourseYear, useCourseYearFilter } from "@/lib/courseYear";
import { CourseYearBanner, Year11Divider } from "./CourseYearBanner";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export function EpisodesHub() {
  const router = useRouter();
  const params = useSearchParams();
  const watched = useWatchedEpisodes();
  const [binge, setBinge] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const year10 = useCourseYearFilter() === 10;

  const eps = useMemo(() => {
    if (!year10) return SITCOM_EPISODES;
    return [...SITCOM_EPISODES].sort((a, b) => {
      const ya = topicCourseYear(a.topicId);
      const yb = topicCourseYear(b.topicId);
      if (ya !== yb) return ya - yb;
      return topicCourseOrder(a.topicId) - topicCourseOrder(b.topicId);
    });
  }, [year10]);
  const y10Eps = useMemo(() => (year10 ? eps.filter((e) => topicCourseYear(e.topicId) === 10) : []), [year10, eps]);
  const y11Eps = useMemo(() => (year10 ? eps.filter((e) => topicCourseYear(e.topicId) !== 10) : []), [year10, eps]);
  const requested = Number(params.get("ep"));
  const current = eps.find((e) => e.num === requested) ?? eps.find((e) => !watched[e.topicId]) ?? eps[0];
  const watchedCount = eps.filter((e) => watched[e.topicId]).length;
  const totalMin = Math.round(eps.reduce((s, e) => s + e.durationSec, 0) / 60);

  if (!current) {
    return <p className="card p-6 text-ink-2">Episodes are on their way — check back soon.</p>;
  }

  const pick = (num: number, play: boolean) => {
    setAutoPlay(play);
    router.replace(year10 ? `/episodes?ep=${num}&year=10` : `/episodes?ep=${num}`, { scroll: false });
    if (play) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const next = eps[eps.indexOf(current) + 1];

  return (
    <div className="space-y-5 pb-8">
      {year10 ? <CourseYearBanner y10Count={y10Eps.length} y11Count={y11Eps.length} noun="episodes" /> : null}
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="chip border-0 bg-brand-soft text-brand">📺 Season 1 · {eps.length} episode{eps.length === 1 ? "" : "s"} · {totalMin} min</span>
            <span className="chip">⭐ {watchedCount}/{eps.length} watched</span>
          </div>
          <h1 className="mt-2 text-2xl font-black sm:text-3xl">{SHOW_TITLE}</h1>
          <p className="text-sm text-ink-2">
            One episode for every Pearson Edexcel IGCSE Spanish (4SP0) unit — featuring Examiner Grade-9 Traps, Lola&apos;s ruthless grammar checks, and three pause challenges.
          </p>
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={binge} onChange={(e) => setBinge(e.target.checked)} className="h-5 w-5" />
          Binge mode (auto-play next)
        </label>
      </header>

      <section className="card overflow-hidden p-1 sm:p-2">
        <EpisodePlayer episode={current} autoPlay={autoPlay} onEnded={() => (binge && next ? pick(next.num, true) : undefined)} />
        <div className="flex flex-wrap items-center justify-between gap-2 px-2 pt-3 pb-1">
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-brand">
              Episode {current.num} · {current.topicShort}
            </div>
            <h2 className="text-lg font-extrabold">&ldquo;{current.title}&rdquo;</h2>
            {current.logline ? <p className="text-sm text-ink-2">{current.logline}</p> : null}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={`/topic/${current.topicId}?tab=practise`} className="btn btn-secondary btn-sm">
              ✏️ Practise this topic
            </Link>
            {next ? (
              <button type="button" className="btn btn-primary btn-sm" onClick={() => pick(next.num, true)}>
                Next: Ep {next.num} →
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-extrabold">All episodes</h2>
        {year10 ? (
          <div className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {y10Eps.map((e) => (
                <button
                  key={e.num}
                  type="button"
                  data-course-year-item={10}
                  onClick={() => pick(e.num, true)}
                  className={`card overflow-hidden p-0 text-left transition-colors hover:border-brand ${
                    e.num === current.num ? "border-2 border-brand" : ""
                  }`}
                >
                  <div className="relative">
                    <Image src={e.poster} alt="" width={640} height={360} className="aspect-video w-full object-cover" />
                    <span className="absolute right-2 bottom-2 rounded-md bg-black/75 px-1.5 py-0.5 text-xs font-bold text-white">
                      {formatDuration(e.durationSec)}
                    </span>
                    <span className="absolute top-2 right-2 rounded-md bg-brand px-1.5 py-0.5 text-[11px] font-extrabold text-brand-ink">
                      Year 10
                    </span>
                    {watched[e.topicId] ? (
                      <span className="absolute top-2 left-2 rounded-md bg-good px-1.5 py-0.5 text-xs font-bold text-white">Watched ✓</span>
                    ) : null}
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-bold text-brand">
                      Ep {e.num} · {e.topicShort}
                    </div>
                    <div className="font-extrabold leading-snug">{e.title}</div>
                  </div>
                </button>
              ))}
            </div>
            {y11Eps.length > 0 ? (
              <>
                <Year11Divider count={y11Eps.length} noun="episodes" />
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {y11Eps.map((e) => (
                    <button
                      key={e.num}
                      type="button"
                      data-course-year-item={11}
                      onClick={() => pick(e.num, true)}
                      className={`card overflow-hidden p-0 text-left opacity-60 grayscale-[35%] transition hover:border-brand hover:opacity-95 ${
                        e.num === current.num ? "border-2 border-brand" : ""
                      }`}
                    >
                      <div className="relative">
                        <Image src={e.poster} alt="" width={640} height={360} className="aspect-video w-full object-cover" />
                        <span className="absolute right-2 bottom-2 rounded-md bg-black/75 px-1.5 py-0.5 text-xs font-bold text-white">
                          {formatDuration(e.durationSec)}
                        </span>
                        <span className="absolute top-2 right-2 rounded-md bg-surface-2/95 px-1.5 py-0.5 text-[11px] font-bold text-ink-2">
                          Year 11
                        </span>
                        {watched[e.topicId] ? (
                          <span className="absolute top-2 left-2 rounded-md bg-good px-1.5 py-0.5 text-xs font-bold text-white">Watched ✓</span>
                        ) : null}
                      </div>
                      <div className="p-3">
                        <div className="text-xs font-bold text-brand">
                          Ep {e.num} · {e.topicShort}
                        </div>
                        <div className="font-extrabold leading-snug">{e.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {eps.map((e) => (
            <button
              key={e.num}
              type="button"
              onClick={() => pick(e.num, true)}
              className={`card overflow-hidden p-0 text-left transition-colors hover:border-brand ${
                e.num === current.num ? "border-2 border-brand" : ""
              }`}
            >
              <div className="relative">
                <Image src={e.poster} alt="" width={640} height={360} className="aspect-video w-full object-cover" />
                <span className="absolute right-2 bottom-2 rounded-md bg-black/75 px-1.5 py-0.5 text-xs font-bold text-white">
                  {formatDuration(e.durationSec)}
                </span>
                {watched[e.topicId] ? (
                  <span className="absolute top-2 left-2 rounded-md bg-good px-1.5 py-0.5 text-xs font-bold text-white">Watched ✓</span>
                ) : null}
              </div>
              <div className="p-3">
                <div className="text-xs font-bold text-brand">
                  Ep {e.num} · {e.topicShort}
                </div>
                <div className="font-extrabold leading-snug">{e.title}</div>
              </div>
            </button>
          ))}
        </div>
        )}
      </section>
    </div>
  );
}
