"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, Play, Eye } from "lucide-react";

const niches = ["All", "Fashion", "SaaS", "Fitness", "Crypto", "Skincare", "Restaurant", "Coaching"];

interface ContentItem {
  niche: string;
  type: "reel" | "ad" | "carousel" | "ugc";
  title: string;
  caption: string;
  likes: string;
  comments: string;
  views: string;
  gradient: string;
  emoji: string;
}

const contentItems: ContentItem[] = [
  {
    niche: "Fashion",
    type: "reel",
    title: "Spring Collection Drop",
    caption: "POV: Your brand drops 30 reels in 7 days and goes viral ✨",
    likes: "24.5K",
    comments: "1.2K",
    views: "890K",
    gradient: "from-pink-500 to-rose-600",
    emoji: "👗"
  },
  {
    niche: "SaaS",
    type: "ad",
    title: "Product Launch Campaign",
    caption: "Stop building features. Start building attention. 🚀",
    likes: "8.3K",
    comments: "456",
    views: "2.1M",
    gradient: "from-blue-500 to-cyan-600",
    emoji: "💻"
  },
  {
    niche: "Fitness",
    type: "ugc",
    title: "Transformation Series",
    caption: "90 days. AI content. 50K followers. Zero burnout. 💪",
    likes: "45.2K",
    comments: "3.1K",
    views: "4.7M",
    gradient: "from-green-500 to-emerald-600",
    emoji: "🏋️"
  },
  {
    niche: "Crypto",
    type: "reel",
    title: "Market Analysis Reel",
    caption: "AI-generated alpha content that makes CT stop scrolling 📊",
    likes: "12.8K",
    comments: "890",
    views: "1.5M",
    gradient: "from-yellow-500 to-orange-600",
    emoji: "₿"
  },
  {
    niche: "Skincare",
    type: "carousel",
    title: "Routine Carousel",
    caption: "Your skin routine, but make it content strategy 🧴",
    likes: "31.7K",
    comments: "2.4K",
    views: "3.2M",
    gradient: "from-purple-500 to-pink-500",
    emoji: "✨"
  },
  {
    niche: "Restaurant",
    type: "reel",
    title: "Chef POV Series",
    caption: "This restaurant went from empty to 2hr waits with AI content 🍕",
    likes: "67.3K",
    comments: "4.8K",
    views: "8.9M",
    gradient: "from-red-500 to-orange-500",
    emoji: "🍳"
  },
  {
    niche: "Coaching",
    type: "ugc",
    title: "Client Success Story",
    caption: "From 0 to 100 clients using AI-powered content ops 🎯",
    likes: "15.6K",
    comments: "1.1K",
    views: "2.3M",
    gradient: "from-indigo-500 to-violet-600",
    emoji: "🎯"
  },
  {
    niche: "Fashion",
    type: "ad",
    title: "UGC-Style Product Ad",
    caption: "AI-generated UGC that converts 3x better than studio shots 🛍️",
    likes: "19.4K",
    comments: "987",
    views: "1.8M",
    gradient: "from-rose-500 to-fuchsia-600",
    emoji: "🛍️"
  },
  {
    niche: "SaaS",
    type: "carousel",
    title: "Feature Explainer",
    caption: "This SaaS went from invisible to category leader in 60 days ⚡",
    likes: "5.9K",
    comments: "342",
    views: "780K",
    gradient: "from-cyan-500 to-teal-600",
    emoji: "⚡"
  },
];

function ContentCard({ item, index }: { item: ContentItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Phone Frame */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark-900 hover-card aspect-[9/16]">
        {/* Content Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content Center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <span className="text-5xl mb-4">{item.emoji}</span>
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
          <p className="text-white/60 text-xs text-center uppercase tracking-wider">{item.type}</p>
        </div>

        {/* Top Badge */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className={`px-2 py-1 rounded-lg bg-gradient-to-r ${item.gradient} text-white text-xs font-bold`}>
            {item.niche}
          </span>
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
            <Eye className="w-3 h-3 text-white/60" />
            <span className="text-xs text-white/60">{item.views}</span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
          <p className="text-white/50 text-xs mb-3 line-clamp-2">{item.caption}</p>
          
          {/* Engagement */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-xs text-white/60">{item.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4 text-white/40" />
              <span className="text-xs text-white/60">{item.comments}</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Send className="w-4 h-4 text-white/40" />
              <Bookmark className="w-4 h-4 text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContentGallery() {
  const [activeNiche, setActiveNiche] = useState("All");

  const filtered = activeNiche === "All"
    ? contentItems
    : contentItems.filter((item) => item.niche === activeNiche);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      <div className="section-divider" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-pink mb-4">
            <Palette className="w-3 h-3" />
            AI CONTENT GALLERY
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Output That{" "}
            <span className="gradient-text">Converts</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Real examples across real niches. Every piece AI-generated, human-refined, algorithm-optimized.
          </p>
        </motion.div>

        {/* Niche Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {niches.map((niche) => (
            <button
              key={niche}
              onClick={() => setActiveNiche(niche)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeNiche === niche
                  ? "bg-neon-purple text-white shadow-lg shadow-purple-500/20"
                  : "glass text-white/50 hover:text-white"
              }`}
            >
              {niche}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <ContentCard key={`${item.niche}-${item.title}`} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm mb-4">
            These are demo samples. Your brand gets custom AI-generated content at this quality — at scale.
          </p>
          <a
            href="/packages"
            className="inline-flex items-center gap-2 btn-shimmer px-8 py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold hover:opacity-90 transition-all"
          >
            Build My Content System
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Palette(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}

function ArrowRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
