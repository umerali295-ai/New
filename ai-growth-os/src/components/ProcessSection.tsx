"use client";
import { motion } from "framer-motion";
import { Database, Brain, Cpu, Layers, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Input",
    description: "Submit your niche, products, brand tone, and references. Takes 5 minutes.",
    color: "from-neon-cyan to-blue-500",
    details: ["Niche & competitors", "Brand assets", "Tone & voice", "Product catalog"],
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Processing",
    description: "Our AI engine researches trends, generates hooks, scripts, and visual concepts.",
    color: "from-neon-purple to-violet-500",
    details: ["Trend research", "Hook generation", "Script writing", "Visual concepts"],
  },
  {
    icon: Cpu,
    number: "03",
    title: "Production",
    description: "Content is generated, assembled, and optimized for each platform automatically.",
    color: "from-neon-pink to-rose-500",
    details: ["Video generation", "Caption writing", "CTA optimization", "Format adaptation"],
  },
  {
    icon: Layers,
    number: "04",
    title: "Delivery",
    description: "Assets uploaded to your dashboard. Review, approve, request revisions.",
    color: "from-neon-orange to-amber-500",
    details: ["Dashboard upload", "Preview & approve", "Revision loop", "Calendar scheduling"],
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deployment",
    description: "Content published on schedule. Engagement tracked. Pipeline repeats.",
    color: "from-neon-green to-emerald-500",
    details: ["Auto-publishing", "Engagement tracking", "Performance data", "Pipeline restart"],
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="section-divider" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-cyan mb-4">
            <Cpu className="w-3 h-3" />
            AUTOMATED PIPELINE
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            How The{" "}
            <span className="gradient-text">System Works</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            From input to output in hours, not weeks. Fully automated, AI-driven, human-refined.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-20" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`lg:flex items-center gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } mb-8 lg:mb-12`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`glass rounded-3xl p-6 md:p-8 hover-card inline-block w-full`}>
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-white/30 font-mono">STEP {step.number}</span>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mb-4">{step.description}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                      {step.details.map((detail, di) => (
                        <span
                          key={di}
                          className="px-3 py-1 rounded-lg bg-white/5 text-white/40 text-xs"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex items-center justify-center w-16">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg pulse-ring`}>
                    {step.number}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
