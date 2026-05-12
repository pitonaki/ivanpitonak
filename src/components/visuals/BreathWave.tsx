import { motion } from "framer-motion";

export function BreathWave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="bw-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.13 195)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.7 0.13 195)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="oklch(0.7 0.13 195)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bw-grad2" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.14 0 0)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.14 0 0)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="oklch(0.14 0 0)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d="M0,300 C180,180 280,420 480,300 C680,180 780,420 960,300 C1140,180 1260,420 1440,300"
        fill="none"
        stroke="url(#bw-grad)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,340 C180,260 320,440 520,340 C720,240 820,440 1000,340 C1180,240 1280,440 1440,340"
        fill="none"
        stroke="url(#bw-grad2)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.path
        d="M0,260 C200,200 320,360 540,260 C760,160 880,360 1080,260 C1240,200 1340,320 1440,260"
        fill="none"
        stroke="oklch(0.7 0.13 195)"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 5, ease: "easeInOut", delay: 0.8 }}
      />
    </svg>
  );
}
