import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Presentation } from "lucide-react";
import logo from "../Assets/ACLAS Logo Png.png";
import Navigation from "./components/Navigation";
import Slide from "./components/Slide";
import { slides } from "./data/SlideData";

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 140 : -140,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -140 : 140,
    scale: 1.01,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

const createTone = (audioContext, frequency, duration) => {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.04, audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef(null);
  const touchStartRef = useRef(null);

  const totalSlides = slides.length;
  const progress = useMemo(
    () => ((activeIndex + 1) / totalSlides) * 100,
    [activeIndex, totalSlides],
  );

  const playTransitionSound = useCallback(() => {
    if (!soundEnabled || typeof window === "undefined") {
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    const context = audioContextRef.current;
    if (context.state === "suspended") {
      context.resume();
    }

    createTone(context, 540, 0.08);
    window.setTimeout(() => createTone(context, 720, 0.06), 58);
  }, [soundEnabled]);

  const goToSlide = useCallback(
    (index) => {
      if (index < 0 || index >= totalSlides || index === activeIndex) {
        return;
      }

      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
      playTransitionSound();
    },
    [activeIndex, playTransitionSound, totalSlides],
  );

  const nextSlide = useCallback(() => {
    if (activeIndex >= totalSlides - 1) {
      return;
    }

    setDirection(1);
    setActiveIndex((current) => current + 1);
    playTransitionSound();
  }, [activeIndex, playTransitionSound, totalSlides]);

  const previousSlide = useCallback(() => {
    if (activeIndex <= 0) {
      return;
    }

    setDirection(-1);
    setActiveIndex((current) => current - 1);
    playTransitionSound();
  }, [activeIndex, playTransitionSound]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [nextSlide, previousSlide]);

  const activeSlide = slides[activeIndex];

  return (
    <main
      className="relative flex h-screen w-full overflow-hidden bg-hero-glow text-white"
      onTouchStart={(event) => {
        touchStartRef.current = event.changedTouches[0].clientX;
      }}
      onTouchEnd={(event) => {
        const start = touchStartRef.current;
        const end = event.changedTouches[0].clientX;

        if (start === null || typeof start !== "number") {
          return;
        }

        const delta = start - end;
        if (Math.abs(delta) < 45) {
          return;
        }

        if (delta > 0) {
          nextSlide();
        } else {
          previousSlide();
        }
      }}
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="pointer-events-none absolute -left-12 top-24 h-60 w-60 rounded-full bg-sky/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-8 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 flex h-full w-full flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-2 shadow-card">
              <img src={logo} alt="ACLAS logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-white sm:text-xl">ACLAS Proposal</p>
              <p className="text-sm text-slate-300">Integrated Digital Marketing Strategy</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 md:flex">
            <Presentation className="h-4 w-4 text-sky" />
            Use keyboard arrows or swipe to navigate
          </div>
        </div>

        <div className="mx-auto mt-4 h-1.5 w-full max-w-7xl overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-sky to-cyan-200"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </div>

        <div className="mx-auto mt-2 flex w-full max-w-7xl justify-end sm:hidden">
          <div className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-sm font-semibold text-white">
            {activeIndex + 1} / {totalSlides}
          </div>
        </div>

        <div className="relative mx-auto mt-4 flex min-h-0 w-full max-w-7xl flex-1 pb-28 md:pb-24">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="h-full w-full"
            >
              <Slide slide={activeSlide} index={activeIndex} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-0 right-0 z-20 hidden justify-center px-4 sm:flex">
          <Navigation
            activeIndex={activeIndex}
            totalSlides={totalSlides}
            onNext={nextSlide}
            onPrevious={previousSlide}
            onSelect={goToSlide}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled((current) => !current)}
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 sm:hidden">
          <button
            type="button"
            onClick={previousSlide}
            disabled={activeIndex === 0}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-card transition hover:border-sky/45 hover:bg-sky/20 disabled:opacity-35"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={activeIndex === totalSlides - 1}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white shadow-card transition hover:border-sky/45 hover:bg-sky/20 disabled:opacity-35"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </main>
  );
}

export default App;
