"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, Zap, Star, Shield, Clock, Users, Crown, Rocket, Flame } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "For brands ready to start their AI content journey",
    price: "$299",
    period: "/month",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/20",
    popular: false,
    features: [
      { name: "15 short-form videos/month", included: true },
      { name: "AI-crafted captions", included: true },
      { name: "Post scheduling", included: true },
      { name: "Basic analytics report", included: true },
      { name: "2 content pillars", included: true },
      { name: "Email support", included: true },
      { name: "Hook optimization", included: false },
      { name: "AI visuals", included: false },
      { name: "UGC ads", included: false },
      { name: "Automation setup", included: false },
      { name: "Growth strategy", included: false },
      { name: "Dedicated strategist", included: false },
    ],
  },
  {
    name: "Growth",
    tagline: "For brands ready to dominate their niche",
    price: "$799",
    period: "/month",
    icon: Rocket,
    color: "from-neon-purple to-neon-pink",
    glowColor: "shadow-purple-500/20",
    popular: true,
    features: [
      { name: "60 short-form videos/month", included: true },
      { name: "AI-crafted captions & CTAs", included: true },
      { name: "Post scheduling (all platforms)", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "5 content pillars", included: true },
      { name: "Priority support", included: true },
      { name: "AI hook optimization", included: true },
      { name: "AI-generated visuals", included: true },
      { name: "Content strategy sessions", included: true },
      { name: "Trend adaptation", included: true },
      { name: "UGC ads (basic)", included: false },
      { name: "Full automation setup", included: false },
    ],
  },
  {
    name: "Domination",
    tagline: "For brands that want to own their market",
    price: "$2,500",
    period: "+/month",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    glowColor: "shadow-orange-500/20",
    popular: false,
    features: [
      { name: "90+ short-form videos/month", included: true },
      { name: "AI captions, hooks, CTAs", included: true },
      { name: "Full platform scheduling", included: true },
      { name: "Real-time analytics dashboard", included: true },
      { name: "Unlimited content pillars", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Advanced hook optimization", included: true },
      { name: "Premium AI visuals", included: true },
      { name: "Weekly strategy sessions", included: true },
      { name: "Daily trend adaptation", included: true },
      { name: "AI UGC ad system", included: true },
      { name: "Full automation + CRM setup", included: true },
    ],
  },
];

const addons = [
  {
    name: "UGC Ad Factory",
    price: "From $500",
    description: "AI-generated UGC ads, scripts, voiceovers, and hook variations.",
    icon: Flame,
  },
  {
    name: "Growth Automation Setup",
    price: "From $1,000",
    description: "CRM workflows, lead capture, email automation, AI support.",
    icon: Zap,
  },
  {
    name: "Content Sprint",
    price: "From $999",
    description: "30-day intensive content burst. Maximum velocity.",
    icon: Rocket,
  },
];

const faqs = [
  {
    q: "How fast do I get my first content?",
    a: "Within 48-72 hours of onboarding. We move fast because the system is AI-powered — not dependent on human bottlenecks."
  },
  {
    q: "Do I need to be on camera?",
    a: "No. We use AI-generated visuals, stock footage, motion graphics, and AI actors. You provide brand assets — we handle everything else."
  },
  {
    q: "Can I request revisions?",
    a: "Yes. Every plan includes revision rounds. Growth and Domination plans include unlimited revisions."
  },
  {
    q: "What platforms do you create content for?",
    a: "TikTok, Instagram Reels, YouTube Shorts, Facebook, LinkedIn, and Twitter/X. Each piece is formatted natively for the platform."
  },
  {
    q: "Is this just templates?",
    a: "No. Every piece of content is generated specifically for your brand, niche, and audience. AI-researched, custom-crafted, human-refined."
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. Month-to-month billing. Cancel anytime."
  },
];

export default function PackagesPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 relative">
        <div className="absolute inset-0 neural-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-orange mb-4">
              <Crown className="w-3 h-3" />
              GROWTH PACKAGES
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              Choose Your{" "}<span className="gradient-text">Growth Level</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Simple pricing. No hidden fees. Scale up or down anytime. 
              Every plan includes AI-powered content, optimized for conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="relative pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="glass rounded-2xl p-1.5 inline-flex">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white"
                    : "text-white/50"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("quarterly")}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                  billingPeriod === "quarterly"
                    ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white"
                    : "text-white/50"
                }`}
              >
                Quarterly
                <span className="px-2 py-0.5 rounded-full bg-neon-green/20 text-neon-green text-xs">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Package Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {packages.map((pkg, i) => {
              const priceNum = parseInt(pkg.price.replace(/[^0-9]/g, ""));
              const displayPrice = billingPeriod === "quarterly"
                ? `$${Math.round(priceNum * 0.8).toLocaleString()}`
                : pkg.price;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative glass rounded-3xl p-6 md:p-8 ${
                    pkg.popular ? "ring-2 ring-neon-purple/50 md:scale-105 md:-my-4" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      MOST POPULAR
                    </div>
                  )}

                  {/* Header */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-4 ${pkg.glowColor} shadow-lg`}>
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">{pkg.name}</h3>
                  <p className="text-white/40 text-sm mb-6">{pkg.tagline}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-black gradient-text">{displayPrice}</span>
                    <span className="text-white/30">{pkg.period}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-white/15 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-white/60" : "text-white/20"}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? "btn-shimmer bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:opacity-90 animate-pulse-glow"
                        : "bg-white/10 text-white hover:bg-white/15"
                    }`}
                  >
                    Get {pkg.name}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
            Power <span className="gradient-text">Add-Ons</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover-card"
              >
                <addon.icon className="w-8 h-8 text-neon-purple mb-3" />
                <h3 className="text-white font-bold mb-1">{addon.name}</h3>
                <p className="text-white/40 text-sm mb-3">{addon.description}</p>
                <span className="text-lg font-bold gradient-text">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="relative py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "Secure Payments", sub: "Stripe-powered" },
              { icon: Clock, label: "Fast Delivery", sub: "48hr turnaround" },
              { icon: Users, label: "340+ Brands", sub: "Trust us" },
              { icon: Star, label: "Cancel Anytime", sub: "No contracts" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <item.icon className="w-6 h-6 text-neon-purple mb-2" />
                <span className="text-white font-semibold text-sm">{item.label}</span>
                <span className="text-white/30 text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                  <span className="text-white/30 text-xl flex-shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5"
                  >
                    <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-pink/5">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Ready to become <span className="gradient-text">impossible to ignore?</span>
            </h2>
            <p className="text-white/40 mb-8 max-w-xl mx-auto">
              Deploy your AI growth system today. First content delivered within 48 hours.
            </p>
            <button className="btn-shimmer px-10 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg hover:opacity-90 transition-all animate-pulse-glow">
              Get Started Now →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
