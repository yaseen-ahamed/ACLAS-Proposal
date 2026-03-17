import { ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";

function Navigation({
  activeIndex,
  totalSlides,
  onNext,
  onPrevious,
  onSelect,
  soundEnabled,
  onToggleSound,
}) {
  return (
    <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/75 px-3 py-3 shadow-card backdrop-blur-2xl">
      <button
        type="button"
        onClick={onPrevious}
        disabled={activeIndex === 0}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky/40 hover:bg-sky/10 disabled:cursor-not-allowed disabled:opacity-35"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <div className="hidden items-center gap-2 sm:flex">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-sky shadow-[0_0_24px_rgba(56,189,248,0.55)]"
                : "w-2.5 bg-white/25 hover:bg-white/45"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="min-w-[4.75rem] text-center font-display text-lg font-semibold text-white">
        {activeIndex + 1} / {totalSlides}
      </div>

      <button
        type="button"
        onClick={onToggleSound}
        className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky/40 hover:bg-sky/10 sm:flex"
        aria-label={soundEnabled ? "Disable slide sound" : "Enable slide sound"}
      >
        {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={activeIndex === totalSlides - 1}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-sky/40 hover:bg-sky/10 disabled:cursor-not-allowed disabled:opacity-35"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Navigation;
