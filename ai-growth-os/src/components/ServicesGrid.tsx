"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Video, Megaphone, Bot, BarChart3, Palette, Workflow, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "30 Viral-Style Reels In 7 Days",
    description: "AI-generated short-form content optimized for TikTok, Reels, and Shorts. Hooks, captions, and CTAs included.",
    price: "From $299/mo",
    color: "from-neon-purple to-purple-600",
    glowColor: "shadow-purple-500/20",
    features: ["AI-crafted hooks", "Trend adaptation", "Platform optimization", "Caption generation"],
  },
  {
    icon: Megaphone,
    title: "AI UGC Ad System",
    description: "Convert-optimized UGC-style ads powered by AI scripts, voiceovers, and performance frameworks.",
    price: "From $500/pkg",
    color: "from-neon-pink to-rose-600",
    glowColor: "shadow-pink-500/20",
    features: ["AI actor generation", "Hook testing variants", "Meta/TikTok formats", "Script optimization"],
  },
  {
    icon: Bot,
    title: "Growth Automation Setup",
    description: "End-to-end CRM workflows, lead capture, AI support, email sequences, and posting automation.",
    price: "From $1,000",
    color: "from-neon-cyan to-cyan-600",
    glowColor: "shadow-cyan-500/20",
    features: ["CRM integration", "Lead capture flows", "AI customer support", "Email automation"],
  },
  {
    icon: BarChart3,
    title: "TikTok Growth Pipeline",
    description: "Full TikTok domination system — daily content, trend surfing, community engagement, and analytics.",
    price: "From $799/mo",
    color: "from-neon-green to-emerald-600",
    glowColor: "shadow-emerald-500/20",
    features: ["Daily posting", "Trend analysis", "Community building", "Growth analytics"],
  },
  {
    icon: Palette,
    title: "AI Visual Content Studio",
    description: "Premium AI-generated visuals, thumbnails, carousels, and brand assets at unprecedented scale.",
    price: "From $499/mo",
    color: "from-neon-orange to-amber-600",
    glowColor: "shadow-orange-500/20",
    features: ["AI image generation", "Brand consistency", "Carousel design", "Thumbnail optimization"],
  },
  {
    icon: Workflow,
    title: "Content Velocity Engine",
    description: "The complete system — content, ads, automation, analytics, and growth ops fully integrated.",
    price: "From $2,500/mo",
    color: "from-violet-500 to-indigo-600",
    glowColor: "shadow-violet-500/20",
    features: ["All services included", "Dedicated pipeline", "Priority delivery", "Growth consulting"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-green mb-4">
            <Workflow className="w-3 h-3" />
            GROWTH OPERATIONS
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Not Services.{" "}
            <span className="gradient-text">Systems.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Each module is a self-running growth machine. Plug in, scale up, dominate your niche.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group glass rounded-3xl p-6 md:p-8 hover-card relative overflow-hidden`}
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.glowColor} shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs text-white/50">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-lg font-bold gradient-text">{service.price}</span>
                <Link
                  href="/packages"
                  className="flex items-center gap-1 text-sm text-white/50 hover:text-white group-hover:translate-x-1 transition-all"
                >
                  Deploy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
