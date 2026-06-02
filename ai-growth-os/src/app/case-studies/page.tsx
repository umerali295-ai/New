"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  TrendingUp, ArrowUpRight, Eye, Users, BarChart3, ShoppingBag, 
  Dumbbell, Code, Bitcoin, Building2, ArrowRight, Check, Star
} from "lucide-react";

const caseStudies = [
  {
    id: "shopify",
    icon: ShoppingBag,
    niche: "E-Commerce / Shopify",
    brand: "VeloStyle — Demo Brand",
    tagline: "From $2K/mo to $47K/mo with AI content operations",
    problem: "VeloStyle had great products but zero online visibility. Their content was inconsistent — 3-4 posts per month, no strategy, no hooks. Ad costs were $45+ per acquisition.",
    solution: "Deployed full AI Content Engine: 60 short-form videos/month, UGC-style product ads, automated posting schedule, TikTok Shop integration.",
    gradient: "from-pink-500 to-rose-500",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    metrics: [
      { label: "Revenue", before: "$2,100/mo", after: "$47,200/mo", change: "+2,148%" },
      { label: "ROAS", before: "1.2x", after: "5.8x", change: "+383%" },
      { label: "Content Output", before: "4/mo", after: "60/mo", change: "+1,400%" },
      { label: "CAC", before: "$45", after: "$8.50", change: "-81%" },
    ],
    contentExamples: [
      "UGC unboxing reels with AI voiceover",
      "Product lifestyle montage ads",
      "Customer reaction compilation",
      "Behind-the-scenes brand content",
    ],
    timeline: "60 days",
  },
  {
    id: "fitness",
    icon: Dumbbell,
    niche: "Fitness Coaching",
    brand: "IronMind Coaching — Demo Brand",
    tagline: "0 to 52K followers in 90 days through AI content velocity",
    problem: "Personal trainer with amazing transformations but no content system. Posting randomly, no hooks, no retention strategy. Spending 15+ hours/week on content with no results.",
    solution: "Deployed AI Content Engine + Growth Automation: daily transformation reels, motivational clips, AI-generated captions, automated DM funnels, lead capture system.",
    gradient: "from-green-500 to-emerald-500",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    metrics: [
      { label: "Followers", before: "840", after: "52,300", change: "+6,126%" },
      { label: "Monthly Leads", before: "3", after: "127", change: "+4,133%" },
      { label: "Content Time", before: "15 hrs/wk", after: "2 hrs/wk", change: "-87%" },
      { label: "Engagement Rate", before: "1.1%", after: "9.4%", change: "+754%" },
    ],
    contentExamples: [
      "Before/after transformation reels",
      "Day-in-the-life workout content",
      "AI-scripted motivational hooks",
      "Client testimonial compilations",
    ],
    timeline: "90 days",
  },
  {
    id: "saas",
    icon: Code,
    niche: "SaaS / Tech",
    brand: "FlowStack — Demo Brand",
    tagline: "Replaced $15K/mo agency. 10x output. 90% cost reduction.",
    problem: "B2B SaaS with a great product but invisible brand. Paying $15K/month to an agency producing 8 LinkedIn posts and 2 blog articles. Zero social media traction.",
    solution: "Deployed Content Velocity Engine: AI-generated thought leadership, product demos, feature explainers, LinkedIn carousels, Twitter/X threads, TikTok product content.",
    gradient: "from-blue-500 to-cyan-500",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    metrics: [
      { label: "Monthly Content", before: "10 pieces", after: "90 pieces", change: "+800%" },
      { label: "Cost", before: "$15,000/mo", after: "$1,500/mo", change: "-90%" },
      { label: "Pipeline Value", before: "$23K/mo", after: "$180K/mo", change: "+683%" },
      { label: "CAC", before: "$340", after: "$12", change: "-96%" },
    ],
    contentExamples: [
      "Product demo short-form videos",
      "Founder thought-leadership threads",
      "Feature comparison carousels",
      "Build-in-public content series",
    ],
    timeline: "45 days",
  },
  {
    id: "crypto",
    icon: Bitcoin,
    niche: "Crypto / Web3",
    brand: "NexaVault — Demo Brand",
    tagline: "Built 200K+ community in 120 days with AI-native content",
    problem: "DeFi protocol with strong tech, zero marketing presence. Competitors dominating Crypto Twitter and TikTok. No content pipeline, no community engagement system.",
    solution: "Deployed full AI Growth System: cinematic promo content, market analysis reels, community engagement automation, influencer-style AI content, animated dashboards.",
    gradient: "from-yellow-500 to-orange-500",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    metrics: [
      { label: "Community", before: "450", after: "214,000", change: "+47,455%" },
      { label: "Twitter Impressions", before: "12K/mo", after: "8.4M/mo", change: "+69,900%" },
      { label: "TVL Growth", before: "$120K", after: "$4.2M", change: "+3,400%" },
      { label: "Content Output", before: "2/wk", after: "5/day", change: "+1,650%" },
    ],
    contentExamples: [
      "Cinematic protocol explainer reels",
      "AI-generated market analysis content",
      "Community highlight compilations",
      "Animated DeFi dashboard visuals",
    ],
    timeline: "120 days",
  },
  {
    id: "restaurant",
    icon: Building2,
    niche: "Restaurant / Food",
    brand: "Ember Kitchen — Demo Brand",
    tagline: "From empty tables to 2-hour waits using only short-form content",
    problem: "High-quality restaurant with zero online presence. Instagram had 200 followers. No food content, no behind-the-scenes, no local discovery. Competing with chains on Google.",
    solution: "Deployed AI Content Engine: chef POV cooking reels, ASMR food content, customer reaction videos, local SEO content, automated Google review requests.",
    gradient: "from-red-500 to-orange-500",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    metrics: [
      { label: "Followers", before: "200", after: "89,000", change: "+44,400%" },
      { label: "Weekly Reservations", before: "12", after: "180+", change: "+1,400%" },
      { label: "Google Reviews", before: "23", after: "340+", change: "+1,378%" },
      { label: "Avg. Views/Reel", before: "50", after: "450K", change: "+899,900%" },
    ],
    contentExamples: [
      "Chef POV cooking reels",
      "ASMR food preparation content",
      "Customer first-bite reactions",
      "Secret menu reveal series",
    ],
    timeline: "75 days",
  },
];

export default function CaseStudiesPage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(caseStudies[0].id);
  const activeCase = caseStudies.find(c => c.id === activeCaseStudy)!;

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 relative">
        <div className="absolute inset-0 neural-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-cyan mb-4">
              <BarChart3 className="w-3 h-3" />
              GROWTH ARCHITECTURES
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              Case{" "}<span className="gradient-text">Studies</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Real growth architectures deployed across industries. Data-driven results. 
              System-level thinking.
            </p>
            <p className="text-white/20 text-xs mt-3">
              *Demo brand examples — sample growth architecture data
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Selector */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex overflow-x-auto gap-3 pb-4 mb-8 scrollbar-hide">
            {caseStudies.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseStudy(cs.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeCaseStudy === cs.id
                    ? `bg-gradient-to-r ${cs.gradient} text-white shadow-lg`
                    : "glass text-white/50 hover:text-white"
                }`}
              >
                <cs.icon className="w-4 h-4" />
                {cs.niche}
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="glass rounded-3xl p-6 md:p-10 mb-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${activeCase.bgColor} ${activeCase.color} text-xs font-medium mb-3`}>
                      <activeCase.icon className="w-3 h-3" />
                      {activeCase.niche}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-2">{activeCase.brand}</h2>
                    <p className="text-white/50 text-lg">{activeCase.tagline}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white/60 text-sm">Deployed in {activeCase.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Problem / Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="glass rounded-3xl p-6 md:p-8">
                  <h3 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    The Problem
                  </h3>
                  <p className="text-white/50 leading-relaxed">{activeCase.problem}</p>
                </div>
                <div className="glass rounded-3xl p-6 md:p-8">
                  <h3 className="text-neon-green font-bold text-lg mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-green" />
                    The Solution
                  </h3>
                  <p className="text-white/50 leading-relaxed">{activeCase.solution}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {activeCase.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-5 hover-card text-center"
                  >
                    <p className="text-white/30 text-xs mb-1">{metric.label}</p>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-white/40 text-sm line-through">{metric.before}</span>
                      <ArrowRight className="w-3 h-3 text-white/20" />
                      <span className="text-white font-bold text-lg">{metric.after}</span>
                    </div>
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg ${activeCase.bgColor}`}>
                      <ArrowUpRight className={`w-3 h-3 ${activeCase.color}`} />
                      <span className={`text-xs font-bold ${activeCase.color}`}>{metric.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Content Examples */}
              <div className="glass rounded-3xl p-6 md:p-8 mb-6">
                <h3 className="text-white font-bold text-lg mb-4">Content Deployed</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeCase.contentExamples.map((example, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/3">
                      <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                      <span className="text-white/60 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="glass rounded-3xl p-6 md:p-8 text-center bg-gradient-to-r from-neon-purple/5 to-neon-pink/5">
                <h3 className="text-2xl font-bold text-white mb-2">Want Results Like These?</h3>
                <p className="text-white/40 mb-6">
                  Deploy the same AI growth system for your brand. Start in 24 hours.
                </p>
                <a
                  href="/packages"
                  className="inline-flex items-center gap-2 btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg hover:opacity-90 transition-all"
                >
                  Deploy My Growth System
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
