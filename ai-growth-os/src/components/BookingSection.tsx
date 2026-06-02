"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CreditCard, FileText, Zap, Shield, Clock, Users } from "lucide-react";

export default function BookingSection() {
  const [activeTab, setActiveTab] = useState<"instant" | "apply">("instant");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    budget: "",
    goals: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-orange mb-4">
            <Zap className="w-3 h-3" />
            DEPLOY NOW
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Ready To{" "}
            <span className="gradient-text">Scale?</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Two paths. One result: your brand everywhere, consistently, automatically.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="glass rounded-2xl p-1.5 inline-flex">
            <button
              onClick={() => setActiveTab("instant")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "instant"
                  ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Instant Checkout
            </button>
            <button
              onClick={() => setActiveTab("apply")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "apply"
                  ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              Apply For Custom
            </button>
          </div>
        </div>

        {/* Instant Checkout */}
        {activeTab === "instant" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Starter",
                price: "$299",
                period: "/month",
                features: [
                  "15 short-form videos",
                  "AI-crafted captions",
                  "Post scheduling",
                  "Basic analytics",
                  "Email support",
                ],
                color: "from-blue-500 to-cyan-500",
                popular: false,
              },
              {
                name: "Growth",
                price: "$799",
                period: "/month",
                features: [
                  "60 short-form videos",
                  "AI hooks & scripts",
                  "AI-generated visuals",
                  "Content strategy",
                  "Trend adaptation",
                  "Priority support",
                  "Growth analytics",
                ],
                color: "from-neon-purple to-neon-pink",
                popular: true,
              },
              {
                name: "Domination",
                price: "$2,500",
                period: "+/month",
                features: [
                  "Daily content ops",
                  "AI UGC ad system",
                  "Full automation setup",
                  "Analytics dashboard",
                  "Campaign management",
                  "Dedicated strategist",
                  "24/7 priority support",
                  "Custom integrations",
                ],
                color: "from-amber-500 to-orange-500",
                popular: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass rounded-3xl p-6 md:p-8 hover-card ${
                  plan.popular ? "ring-2 ring-neon-purple/50 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black gradient-text">{plan.price}</span>
                  <span className="text-white/30 text-sm">{plan.period}</span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-neon-green flex-shrink-0" />
                      <span className="text-white/60 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${
                    plan.popular
                      ? "btn-shimmer bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
                >
                  Get Started →
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Application Form */}
        {activeTab === "apply" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-6 md:p-10 max-w-2xl mx-auto"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-neon-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Application Received!</h3>
                <p className="text-white/50">
                  Our AI system is analyzing your brand right now. You&apos;ll receive a custom growth 
                  preview within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">Apply For Custom Growth System</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 transition-all"
                        placeholder="john@brand.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1">Business / Brand</label>
                    <input
                      type="text"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 transition-all"
                      placeholder="Brand name or URL"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1">Website / Social URL</label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 transition-all"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1">Monthly Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-neon-purple/50 transition-all"
                    >
                      <option value="" className="bg-dark-900">Select range...</option>
                      <option value="299-799" className="bg-dark-900">$299 - $799/mo</option>
                      <option value="800-2500" className="bg-dark-900">$800 - $2,500/mo</option>
                      <option value="2500-5000" className="bg-dark-900">$2,500 - $5,000/mo</option>
                      <option value="5000+" className="bg-dark-900">$5,000+/mo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1">Growth Goals</label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-neon-purple/50 transition-all resize-none"
                      placeholder="What does success look like for your brand in 90 days?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-shimmer py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  >
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: Shield, text: "Secure Checkout" },
            { icon: Clock, text: "24hr Delivery Start" },
            { icon: Users, text: "340+ Brands Scaled" },
            { icon: Zap, text: "AI-Powered" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/30 text-sm">
              <item.icon className="w-4 h-4" />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
