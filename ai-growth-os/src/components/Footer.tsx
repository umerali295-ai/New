"use client";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 md:py-20">
      <div className="absolute inset-0 neural-bg opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="gradient-text">NEXUS</span>
                <span className="text-white/60 ml-1 font-light">OS</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed">
              AI-Powered Growth Operating System. We build daily attention systems 
              that make brands impossible to ignore.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <div className="space-y-2">
              {["AI Content Engine", "UGC Ad Factory", "Growth Automation", "Content Gallery", "Live Demo"].map((link) => (
                <Link key={link} href="/#" className="block text-white/30 text-sm hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
            <div className="space-y-2">
              {["Case Studies", "AI Tools", "Packages", "Blog", "Documentation"].map((link) => (
                <Link key={link} href="/#" className="block text-white/30 text-sm hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <div className="space-y-2">
              {["About", "Careers", "Contact", "Privacy", "Terms"].map((link) => (
                <Link key={link} href="/#" className="block text-white/30 text-sm hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2026 NEXUS OS. All rights reserved. Not an agency — an operating system.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-white/30 text-xs">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
