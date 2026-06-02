"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, TrendingUp, Zap, BarChart3 } from "lucide-react";

const stats = [
  { label: "Content Pieces Deployed", value: 12847, suffix: "+" },
  { label: "Brands Scaled", value: 340, suffix: "+" },
  { label: "Avg. Engagement Lift", value: 847, suffix: "%" },
  { label: "Automations Running", value: 2100, suffix: "+" },
];

const floatingCards = [
  { icon: "📈", text: "+340% reach", color: "from-green-500/20 to-emerald-500/20", delay: 0 },
  { icon: "🎬", text: "90 reels/mo", color: "from-purple-500/20 to-pink-500/20", delay: 1 },
  { icon: "🤖", text: "AI automated", color: "from-cyan-500/20 to-blue-500/20", delay: 2 },
  { icon: "🔥", text: "Viral hooks", color: "from-orange-500/20 to-red-500/20", delay: 0.5 },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="counter">{count.toLocaleString()}{suffix}</span>
  );
}

export default function HeroSection() {
  const words = ["Impossible To Ignore", "Everywhere Online", "Algorithmically Dominant", "Consistently Viral"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-bg" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />

      {/* Floating Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + card.delay, duration: 0.6 }}
          className={`hidden lg:flex absolute glass rounded-2xl px-4 py-3 items-center gap-2 animate-float ${
            i === 0 ? "top-[20%] left-[8%]" : 
            i === 1 ? "top-[15%] right-[10%]" : 
            i === 2 ? "bottom-[25%] left-[5%]" :
            "bottom-[20%] right-[8%]"
          }`}
          style={{ animationDelay: `${card.delay}s` }}
        >
          <span className="text-2xl">{card.icon}</span>
          <span className="text-sm font-medium text-white/80">{card.text}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/20 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs sm:text-sm text-white/70">
            AI Growth Infrastructure — Now Accepting New Brands
          </span>
          <Sparkles className="w-3 h-3 text-neon-purple" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-white">We Build Daily</span>
          <br />
          <span className="text-white">Attention Systems</span>
          <br />
          <span className="text-white">That Make Brands</span>
          <br />
          <span className="relative inline-block mt-2">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="gradient-text"
            >
              {words[wordIndex]}
            </motion.span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          AI-powered content, UGC ads, automation, and growth infrastructure 
          built for modern internet brands. Not an agency — an{" "}
          <span className="text-white/80 font-medium">operating system for attention.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/packages"
            className="group btn-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple via-primary-500 to-neon-pink text-white font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 animate-pulse-glow"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#demo"
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl glass hover:bg-white/10 text-white font-semibold text-lg transition-all flex items-center justify-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Play className="w-4 h-4 fill-white" />
            </div>
            Generate Brand Preview
          </Link>
          <Link
            href="/packages"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium text-lg transition-all text-center"
          >
            View Demo Packages
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-4 md:p-6 hover-card">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trusted by marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-white/30 mb-4 uppercase tracking-widest">
            Trusted by growth-focused brands
          </p>
          <div className="marquee-container">
            <div className="inline-flex items-center gap-12 animate-marquee">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="inline-flex items-center gap-12">
                  {["ShopVelocity", "NeonFit", "CryptoVault", "SkinLab", "CodeScale", "FoodDash", "CoachPro", "MediaForge"].map((brand) => (
                    <span key={`${setIdx}-${brand}`} className="text-white/20 font-bold text-lg whitespace-nowrap">
                      {brand}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
