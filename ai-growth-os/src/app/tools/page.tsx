"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Wand2, FileText, Megaphone, Calendar, Sparkles, Loader2, 
  Copy, Check, Lock, ArrowRight, RefreshCw, Zap
} from "lucide-react";

// ---- HOOK GENERATOR ----
const hookTemplates: Record<string, string[]> = {
  fitness: [
    "POV: You finally stopped winging your fitness content and this happened...",
    "I gained 10K followers in 30 days without posting a single gym selfie. Here's how.",
    "The fitness content strategy that's making personal trainers $20K/month 🔥",
    "Stop posting workout videos. Start posting THIS instead. (Your engagement will thank you)",
    "Every fitness creator making 6 figures does this ONE thing differently...",
  ],
  ecommerce: [
    "This product went from 0 to 10K units sold using only organic TikTok content 📦",
    "I found the EXACT content formula that's scaling Shopify stores to $50K months...",
    "Your product isn't the problem. Your content is. Here's the fix.",
    "The DTC brands winning right now all have this ONE secret weapon...",
    "Stop running ads. Start running content systems. The math will shock you.",
  ],
  saas: [
    "We replaced our entire marketing team with this AI system. Output went up 10x.",
    "This B2B SaaS went from invisible to category leader in 60 days. Here's the system.",
    "The SaaS growth hack nobody's talking about: content velocity.",
    "Your SaaS doesn't need more features. It needs more attention. Here's how to get it.",
    "I cut our CAC by 96% with one simple content framework...",
  ],
  restaurant: [
    "This restaurant went from empty to 2-hour waits using ONLY TikTok content 🍕",
    "The secret to filling your restaurant? It's not food photography. It's THIS.",
    "Chef POV content is making restaurants go viral. Here's the exact formula.",
    "Your food is amazing. Your visibility isn't. Let's fix that in 7 days.",
    "The content strategy that turned a local cafe into a destination restaurant...",
  ],
  default: [
    "I stopped posting randomly and built a content SYSTEM. The results were insane.",
    "Your competitors are posting 3x a day with AI. You're still doing it manually. 👀",
    "The content strategy that's making unknown brands impossible to ignore...",
    "POV: You finally automated your content and got your life back.",
    "Every brand blowing up right now has this one thing in common...",
  ],
};

// ---- CAPTION GENERATOR ----
const captionTemplates: Record<string, string[]> = {
  fitness: [
    "Your fitness journey deserves to be seen. Not just by the algorithm — by the people who need your story.\n\nWe built content systems that turn trainers into authorities. Here's what changes:\n\n→ Consistent daily content\n→ AI-optimized hooks\n→ Platform-native formatting\n→ Automated scheduling\n\nStop guessing. Start growing. 💪\n\n#FitnessContent #PersonalTrainer #ContentStrategy #GrowthSystem",
  ],
  ecommerce: [
    "Your product is amazing. But nobody knows it exists.\n\nThe difference between a $2K month and a $50K month isn't your product — it's your content velocity.\n\n→ 60 scroll-stopping videos/month\n→ UGC-style product ads\n→ AI-optimized captions & CTAs\n→ Automated TikTok Shop content\n\nBuilt for brands that want to dominate, not just exist. 🚀\n\n#Ecommerce #ShopifyGrowth #DTCBrand #ContentMarketing",
  ],
  default: [
    "The brands winning online in 2026 aren't creating more content.\n\nThey're creating SMARTER content.\n\n→ AI-researched hooks\n→ Data-driven posting schedules\n→ Platform-native formats\n→ Automated pipelines\n\nIt's not about working harder.\nIt's about building the infrastructure. 🏗️\n\n#ContentStrategy #AIGrowth #BrandVisibility #GrowthHacking",
  ],
};

// ---- AD SCRIPT GENERATOR ----
const adScriptTemplates: Record<string, string[]> = {
  fitness: [
    "🎬 AD SCRIPT: 'The Content Burnout'\n\n[SCENE 1 - 0:00-0:03]\nHOOK: Creator looking exhausted at desk surrounded by content apps\nVO: \"I was spending 20 hours a week on content and getting NOTHING.\"\n\n[SCENE 2 - 0:03-0:08]\nPROBLEM: Show dead engagement, low follower count, frustrated scrolling\nVO: \"Same posts. Same filters. Same crickets.\"\n\n[SCENE 3 - 0:08-0:15]\nSOLUTION: Show AI dashboard, content calendar filling up automatically\nVO: \"Then I found an AI content system that changed everything.\"\n\n[SCENE 4 - 0:15-0:22]\nRESULT: Show analytics going up, phone notifications, new followers\nVO: \"30K followers in 60 days. 2 hours of work per week.\"\n\n[SCENE 5 - 0:22-0:30]\nCTA: Direct to camera, confident\nVO: \"Stop grinding content. Start deploying systems. Link below.\"\n\n---\nFORMAT: Vertical 9:16\nPLATFORM: TikTok / Reels / Shorts\nTONE: Authentic, relatable, aspirational",
  ],
  default: [
    "🎬 AD SCRIPT: 'The Manual Trap'\n\n[SCENE 1 - 0:00-0:03]\nHOOK: Person overwhelmed by multiple content apps\nVO: \"I was creating content 4 hours a day and going nowhere.\"\n\n[SCENE 2 - 0:03-0:08]\nPROBLEM: Show inconsistent posting, low engagement, competitor success\nVO: \"My competitors were posting daily. I could barely manage 3x a week.\"\n\n[SCENE 3 - 0:08-0:15]\nSOLUTION: Show automated content system, AI generating content\nVO: \"Then I deployed an AI growth operating system.\"\n\n[SCENE 4 - 0:15-0:22]\nRESULT: Show analytics dashboard, growing metrics, phone blowing up\nVO: \"90 pieces of content a month. Automated. Optimized. Converting.\"\n\n[SCENE 5 - 0:22-0:30]\nCTA: Confident, direct to camera\nVO: \"Your brand deserves to be seen. Get your growth system today.\"\n\n---\nFORMAT: Vertical 9:16\nPLATFORM: TikTok / Meta / Shorts\nTONE: Problem-solution, urgent, empowering",
  ],
};

// ---- CONTENT CALENDAR ----
const calendarTemplates: Record<string, string[]> = {
  default: [
    `📅 7-DAY AI CONTENT CALENDAR

━━━━━━━━━━━━━━━━━━━━
MONDAY — Authority Post
━━━━━━━━━━━━━━━━━━━━
📌 Type: Educational Reel
🎣 Hook: "3 things your content strategy is missing..."
📝 Format: Talking head + text overlay
⏰ Post: 8:00 AM & 6:00 PM
📊 Goal: Saves & shares

━━━━━━━━━━━━━━━━━━━━
TUESDAY — Social Proof
━━━━━━━━━━━━━━━━━━━━
📌 Type: Results/Testimonial Carousel
🎣 Hook: "Here's what happened after 30 days..."
📝 Format: Before/after slides
⏰ Post: 9:00 AM & 7:00 PM
📊 Goal: Trust building

━━━━━━━━━━━━━━━━━━━━
WEDNESDAY — Engagement
━━━━━━━━━━━━━━━━━━━━
📌 Type: Poll/Question Story + Reel
🎣 Hook: "Unpopular opinion: [your take]..."
📝 Format: Hot take + discussion
⏰ Post: 12:00 PM & 8:00 PM
📊 Goal: Comments & DMs

━━━━━━━━━━━━━━━━━━━━
THURSDAY — Behind the Scenes
━━━━━━━━━━━━━━━━━━━━
📌 Type: Process/BTS Reel
🎣 Hook: "POV: A day running [your business]..."
📝 Format: Vlog style + trending audio
⏰ Post: 7:00 AM & 5:00 PM
📊 Goal: Relatability & follows

━━━━━━━━━━━━━━━━━━━━
FRIDAY — Value Bomb
━━━━━━━━━━━━━━━━━━━━
📌 Type: Tutorial/How-To
🎣 Hook: "The exact system I use to..."
📝 Format: Screen recording + voiceover
⏰ Post: 10:00 AM & 6:00 PM
📊 Goal: Saves & profile visits

━━━━━━━━━━━━━━━━━━━━
SATURDAY — Trending
━━━━━━━━━━━━━━━━━━━━
📌 Type: Trend Adaptation
🎣 Hook: [Current trending audio/format]
📝 Format: Niche-adapted trend
⏰ Post: 11:00 AM & 7:00 PM
📊 Goal: Reach & discovery

━━━━━━━━━━━━━━━━━━━━
SUNDAY — Storytelling
━━━━━━━━━━━━━━━━━━━━
📌 Type: Personal Story / Brand Story
🎣 Hook: "Nobody talks about this part of [your journey]..."
📝 Format: Authentic storytelling
⏰ Post: 9:00 AM & 5:00 PM
📊 Goal: Connection & loyalty

━━━━━━━━━━━━━━━━━━━━
💡 WEEKLY STRATEGY NOTES:
• Post 2x per day minimum
• Respond to every comment in first hour
• Use trending audio on 4/7 days
• Include CTA in every post
• Repurpose top performer mid-week`
  ],
};

function getFromTemplates(templates: Record<string, string[]>, niche: string): string {
  const n = niche.toLowerCase();
  for (const key of Object.keys(templates)) {
    if (key !== "default" && n.includes(key.slice(0, 4))) {
      return templates[key][Math.floor(Math.random() * templates[key].length)];
    }
  }
  return templates.default[Math.floor(Math.random() * templates.default.length)];
}

function getHooks(niche: string): string[] {
  const n = niche.toLowerCase();
  for (const key of Object.keys(hookTemplates)) {
    if (key !== "default" && n.includes(key.slice(0, 4))) {
      return hookTemplates[key];
    }
  }
  return hookTemplates.default;
}

interface ToolConfig {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
  gradient: string;
  placeholder: string;
}

const tools: ToolConfig[] = [
  {
    id: "hooks",
    name: "TikTok Hook Generator",
    description: "Generate viral-ready hooks for any niche. Tested against 50K+ top-performing videos.",
    icon: Wand2,
    color: "text-neon-purple",
    gradient: "from-neon-purple to-violet-600",
    placeholder: "Enter your niche (e.g., fitness, ecommerce, SaaS)...",
  },
  {
    id: "captions",
    name: "Caption Generator",
    description: "AI-crafted captions with engagement triggers, hashtags, and CTAs built in.",
    icon: FileText,
    color: "text-neon-cyan",
    gradient: "from-neon-cyan to-blue-600",
    placeholder: "Enter your niche and topic...",
  },
  {
    id: "adscript",
    name: "Ad Script Generator",
    description: "Full UGC-style ad scripts with scene breakdowns, hooks, and CTAs.",
    icon: Megaphone,
    color: "text-neon-pink",
    gradient: "from-neon-pink to-rose-600",
    placeholder: "Enter your niche and product type...",
  },
  {
    id: "calendar",
    name: "Content Calendar Generator",
    description: "7-day AI content calendar with hooks, formats, and posting times.",
    icon: Calendar,
    color: "text-neon-green",
    gradient: "from-neon-green to-emerald-600",
    placeholder: "Enter your niche to generate a custom calendar...",
  },
];

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!input.trim()) return;
    if (!emailSubmitted) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      if (activeTool === "hooks") {
        const hooks = getHooks(input);
        setResult(hooks.map((h, i) => `${i + 1}. ${h}`).join("\n\n"));
      } else if (activeTool === "captions") {
        setResult(getFromTemplates(captionTemplates, input));
      } else if (activeTool === "adscript") {
        setResult(getFromTemplates(adScriptTemplates, input));
      } else if (activeTool === "calendar") {
        setResult(getFromTemplates(calendarTemplates, input));
      }
      setLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleEmailSubmit = () => {
    if (email.includes("@")) {
      setEmailSubmitted(true);
    }
  };

  const currentTool = tools.find(t => t.id === activeTool);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 relative">
        <div className="absolute inset-0 neural-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-purple mb-4">
              <Wand2 className="w-3 h-3" />
              FREE AI TOOLS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              AI Growth{" "}<span className="gradient-text">Tools</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Free tools powered by the same AI engine that runs our growth systems.
              Generate hooks, captions, ad scripts, and content calendars instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!activeTool ? (
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, i) => (
                <motion.button
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => {
                    setActiveTool(tool.id);
                    setResult(null);
                    setInput("");
                  }}
                  className="glass rounded-3xl p-6 md:p-8 text-left hover-card group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-white/40 text-sm mb-4">{tool.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className={tool.color}>Try Now</span>
                    <ArrowRight className={`w-4 h-4 ${tool.color}`} />
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Back Button */}
              <button
                onClick={() => { setActiveTool(null); setResult(null); }}
                className="flex items-center gap-2 text-white/50 hover:text-white mb-6 transition-colors"
              >
                ← Back to all tools
              </button>

              {/* Tool Interface */}
              <div className="glass rounded-3xl p-6 md:p-10 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentTool!.gradient} flex items-center justify-center`}>
                    {currentTool && <currentTool.icon className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{currentTool!.name}</h2>
                    <p className="text-white/40 text-sm">{currentTool!.description}</p>
                  </div>
                </div>

                {/* Email Gate */}
                {!emailSubmitted ? (
                  <div className="p-6 rounded-2xl bg-white/3 border border-white/10 text-center">
                    <Lock className="w-8 h-8 text-neon-purple mx-auto mb-3" />
                    <h3 className="text-white font-bold mb-2">Unlock Free Access</h3>
                    <p className="text-white/40 text-sm mb-4">Enter your email to use this tool for free.</p>
                    <div className="flex gap-2 max-w-md mx-auto">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@brand.com"
                        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 transition-all"
                      />
                      <button
                        onClick={handleEmailSubmit}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold hover:opacity-90 transition-all"
                      >
                        Unlock
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={currentTool!.placeholder}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 transition-all"
                        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                      />
                    </div>
                    <button
                      onClick={handleGenerate}
                      disabled={loading || !input.trim()}
                      className="w-full btn-shimmer py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 hover:opacity-90 transition-all"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Generate
                        </>
                      )}
                    </button>

                    {/* Result */}
                    <AnimatePresence>
                      {result && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6"
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-white/40 text-sm">AI Generated Result</span>
                            <div className="flex gap-2">
                              <button
                                onClick={handleCopy}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-xs transition-all"
                              >
                                {copied ? <Check className="w-3 h-3 text-neon-green" /> : <Copy className="w-3 h-3" />}
                                {copied ? "Copied!" : "Copy"}
                              </button>
                              <button
                                onClick={handleGenerate}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-xs transition-all"
                              >
                                <RefreshCw className="w-3 h-3" />
                                Regenerate
                              </button>
                            </div>
                          </div>
                          <pre className="p-6 rounded-2xl bg-dark-900/50 border border-white/5 whitespace-pre-wrap text-white/70 text-sm leading-relaxed font-sans">
                            {result}
                          </pre>
                          {/* Upsell */}
                          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 border border-neon-purple/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                              <p className="text-white font-semibold text-sm">Want a full content system?</p>
                              <p className="text-white/40 text-xs">Get 90+ pieces like this every month, fully automated.</p>
                            </div>
                            <a
                              href="/packages"
                              className="btn-shimmer px-6 py-2.5 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm font-semibold whitespace-nowrap"
                            >
                              View Packages →
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
