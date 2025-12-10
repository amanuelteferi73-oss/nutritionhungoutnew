import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<"logo" | "circle" | "moving" | "done">("logo");

  useEffect(() => {
    // Phase 1: Logo appears big in center (0.8s)
    const logoTimer = setTimeout(() => {
      setPhase("circle");
    }, 800);

    // Phase 2: Circle draws around logo (2s)
    const circleTimer = setTimeout(() => {
      setPhase("moving");
    }, 2800);

    // Phase 3: Move to header position (1s)
    const moveTimer = setTimeout(() => {
      setPhase("done");
    }, 3800);

    // Complete and hide
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(circleTimer);
      clearTimeout(moveTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-300 ${
        phase === "moving" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative transition-all ease-out ${
          phase === "moving"
            ? "duration-700 scale-[0.25] -translate-x-[calc(50vw-60px)] -translate-y-[calc(50vh-36px)]"
            : "duration-500"
        }`}
      >
        {/* Circle SVG animation - only show after logo phase */}
        {(phase === "circle" || phase === "moving") && (
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
        )}

        {/* Logo - appears first with scale animation */}
        <div 
          className={`w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden bg-background p-2 transition-all duration-700 ${
            phase === "logo" ? "preloader-logo-initial" : "preloader-logo-visible"
          }`}
        >
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
