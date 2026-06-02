"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, Wand2, Copy, Check, RefreshCw } from "lucide-react";

interface DemoResult {
  hook: string;
  caption: string;
  ugcScript: string;
  adCreative: string;
  suggestions: string[];
}

const demoResults: Record<string, DemoResult> = {
  fitness: {
    hook: "POV: You stopped guessing your workouts and let AI build your content empire 🔥",
    caption: "Scaling a fitness brand isn't about more posts—it's about the RIGHT posts. Our AI analyzed 10K+ viral fitness reels to craft your content DNA. The algorithm doesn't care about effort. It cares about patterns. Let's hack yours. 💪\n\n#FitnessContent #GrowthHacking #AIFitness #ContentStrategy",
    ugcScript: "[HOOK - 0-3s] \"I was posting 5x a day and getting ZERO engagement...\"\n[PROBLEM - 3-8s] Show: scrolling through dead posts, frustrated face\n[PIVOT - 8-12s] \"Then I found this AI growth system...\"\n[SOLUTION - 12-20s] Show: dashboard, content calendar filling up, analytics going up\n[RESULT - 20-25s] \"30K followers in 60 days. Zero burnout.\"\n[CTA - 25-30s] \"Link in bio for your free growth audit.\"",
    adCreative: "🎯 Ad Concept: 'The Ghost Follower Problem'\n\nVisual: Split-screen — left shows generic gym content (gray, dull), right shows AI-optimized content (vibrant, engaging)\n\nHeadline: \"Your content isn't bad. Your strategy is invisible.\"\n\nBody: AI-powered content system that turns fitness brands into algorithms' favorites.\n\nCTA: Get Your Free Brand Audit →",
    suggestions: [
      "Post transformation content at 6AM and 8PM for peak engagement",
      "Use trending audio with original voiceover overlay technique",
      "Create a 'Day in the Life' series — 3.2x higher save rate",
      "Leverage before/after carousels — 47% more shares than static",
      "Build a weekly Q&A series to boost comment velocity"
    ]
  },
  ecommerce: {
    hook: "This Shopify store went from $2K to $47K/month using AI content. Here's the exact system 📦",
    caption: "Every DTC brand hitting $50K+ months has ONE thing in common: content velocity. Not better products. Not lower prices. More visibility, faster. Our AI content engine produces 90 pieces/month — each one optimized for conversion, not vanity metrics. 🚀\n\n#Ecommerce #ShopifyGrowth #DTCBrand #AIMarketing",
    ugcScript: "[HOOK - 0-3s] \"Stop boosting posts and start building a content machine...\"\n[PROBLEM - 3-8s] Show: Shopify dashboard with flat revenue, ad costs going up\n[PIVOT - 8-12s] \"We plugged in an AI growth system and everything changed...\"\n[SOLUTION - 12-20s] Show: content calendar, UGC ads rendering, TikTok shop going live\n[RESULT - 20-25s] \"Revenue 8x'd. Ad costs dropped 60%.\"\n[CTA - 25-30s] \"Get your free brand preview — link below.\"",
    adCreative: "🎯 Ad Concept: 'The Content Drought'\n\nVisual: Product sitting in empty warehouse (boring) → same product in AI-generated lifestyle scene (premium)\n\nHeadline: \"Your product deserves better than stock photos.\"\n\nBody: AI-powered UGC and content system that turns products into scroll-stoppers.\n\nCTA: See Your Brand Transformed →",
    suggestions: [
      "Launch TikTok Shop integration with UGC-style product demos",
      "Create unboxing series with AI-generated voiceover narration",
      "Run A/B hook testing — first 3 seconds determine 80% of performance",
      "Deploy shoppable Reels with direct product tagging",
      "Build a 'customer story' template series for social proof"
    ]
  },
  saas: {
    hook: "This SaaS founder replaced their $15K/month agency with an AI system. Monthly output: 10x. Cost: 90% less 🤯",
    caption: "SaaS growth isn't about feature launches anymore. It's about attention infrastructure. The startups winning in 2026 have content engines running 24/7 — automated, AI-optimized, and converting. Your product is the engine. Content is the fuel. Let us build the pipeline. ⚡\n\n#SaaS #StartupGrowth #B2BContent #AIGrowth",
    ugcScript: "[HOOK - 0-3s] \"Our SaaS was invisible. Great product, zero traction...\"\n[PROBLEM - 3-8s] Show: empty analytics, competitors dominating feeds\n[PIVOT - 8-12s] \"We didn't hire an agency. We deployed an AI content operating system...\"\n[SOLUTION - 12-20s] Show: content pipeline, automated posts, engagement spikes\n[RESULT - 20-25s] \"Pipeline grew 400%. CAC dropped to $12.\"\n[CTA - 25-30s] \"Book your growth architecture session.\"",
    adCreative: "🎯 Ad Concept: 'The Invisible SaaS'\n\nVisual: Amazing product dashboard (left) vs. empty social feeds & zero brand awareness (right)\n\nHeadline: \"You built the product. We build the attention.\"\n\nBody: AI growth infrastructure that turns invisible SaaS into category leaders.\n\nCTA: Deploy Your Growth System →",
    suggestions: [
      "Create 'build in public' content series — 5x engagement for SaaS",
      "Deploy thought-leadership threads on X with AI-assisted research",
      "Build a product tip series on TikTok — fastest-growing SaaS channel",
      "Launch comparison content: 'Us vs. Old Way' format converts 3x better",
      "Automate LinkedIn carousel posts from blog content"
    ]
  },
  restaurant: {
    hook: "This restaurant went from empty tables to 2-hour waits using ONLY short-form content 🍕",
    caption: "Restaurants don't need better food to fill tables. They need better VISIBILITY. In 2026, your TikTok IS your storefront. One viral reel = 100 reservations. Our AI content system turns your kitchen into a content studio — without disrupting service. 🎬\n\n#RestaurantMarketing #FoodContent #ViralFood #AIContent",
    ugcScript: "[HOOK - 0-3s] \"This restaurant was about to close. Then they tried this...\"\n[PROBLEM - 3-8s] Show: empty restaurant, owner looking stressed\n[PIVOT - 8-12s] \"Instead of ads, they deployed an AI content system...\"\n[SOLUTION - 12-20s] Show: behind-the-scenes food content, chef close-ups, sizzle reels\n[RESULT - 20-25s] \"Full house every night. 500K views on their first reel.\"\n[CTA - 25-30s] \"Get your restaurant's content system started.\"",
    adCreative: "🎯 Ad Concept: 'The Empty Restaurant'\n\nVisual: Stunning food (plated perfectly) but empty dining room → same food, packed house, phones out filming\n\nHeadline: \"The food was always great. The visibility wasn't.\"\n\nBody: AI-powered content system built for restaurants that deserve to be discovered.\n\nCTA: Fill Your Tables With Content →",
    suggestions: [
      "Post chef POV cooking videos — 4x higher engagement than food photos",
      "Create ASMR cooking content — trending audio format for food",
      "Launch 'secret menu' content series for exclusivity and shares",
      "Deploy customer reaction videos as organic social proof",
      "Schedule posts at 11AM and 5PM — peak food craving times"
    ]
  },
  default: {
    hook: "Your competitors are posting 3x a day with AI. You're still doing it manually. Here's what they know 👀",
    caption: "The brands winning online in 2026 aren't creating more content. They're creating SMARTER content. AI-optimized hooks. Data-driven posting schedules. Automated content pipelines. It's not about working harder — it's about building the infrastructure. 🏗️\n\n#ContentStrategy #AIGrowth #BrandVisibility #GrowthHacking",
    ugcScript: "[HOOK - 0-3s] \"I was spending 20 hours/week on content and getting nowhere...\"\n[PROBLEM - 3-8s] Show: overwhelmed creator, multiple apps open, zero results\n[PIVOT - 8-12s] \"Then I discovered AI growth operations...\"\n[SOLUTION - 12-20s] Show: automated dashboard, content being generated, scheduling\n[RESULT - 20-25s] \"Same results. 2 hours/week. Total game changer.\"\n[CTA - 25-30s] \"Get your growth system preview — it's free.\"",
    adCreative: "🎯 Ad Concept: 'The Manual Trap'\n\nVisual: Person drowning in content tasks (left) → same person relaxed while AI dashboard runs (right)\n\nHeadline: \"Stop creating content. Start deploying it.\"\n\nBody: AI-powered growth infrastructure that runs your brand's online presence on autopilot.\n\nCTA: See It In Action →",
    suggestions: [
      "Identify your top 3 content pillars and rotate them weekly",
      "Use AI-generated hooks tested against 50K+ viral templates",
      "Deploy a 30-day content sprint to build algorithmic momentum",
      "Create platform-native content — don't cross-post the same thing",
      "Build a lead magnet from your best-performing organic content"
    ]
  }
};

function getResult(niche: string): DemoResult {
  const n = niche.toLowerCase();
  if (n.includes("fit") || n.includes("gym") || n.includes("health") || n.includes("workout")) return demoResults.fitness;
  if (n.includes("shop") || n.includes("ecom") || n.includes("store") || n.includes("product") || n.includes("brand")) return demoResults.ecommerce;
  if (n.includes("saas") || n.includes("software") || n.includes("app") || n.includes("tech") || n.includes("startup")) return demoResults.saas;
  if (n.includes("food") || n.includes("restaurant") || n.includes("cafe") || n.includes("cook") || n.includes("chef")) return demoResults.restaurant;
  return demoResults.default;
}

export default function LiveDemoSection() {
  const [niche, setNiche] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DemoResult | null>(null);
  const [activeTab, setActiveTab] = useState<"hook" | "caption" | "ugc" | "ad" | "tips">("hook");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!niche.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(getResult(niche));
      setLoading(false);
      setActiveTab("hook");
    }, 2500);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: "hook" as const, label: "TikTok Hook", icon: "🎣" },
    { id: "caption" as const, label: "Caption", icon: "✍️" },
    { id: "ugc" as const, label: "UGC Script", icon: "🎬" },
    { id: "ad" as const, label: "Ad Creative", icon: "📢" },
    { id: "tips" as const, label: "Growth Tips", icon: "💡" },
  ];

  const getActiveContent = () => {
    if (!result) return "";
    switch (activeTab) {
      case "hook": return result.hook;
      case "caption": return result.caption;
      case "ugc": return result.ugcScript;
      case "ad": return result.adCreative;
      case "tips": return result.suggestions.map((s, i) => `${i + 1}. ${s}`).join("\n\n");
    }
  };

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-cyan mb-4">
            <Wand2 className="w-3 h-3" />
            LIVE AI DEMO
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            See The System In{" "}
            <span className="gradient-text">Real-Time</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Enter your business details and watch the AI generate your growth 
            content instantly — hooks, scripts, ads, and strategy.
          </p>
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-6 md:p-8 max-w-3xl mx-auto mb-8"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm text-white/50 mb-2">Your Niche</label>
              <input
                type="text"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g., Fitness, SaaS, E-commerce, Restaurant..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-white/50 mb-2">Business Type</label>
              <input
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="e.g., Online coaching, Shopify store..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/30 transition-all"
              />
            </div>
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading || !niche.trim()}
            className="w-full btn-shimmer py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                AI is analyzing your niche...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate My Brand Preview
              </>
            )}
          </button>
        </motion.div>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass rounded-3xl overflow-hidden max-w-4xl mx-auto"
            >
              {/* Tabs */}
              <div className="flex overflow-x-auto border-b border-white/5 p-2 gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                        : "text-white/50 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span className="text-xs text-white/40">AI Generated • {niche}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(getActiveContent())}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-xs transition-all"
                    >
                      {copied ? <Check className="w-3 h-3 text-neon-green" /> : <Copy className="w-3 h-3" />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                    <button
                      onClick={handleGenerate}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-xs transition-all"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Regenerate
                    </button>
                  </div>
                </div>

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-dark-900/50 rounded-2xl p-6 border border-white/5"
                >
                  {activeTab === "tips" ? (
                    <div className="space-y-3">
                      {result.suggestions.map((tip, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full bg-neon-purple/20 text-neon-purple flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">{tip}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <pre className="whitespace-pre-wrap text-white/80 text-sm md:text-base leading-relaxed font-sans">
                      {getActiveContent()}
                    </pre>
                  )}
                </motion.div>

                {/* CTA */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 border border-neon-purple/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-semibold text-sm">Want the full system?</p>
                    <p className="text-white/40 text-xs">Get 30-90 pieces like this every month, fully automated.</p>
                  </div>
                  <a
                    href="/packages"
                    className="btn-shimmer px-6 py-2.5 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm font-semibold whitespace-nowrap"
                  >
                    View Packages →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
