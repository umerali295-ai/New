"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import ResultsShowcase from "@/components/ResultsShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import ContentGallery from "@/components/ContentGallery";
import ProcessSection from "@/components/ProcessSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <LiveDemoSection />
      <ResultsShowcase />
      <ServicesGrid />
      <ContentGallery />
      <ProcessSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
