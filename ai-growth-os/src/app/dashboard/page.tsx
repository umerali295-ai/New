"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LayoutDashboard, Calendar, FileVideo, BarChart3, MessageSquare,
  Settings, Bell, Search, Plus, Clock, CheckCircle2, Eye, TrendingUp,
  Heart, Share2, ArrowUpRight, Filter, Download, Upload, Image
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: FileVideo, label: "Content Queue" },
  { icon: Calendar, label: "Calendar" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Image, label: "Assets" },
  { icon: MessageSquare, label: "Revisions" },
  { icon: Settings, label: "Settings" },
];

const contentQueue = [
  {
    id: 1,
    title: "Product Showcase Reel #12",
    platform: "TikTok",
    status: "ready",
    date: "Jun 3, 2026",
    views: null,
    type: "Reel",
    thumbnail: "🎬",
  },
  {
    id: 2,
    title: "Brand Story Carousel",
    platform: "Instagram",
    status: "ready",
    date: "Jun 3, 2026",
    views: null,
    type: "Carousel",
    thumbnail: "📸",
  },
  {
    id: 3,
    title: "UGC Ad — Pain Point Hook",
    platform: "Meta Ads",
    status: "review",
    date: "Jun 4, 2026",
    views: null,
    type: "Ad",
    thumbnail: "📢",
  },
  {
    id: 4,
    title: "Transformation Before/After",
    platform: "TikTok",
    status: "published",
    date: "Jun 1, 2026",
    views: "124K",
    type: "Reel",
    thumbnail: "🔥",
  },
  {
    id: 5,
    title: "Customer Testimonial Cut",
    platform: "Instagram",
    status: "published",
    date: "May 31, 2026",
    views: "89K",
    type: "Reel",
    thumbnail: "⭐",
  },
  {
    id: 6,
    title: "Hook Testing Variant A",
    platform: "TikTok",
    status: "published",
    date: "May 30, 2026",
    views: "340K",
    type: "Reel",
    thumbnail: "🎯",
  },
];

const statsCards = [
  { label: "Total Views", value: "2.4M", change: "+34%", icon: Eye, color: "text-neon-cyan" },
  { label: "Engagement", value: "8.7%", change: "+2.1%", icon: Heart, color: "text-neon-pink" },
  { label: "New Followers", value: "+12.4K", change: "+89%", icon: TrendingUp, color: "text-neon-green" },
  { label: "Content Delivered", value: "47/60", change: "On track", icon: FileVideo, color: "text-neon-purple" },
];

const calendarDays = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hasContent: Math.random() > 0.3,
  count: Math.floor(Math.random() * 3) + 1,
}));

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-8 relative">
        <div className="absolute inset-0 neural-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-neon-green mb-4">
              <LayoutDashboard className="w-3 h-3" />
              CLIENT PORTAL
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Growth <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto mb-2">
              Your command center for AI-powered content operations. Track, approve, and manage 
              everything in one place.
            </p>
            <p className="text-white/20 text-xs">
              *Demo dashboard — becomes fully functional after onboarding
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row min-h-[700px]">
              {/* Sidebar */}
              <div className="lg:w-64 border-b lg:border-b-0 lg:border-r border-white/5 p-4">
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
                  {sidebarItems.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(item.label)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm whitespace-nowrap transition-all ${
                        activeTab === item.label
                          ? "bg-neon-purple/20 text-neon-purple"
                          : "text-white/40 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 md:p-8">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-white">Good Morning ☀️</h2>
                    <p className="text-white/40 text-sm">Here&apos;s your growth operations summary</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <Bell className="w-5 h-5 text-white/40" />
                    </button>
                    <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <Search className="w-5 h-5 text-white/40" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {statsCards.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        <span className="text-neon-green text-xs font-medium flex items-center gap-0.5">
                          <ArrowUpRight className="w-3 h-3" />
                          {stat.change}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/30 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Content Queue */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold">Content Queue</h3>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs hover:bg-white/10 transition-colors">
                        <Filter className="w-3 h-3" />
                        Filter
                      </button>
                      <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neon-purple/20 text-neon-purple text-xs hover:bg-neon-purple/30 transition-colors">
                        <Plus className="w-3 h-3" />
                        Request
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {contentQueue.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="flex items-center gap-4 p-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg">
                          {item.thumbnail}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white text-sm font-medium truncate">{item.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-white/30">
                            <span>{item.platform}</span>
                            <span>•</span>
                            <span>{item.type}</span>
                            <span>•</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {item.views && (
                            <div className="flex items-center gap-1 text-white/40 text-xs">
                              <Eye className="w-3 h-3" />
                              {item.views}
                            </div>
                          )}
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                            item.status === "ready"
                              ? "bg-neon-green/10 text-neon-green"
                              : item.status === "review"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-white/5 text-white/40"
                          }`}>
                            {item.status === "ready" ? "Ready to Publish" :
                             item.status === "review" ? "In Review" : "Published"}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mini Calendar */}
                <div>
                  <h3 className="text-white font-bold mb-4">June 2026 — Content Calendar</h3>
                  <div className="grid grid-cols-7 gap-1">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center text-white/20 text-xs py-2">
                        {day}
                      </div>
                    ))}
                    {/* Offset for June 2026 (starts on Monday) */}
                    {calendarDays.slice(0, 28).map((day, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs transition-colors cursor-pointer ${
                          day.hasContent
                            ? "bg-neon-purple/10 border border-neon-purple/20 hover:border-neon-purple/40"
                            : "bg-white/3 hover:bg-white/5"
                        } ${day.day <= 2 ? "ring-1 ring-neon-green/30" : ""}`}
                      >
                        <span className={day.day <= 2 ? "text-neon-green font-bold" : "text-white/50"}>
                          {day.day}
                        </span>
                        {day.hasContent && (
                          <div className="flex gap-0.5 mt-0.5">
                            {Array.from({ length: Math.min(day.count, 3) }).map((_, j) => (
                              <div key={j} className="w-1 h-1 rounded-full bg-neon-purple" />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-3xl p-8 text-center bg-gradient-to-r from-neon-purple/5 to-neon-pink/5"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Get Your Own Dashboard</h3>
            <p className="text-white/40 text-sm mb-6">
              Full dashboard access included with every plan. Track content, analytics, and revisions in real-time.
            </p>
            <a
              href="/packages"
              className="inline-flex items-center gap-2 btn-shimmer px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-lg hover:opacity-90 transition-all"
            >
              Choose Your Plan
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
