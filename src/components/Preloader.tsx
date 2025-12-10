import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<"circle" | "moving" | "done">("circle");

  useEffect(() => {
    // Phase 1: Circle drawing around logo (2s)
    const circleTimer = setTimeout(() => {
      setPhase("moving");
    }, 2000);

    // Phase 2: Move to header position (1.5s)
    const moveTimer = setTimeout(() => {
      setPhase("done");
    }, 3500);

    // Complete and hide (4s total)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(circleTimer);
      clearTimeout(moveTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${
        phase === "moving" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative transition-all duration-1000 ease-in-out ${
          phase === "moving"
            ? "scale-[0.3] -translate-x-[calc(50vw-80px)] -translate-y-[calc(50vh-40px)]"
            : "scale-100"
        }`}
      >
        {/* Circle SVG animation */}
        <svg
          className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            className="preloader-circle"
          />
        </svg>

        {/* Logo */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden bg-background p-2 preloader-logo">
          <img
            src={logo}
            alt="The Nutrition Hangout"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
