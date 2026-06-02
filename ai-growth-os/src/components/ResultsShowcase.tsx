"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, BarChart3, ArrowUpRight } from "lucide-react";

const metrics = [
  {
    label: "Engagement Rate",
    before: "1.2%",
    after: "8.7%",
    change: "+625%",
    icon: TrendingUp,
    color: "text-neon-green",
    bgColor: "bg-neon-green/10",
    barWidth: "87%",
  },
  {
    label: "Monthly Reach",
    before: "12K",
    after: "890K",
    change: "+7,317%",
    icon: Eye,
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
    barWidth: "92%",
  },
  {
    label: "Follower Growth",
    before: "+200/mo",
    after: "+12K/mo",
    change: "+5,900%",
    icon: Users,
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    barWidth: "78%",
  },
  {
    label: "Content Output",
    before: "8/mo",
    after: "90/mo",
    change: "+1,025%",
    icon: BarChart3,
    color: "text-neon-pink",
    bgColor: "bg-neon-pink/10",
    barWidth: "95%",
  },
];

const analyticsData = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 52 },
  { month: "May", value: 78 },
  { month: "Jun", value: 95 },
];

export default function ResultsShowcase() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-green mb-4">
            <BarChart3 className="w-3 h-3" />
            GROWTH METRICS
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Numbers Don&apos;t{" "}
            <span className="gradient-text">Lie</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Real performance data from AI-powered growth systems deployed across brands.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before/After Cards */}
          <div className="space-y-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${metric.bgColor} flex items-center justify-center`}>
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{metric.label}</h4>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-white/30">{metric.before}</span>
                        <span className="text-white/20">→</span>
                        <span className={metric.color}>{metric.after}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-lg ${metric.bgColor}`}>
                    <ArrowUpRight className={`w-3 h-3 ${metric.color}`} />
                    <span className={`text-sm font-bold ${metric.color}`}>{metric.change}</span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: metric.barWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                    className={`h-full rounded-full bg-gradient-to-r ${
                      i === 0 ? "from-green-500 to-emerald-400" :
                      i === 1 ? "from-cyan-500 to-blue-400" :
                      i === 2 ? "from-purple-500 to-violet-400" :
                      "from-pink-500 to-rose-400"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Analytics Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-bold text-lg">Growth Dashboard</h3>
                <p className="text-white/40 text-sm">6-month performance overview</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neon-green/10">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-neon-green text-xs font-medium">Live</span>
              </div>
            </div>

            {/* Chart */}
            <div className="relative h-48 flex items-end justify-between gap-2 mb-6 p-4 rounded-2xl bg-white/3">
              {analyticsData.map((data, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${data.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-neon-purple to-neon-cyan relative group"
                    style={{ maxHeight: "100%" }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-white/10 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.value}K
                    </div>
                  </motion.div>
                  <span className="text-xs text-white/30">{data.month}</span>
                </div>
              ))}
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "CTR", value: "4.8%", change: "+2.1%" },
                { label: "Saves", value: "12.4K", change: "+340%" },
                { label: "Leads", value: "847", change: "+89%" },
              ].map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/3 text-center">
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-white/30 text-xs">{stat.label}</div>
                  <div className="text-neon-green text-xs font-medium">{stat.change}</div>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-xs text-center mt-4">
              *Sample growth architecture — demo brand data
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
