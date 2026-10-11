import type React from "react";
import { Helmet } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";
import {
  Mail,
  Linkedin,
  Award,
  GraduationCap,
  Briefcase,
  MapPin,
  Terminal,
  Plane,
  Code2,
  ChevronRight,
  Instagram,
  Compass,
  Mountain,
  Coffee,
  Sparkles,
  Zap,
  Rocket,
  Footprints,
  Flame,
  CheckCircle2,
  Heart,
  Laptop,
  Camera,
  Cat,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

import microsoftLogo from "@/assets/logos/microsoft.svg";
import jpmcLogo from "@/assets/logos/jpmorganchase_logo.jpeg";
import { TravelMap } from "@/components/TravelMap";

const Index = () => {
  const [terminalCommand, setTerminalCommand] = useState<string>("ujala.getVibe()");
  const [terminalOutput, setTerminalOutput] = useState<string>(
    `{\n  "role": "Senior SWE @ Microsoft",\n  "aka": "Wandering Variable",\n  "status": "Shipping Fabric release bots by day 🤖",\n  "weekend_mode": "Solo backpacking & beach-to-mountain transitions 🌊➔🏔️",\n  "fuel": "Filter Coffee + 90s playlists ☕",\n  "sidequests": ["Adult Learner: Badminton 🏸", "Cat Lover 🐱"]\n}`
  );

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
    const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";
    e.currentTarget.style.setProperty("--pointer-x", x);
    e.currentTarget.style.setProperty("--pointer-y", y);
  };

  const title = "Ujala Jha — SWE @ Microsoft | Code · Travel · Build";
  const description =
    "Senior Software Engineer at Microsoft. I ship AI agents, scale release frameworks, and solo-backpack across the country. 4x SIH Winner.";

  // Polaroid gallery images with funky captions & locations
  const candidImages = [
    {
      src: "/ujala_social_photos/IMG_2726.jpg",
      tag: "Himalayas",
      location: "Elevation 2,800m",
      caption: "High altitude air & zero slack notifications 🏔️",
      tilt: "-rotate-2",
      tapeColor: "washi-tape",
    },
    {
      src: "/ujala_social_photos/ujala_sih.png",
      tag: "Hackathon",
      location: "SIH Grand Finale",
      caption: "4x Smart India Hackathon champions streak 🏆",
      tilt: "rotate-2",
      tapeColor: "washi-tape-cyan",
    },
    {
      src: "/ujala_social_photos/ujala_mentor1.jpeg",
      tag: "Mentorship",
      location: "Tech Workshop",
      caption: "Mentoring the next generation of builders 🚀",
      tilt: "-rotate-1",
      tapeColor: "washi-tape-pink",
    },
    {
      src: "/ujala_social_photos/ujala_jpmc.jpeg",
      tag: "FinTech",
      location: "JPMorgan Chase HQ",
      caption: "Big data & cloud architecture days ☁️",
      tilt: "rotate-2",
      tapeColor: "washi-tape",
    },
    {
      src: "/ujala_social_photos/IMG_2726.jpg",
      tag: "Wanderlust",
      location: "Scenic Outpost",
      caption: "Solo travels: soaking in golden hour 🌅",
      tilt: "-rotate-2",
      tapeColor: "washi-tape-cyan",
    },
    {
      src: "/ujala_social_photos/ujala_presenting.jpg",
      tag: "Speaker",
      location: "Conference Stage",
      caption: "Demystifying release automation & AI 💡",
      tilt: "rotate-1",
      tapeColor: "washi-tape-pink",
    },
    {
      src: "/ujala_social_photos/ujala_mentor5.jpeg",
      tag: "Community",
      location: "Dev Hackathon",
      caption: "Hackathon adrenaline, 2am code reviews ⚡",
      tilt: "-rotate-1",
      tapeColor: "washi-tape",
    },
  ];

  const [candidApi, setCandidApi] = useState<CarouselApi | null>(null);

  /* Typing effect for hero subtitle */
  const phrases = [
    "shipping GenAI release agents on Azure 🤖",
    "solo-backpacking across scenic towns and valleys 🎒",
    "beach person slowly transitioning to a mountain person 🌊➔🏔️",
    "adult learner leveling up at badminton 🏸",
    "fueling up on authentic South Indian filter coffee ☕",
    "befriending cats wherever I wander 🐱",
    "winning People's Choice @ MS Fabric Global Hackathon 2026 🏆",
    "automating release pipelines for Microsoft Fabric ⚡",
  ];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    const timeout = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentPhrase(phrase.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
        if (charIdx + 1 === phrase.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentPhrase(phrase.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
        if (charIdx <= 1) {
          setIsDeleting(false);
          setPhraseIdx((p) => (p + 1) % phrases.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  useEffect(() => {
    if (!candidApi) return;
    const id = setInterval(() => {
      if (candidApi.canScrollNext()) {
        candidApi.scrollNext();
      } else {
        candidApi.scrollTo(0);
      }
    }, 3200);
    return () => clearInterval(id);
  }, [candidApi]);

  /* Terminal commands data */
  const runTerminalCmd = (cmd: string) => {
    setTerminalCommand(cmd);
    if (cmd === "ujala.getVibe()") {
      setTerminalOutput(
        `{\n  "role": "Senior SWE @ Microsoft",\n  "aka": "Wandering Variable",\n  "status": "Shipping Fabric release bots by day 🤖",\n  "weekend_mode": "Solo backpacking & beach-to-mountain transitions 🌊➔🏔️",\n  "fuel": "Filter Coffee + 90s playlists ☕",\n  "sidequests": ["Adult Learner: Badminton 🏸", "Cat Lover 🐱"]\n}`
      );
    } else if (cmd === "cat passport.json") {
      setTerminalOutput(
        `[\n  { "region": "Himachal Pradesh", "vibe": "Misty pine valleys & scenic mountain roads", "stamp": "EXPLORED" },\n  { "region": "Western Ghats", "vibe": "Monsoon lush greenery & waterfalls", "stamp": "EXPLORED" },\n  { "region": "Goa & Konkan", "vibe": "Quiet coastlines & sea breeze (beach lover roots)", "stamp": "EXPLORED" },\n  { "bucket_list": ["Spiti Valley", "Ladakh High Passes", "Northeast Seven Sisters"] }\n]`
      );
    } else if (cmd === "git status --life") {
      setTerminalOutput(
        `On branch: explorer-mode\nYour branch is ahead of 'comfort-zone' by 15 backpacking journeys.\n\nChanges to be committed:\n  modified:   skills/badminton.ts (Adult Learner: Smash & Drops)\n  modified:   skills/cat-whisperer.ts (100% purr rate)\n  new file:   adventures/next-backpacking-trip.json\n\nNo uncommitted bugs. All systems nominal.`
      );
    } else if (cmd === "npm run tech-stack") {
      setTerminalOutput(
        `> Executing: Ujala Tech Stack Matrix\n\nAI & Agents   : Azure OpenAI, LangChain, RAG Pipelines, Autonomous Bots\nCloud & Data  : Microsoft Azure, AWS EKS, Apache Spark, Hadoop, Kafka\nBackend & UI  : Java Spring Boot, Python, TypeScript, React, SQL\nSpecialty     : Release Automation, High-Scale Data, Zero-Downtime Deploys`
      );
    } else if (cmd === "sudo relax") {
      setTerminalOutput(
        `[OK] South Indian Filter Coffee brewed to perfection ☕\n[OK] Cat purring comfortably nearby 🐱\n[OK] Badminton game scheduled for the weekend 🏸\n[OK] All Jira tickets silenced until Monday morning.\nTake a deep breath and smile!`
      );
    }
  };

  /* Intersection Observer for scroll animations */
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  /* Active section scroll spy */
  const [activeSection, setActiveSection] = useState<string>("about");

  const navLinks = [
    { href: "#about", id: "about", label: "Whoami" },
    // { href: "#dual-life", id: "dual-life", label: "Code & Travels" },
    { href: "#experience", id: "experience", label: "Work" },
    { href: "#awards", id: "awards", label: "Wins" },
    { href: "#travel-map", id: "travel-map", label: "Wanders" },
    { href: "#gallery", id: "gallery", label: "Candids" },
    // { href: "#terminal", id: "terminal", label: "Console" },
    { href: "#contact", id: "contact", label: "Connect" },
  ];

  useEffect(() => {
    const sectionIds = [
      "about",
      "dual-life",
      "experience",
      "awards",
      "travel-map",
      "gallery",
      "terminal",
      "contact",
    ];

    const handleScroll = () => {
      // If close to bottom of document, activate last section (contact)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const offset = 140; // Height of ticker + navbar + offset
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection("about");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const codingSuperpowers = [
    { title: "Generative AI Agents", desc: "Crafting pragmatic LLM agents for risk checks, smart approvals & autonomous release workflows on Azure Cloud." },
    { title: "Fabric Release Automation", desc: "Eliminating release day panic. Engineered rock-solid deployment pipelines and automated diagnostics at Microsoft." },
    { title: "Big Data & Cloud Scaling", desc: "Migrated petabyte-scale financial pipelines to AWS EKS using Spark, Kafka & Java Spring at JPMorgan Chase." },
    { title: "4× Hackathon Champion", desc: "Won Smart India Hackathon 4 times (plus 20+ hackathons won & mentored). Rapid prototype specialist." },
  ];

  const travelAdventures = [
    { title: "Solo Backpacking", desc: "Backpacking across scenic mountain towns, remote valleys, and vibrant corners of the country." },
    { title: "Beach ➔ Mountain Person", desc: "A lifelong beach person slowly but surely falling in love with mountain air, misty ridges, and elevated vistas." },
    { title: "Adult Learner: Badminton", desc: "Picking up sports in adulthood: leveling up court agility, reflexes, and smashes one badminton game at a time! 🏸" },
    { title: "Cat Lover & Filter Coffee", desc: "Refueling on authentic South Indian filter coffee and befriending every cat encountered along the way. 🐱" },
  ];

  const skills = [
    "Artificial Intelligence",
    "Generative AI & LLMs",
    "Agentic Workflows",
    "Microsoft Azure",
    "AWS EKS & Cloud",
    "Release Automation",
    "Apache Spark & Hadoop",
    "Java Spring Boot",
    "React & TypeScript",
    "Distributed Systems",
    "Kafka & Microservices",
  ];

  const travelSkills = [
    "Solo Backpacking",
    "Beach ➔ Mountain Explorer",
    "Adult Learner: Badminton 🏸",
    "Cat Lover 🐱",
    "Filter Coffee Aficionado ☕",
    "Offbeat Travel & Exploration",
    "Travel Photography",
  ];

  const awards = [
    { year: 2026, title: "People's Choice Award — Microsoft Fabric Platform Global Hackathon", icon: "🏆", badge: "Global Hackathon" },
    { year: 2022, title: "Winner — JPMC Post Trade Technology India Hackathon", icon: "🏆", badge: "FinTech Innovation" },
    { year: 2022, title: "Winner (Mentor) — Smart India Hackathon", icon: "🎖️", badge: "National Hackathon" },
    { year: 2020, title: "Winner — Smart India Hackathon", icon: "🏆", badge: "National Hackathon" },
    { year: 2019, title: "Winner — Smart India Hackathon", icon: "🏆", badge: "National Hackathon" },
    { year: 2019, title: "Runner Up — JPMorgan Chase & Co. Code for Good", icon: "🥈", badge: "Social Impact Tech" },
    { year: 2018, title: "Runner-Up — Smart India Hackathon", icon: "🥈", badge: "National Hackathon" },
  ];

  return (
    <main onMouseMove={handleMouseMove} className="grain-overlay relative min-h-screen text-foreground overflow-x-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>

      {/* ─── FIXED TOP HEADER: MARQUEE TICKER + NAVBAR ─── */}
      <div className="fixed top-0 inset-x-0 z-50">
        {/* Funky Marquee Ticker */}
        <div className="bg-[#070a12]/95 backdrop-blur-md border-b border-white/10 overflow-hidden py-1.5 text-xs font-mono">
          <div className="animate-marquee whitespace-nowrap text-muted-foreground flex items-center gap-8">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold"><Zap className="h-3 w-3" /> Senior SWE @ Microsoft</span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5 text-amber-400 font-bold"><Compass className="h-3 w-3" /> Backpacker & Solo Traveller</span>
            <span className="text-zinc-600">•</span>

            <span className="flex items-center gap-1.5 text-emerald-400 font-bold"><Code2 className="h-3 w-3" /> Azure GenAI & Release Automation</span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5 text-yellow-300 font-bold"><Coffee className="h-3 w-3" /> 100% Filter Coffee-Powered</span>
            <span className="text-zinc-600">•</span>

            <span className="flex items-center gap-1.5 text-rose-400 font-bold"><Cat className="h-3 w-3" /> Cat Lover</span>
            <span className="text-zinc-600">•</span>

            {/* Duplicate for infinite loop */}
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold"><Zap className="h-3 w-3" /> Senior SWE @ Microsoft</span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5 text-amber-400 font-bold"><Compass className="h-3 w-3" /> Backpacker & Solo Traveller</span>
            <span className="text-zinc-600">•</span>

            <span className="flex items-center gap-1.5 text-emerald-400 font-bold"><Code2 className="h-3 w-3" /> Azure GenAI & Release Automation</span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5 text-yellow-300 font-bold"><Coffee className="h-3 w-3" /> 100% Filter Coffee-Powered</span>
            <span className="text-zinc-600">•</span>

            <span className="flex items-center gap-1.5 text-rose-400 font-bold"><Cat className="h-3 w-3" /> Cat Lover</span>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-[#0b0f1c]/90 backdrop-blur-lg border-b border-white/10">
          <div className="container max-w-6xl mx-auto flex items-center justify-between py-2.5 px-4 gap-2">
            <a href="#about" className="flex items-center gap-2 group flex-shrink-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-amber-500 p-[1.5px] transition-transform duration-300 group-hover:scale-110">
                <div className="h-full w-full bg-[#070a12] rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                  UJ
                </div>
              </div>
              <span className="font-mono text-sm font-semibold tracking-tight text-white group-hover:text-cyan-400 transition-colors hidden sm:inline">
                ujalajha.me
              </span>
            </a>

            {/* Nav links */}
            <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm text-zinc-400 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`story-link ${activeSection === link.id ? "active" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* ─── HERO SECTION ─── */}
      <header id="about" className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="ambient-spotlight" aria-hidden="true" />

        <div className="container max-w-6xl lg:max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title & Punchy Story */}
            <div className="order-1 md:col-span-7 space-y-6">
              {/* Status pill row */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Status: <strong className="text-white">Shipping bots & planning next backpacking</strong></span>
                </div>
              </div>

              {/* Big bold funky headline & role tagline */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                  Hey, I'm <span className="text-gradient-funky">Ujala!</span>
                </h1>
                <p className="text-base sm:text-lg text-zinc-300 font-normal flex flex-wrap items-center gap-2.5 pt-1">
                  <span className="inline-flex items-center gap-2">
                    <img src={microsoftLogo} alt="Microsoft Logo" className="h-4 w-4 shrink-0 inline-block shadow-sm" />
                    <span>Senior SWE @ <strong className="text-white font-semibold">Microsoft</strong></span>
                  </span>
                  {/* <span className="text-zinc-600 hidden sm:inline">&bull;</span> */}
                  {/* <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                    <Compass className="h-3 w-3 text-cyan-400" /> Wandering Variable
                  </span> */}
                </p>
              </div>

              {/* Mobile photo inside hero for compact screens */}
              <div className="md:hidden pt-2 pb-2">
                <div className="polaroid-wrapper">
                  <div className="washi-tape" />
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="/ujala_social_photos/IMG_2726.jpg"
                      alt="Ujala Jha in the mountains"
                      className="w-full h-80 object-cover object-[50%_65%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-mono">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-amber-400" /> High Altitude Ridge</span>
                      <span className="stamp-badge text-amber-300 border-amber-400/50 bg-amber-950/60">ADVENTURE VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacious dual-side bio cards */}
              <div className="space-y-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-cyan-950/30">
                  <div className="flex items-center justify-between text-cyan-300 font-mono font-bold text-xs uppercase mb-2">
                    <span className="flex items-center gap-2">
                      <Laptop className="h-4 w-4 text-cyan-400" /> The Coding Side
                    </span>
                    <span className="text-zinc-500 text-[11px] font-mono tracking-wider hidden sm:inline">AI &amp; Cloud Scale</span>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-[14.5px] leading-relaxed">
                    Building autonomous AI agents and release frameworks for <strong className="text-white font-semibold">Microsoft Fabric</strong>. Previously ran AWS petabyte pipelines at <strong className="text-white font-semibold">JPMorgan Chase</strong>. 20+ hackathons won &amp; mentored!
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/20 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-amber-950/30">
                  <div className="flex items-center justify-between text-amber-300 font-mono font-bold text-xs uppercase mb-2">
                    <span className="flex items-center gap-2">
                      <Compass className="h-4 w-4 text-amber-400" /> The Wandering Side
                    </span>
                    <span className="text-zinc-500 text-[11px] font-mono tracking-wider hidden sm:inline">Passes &amp; Trails</span>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-[14.5px] leading-relaxed">
                    A self-proclaimed <strong className="text-white font-semibold">beach person transitioning into a mountain person</strong>. Solo-backpacking, adult learner playing <strong className="text-white font-semibold">badminton</strong> 🏸, unabashed <strong className="text-white font-semibold">cat lover</strong> 🐱, and fueled by <strong className="text-white font-semibold">filter coffee</strong> ☕
                  </p>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a href="mailto:jhaujalas@gmail.com" aria-label="Email Ujala">
                  <Button className="hover-scale bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold px-5">
                    <Mail className="h-4 w-4 mr-2" /> Say Hello
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/ujalajha" target="_blank" rel="noreferrer">
                  <Button className="hover-scale glass-card border-white/10 text-white hover:border-cyan-500/50" variant="outline">
                    <Linkedin className="h-4 w-4 mr-2 text-cyan-400" /> LinkedIn
                  </Button>
                </a>
                <a href="https://topmate.io/ujalajha" target="_blank" rel="noreferrer">
                  <Button className="hover-scale glass-card border-white/10 text-white hover:border-amber-500/50" variant="outline">
                    <img
                      src="/lovable-uploads/e9e7b073-4258-4fcd-ba81-a7715a97d655.png"
                      alt="Topmate"
                      className="h-4 w-4 mr-2"
                    />{" "}
                    1:1 Mentorship
                  </Button>
                </a>
                <a href="https://www.instagram.com/wandering.variable/" target="_blank" rel="noreferrer">
                  <Button className="hover-scale glass-card border-white/10 text-white hover:border-pink-500/50" variant="outline">
                    <Instagram className="h-4 w-4 mr-2 text-pink-400" /> Travel Gram
                  </Button>
                </a>
                <a href="https://www.techroast.online/" target="_blank" rel="noreferrer">
                  <Button className="hover-scale glass-card border-white/10 text-white hover:border-pink-500/50" variant="outline">
                    <img
                      src="/lovable-uploads/favicon.png"
                      alt="Brutal Startup Roast"
                      className="h-4 w-4 mr-2"
                    /> Get Roasted
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Polaroid Adventurer Card (Desktop) */}
            <div className="order-2 md:col-span-5 hidden md:block">
              <div className="relative group">
                {/* Background ambient glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-amber-500/25 to-pink-500/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Polaroid Frame */}
                <div className="polaroid-wrapper">
                  {/* Simulated Washi Tape */}
                  <div className="washi-tape" />

                  {/* Stamp top right */}
                  <div className="absolute -top-3 -right-3 z-20 stamp-badge bg-[#070a12] text-cyan-300 border-cyan-400 shadow-lg rotate-12">
                    <Footprints className="h-3.5 w-3.5" />EXPLORER
                  </div>

                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="/ujala_social_photos/IMG_2726.jpg"
                      alt="Ujala Jha in the mountains"
                      className="w-full h-[470px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-black/20" />

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-white/90">
                        <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                          <MapPin className="h-3 w-3 text-amber-400" /> Elevation: 2200m
                        </span>
                        <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-emerald-300">
                          <Zap className="h-3 w-3" /> Oxygen 100%
                        </span>
                      </div>

                      <div className="bg-black/70 backdrop-blur-md p-3 rounded-lg border border-white/10 text-left">
                        <p className="font-mono text-xs text-amber-300 flex items-center gap-1">
                          <Mountain className="h-3 w-3" /> Mountain Dispatch:
                        </p>
                        <p className="text-xs text-zinc-300 mt-0.5">
                          "Somewhere between mountain passes and git merges."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating sticker on the side */}
                <div className="absolute -bottom-4 -left-4 z-20 funky-sticker bg-[#0b1021] text-amber-300 border border-amber-400/50 shadow-xl -rotate-6">
                  ☕ Filter Coffee & Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="section-divider" />

      {/* ─── LIVE STATS COUNTER ─── */}
      <section className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-5 border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center group">
            <div className="h-10 w-10 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              <Code2 className="h-5 w-5" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">6+ Yrs</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Shipping Production Code</div>
          </div>

          <div className="glass-card rounded-2xl p-5 border-pink-500/20 hover:border-pink-500/50 transition-all text-center group">
            <div className="h-10 w-10 mx-auto rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-2 group-hover:scale-110 transition-transform">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-3xl font-extrabold text-pink-400 font-mono">4× SIH</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">National Hackathon Gold</div>
          </div>

          <div className="glass-card rounded-2xl p-5 border-amber-500/20 hover:border-amber-500/50 transition-all text-center group">
            <div className="h-10 w-10 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-2 group-hover:scale-110 transition-transform">
              <Compass className="h-5 w-5" />
            </div>
            <div className="text-3xl font-extrabold text-amber-400 font-mono">20+ Trips</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Backpacking & Solo Travel </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border-emerald-500/20 hover:border-emerald-500/50 transition-all text-center group">
            <div className="h-10 w-10 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
              <Rocket className="h-5 w-5" />
            </div>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">100+ Devs</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Mentored & Guided</div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── THE DUAL LIFE: CODE & WANDERLUST ─── */}
      {/* <section id="dual-life" className="container max-w-6xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" /> DUAL OPERATING SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Coder <span className="text-gradient-funky">&</span> The Explorer
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Two sides of the same curious mind: solving complex distributed systems during the week, and exploring new horizons while backpacking on the weekends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
         
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0b1021]/80 border-2 border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,245,212,0.15)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Terminal className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">The Coder Mindset</h3>
                  <p className="font-mono text-xs text-cyan-400">~/stack/production.sh</p>
                </div>
              </div>
              <span className="stamp-badge text-cyan-300 border-cyan-400/50 bg-cyan-950/60">
                PROD DEPLOYED
              </span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              "I love turning chaotic, fuzzy engineering problems into automated, deterministic engines. If a deployment causes stress, the system is designed wrong."
            </p>

            <div className="space-y-4">
              {codingSuperpowers.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
              <span className="skill-tag">Azure Fabric</span>
              <span className="skill-tag">GenAI Agents</span>
              <span className="skill-tag">AWS EKS</span>
              <span className="skill-tag">Apache Spark</span>
              <span className="skill-tag">Java & React</span>
            </div>
          </div>

          
          <div className="rounded-2xl p-6 sm:p-8 bg-[#140f1a]/80 border-2 border-amber-500/30 relative overflow-hidden group hover:border-amber-400 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,190,11,0.15)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Mountain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white">The Explorer Spirit</h3>
                  <p className="font-mono text-xs text-amber-400">~/journeys/backpacking-routes.json</p>
                </div>
              </div>
              <span className="stamp-badge text-amber-300 border-amber-400/50 bg-amber-950/60">
                PASSPORT STAMP
              </span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              "Solo travelling taught me that the best paths aren't documented in READMEs. Stepping into the unknown is where resilience is born."
            </p>

            <div className="space-y-4">
              {travelAdventures.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex gap-3">
                  <Compass className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
              <span className="cert-tag">Solo Backpacking</span>
              <span className="cert-tag">Beach ➔ Mountain Person 🌊🏔️</span>
              <span className="cert-tag">Adult Learner: Badminton 🏸</span>
              <span className="cert-tag">Cat Lover 🐱</span>
              <span className="cert-tag">Filter Coffee Aficionado ☕</span>
            </div>
          </div>
        </div>
      </section> */}

      <div className="section-divider" />

      {/* ─── EXPERIENCE: FLIGHT & STINT TICKETS ─── */}
      <section id="experience" className="container max-w-5xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white">Career Expeditions</h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono">The software engineering journey</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Microsoft */}
          <div className="ticket-card glass-card hover:border-cyan-400/40 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <img src={microsoftLogo} alt="Microsoft" className="h-6 w-auto" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white">Microsoft</h3>
                    <span className="text-cyan-400 font-mono text-xs bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      Senior Software Engineer
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-1 flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-cyan-400" /> Bengaluru, India • Sep 2024 — Present
                  </p>
                </div>
              </div>
              <span className="stamp-badge text-emerald-400 border-emerald-400/50 bg-emerald-950/40 self-start">
                ACTIVE VOYAGE
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {[
                "Automating and optimizing release & deployment frameworks for Microsoft Fabric at high enterprise scale.",
                "Architected GPT-powered chatbot with RAG (Retrieval Augmented Generation) for smart release management.",
                "Engineered autonomous AI agents for deployment risk assessment, automatic approvals, and guided resolutions.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <ChevronRight className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* JPMC */}
          <div className="ticket-card glass-card hover:border-cyan-400/40 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <img src={jpmcLogo} alt="JPMorgan Chase" className="h-6 w-auto rounded" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white">JP Morgan Chase & Co.</h3>
                    <span className="text-amber-400 font-mono text-xs bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                      Senior Software Engineer
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-1 flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-amber-400" /> Mumbai, India • Aug 2020 — Sep 2024 (4 Years)
                  </p>
                </div>
              </div>
              <span className="stamp-badge text-amber-400 border-amber-400/50 bg-amber-950/40 self-start">
                4 YRS VOYAGE
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {[
                "Led mission-critical modules for financial reporting, big data warehousing, and AWS cloud analytics.",
                "Migrated legacy on-prem Hadoop clusters to AWS using Apache Spark on EKS, dramatically slashing compute costs.",
                "Built resilient Java Spring Boot microservices, Kafka message ingestion, and high-throughput batch schedulers.",
                "Refactored mission-critical dashboards in React, integrating JPA/Hibernate and MS SQL Server backend.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <ChevronRight className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Atto Infotech */}
          <div className="ticket-card glass-card hover:border-cyan-400/40 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-zinc-300">
                  <Laptop className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white">Atto Infotech</h3>
                    <span className="text-pink-400 font-mono text-xs bg-pink-950/60 px-2 py-0.5 rounded border border-pink-500/30">
                      Software Engineer (Intern)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-1 flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-pink-400" /> Mumbai, India • May 2018 — Jul 2020
                  </p>
                </div>
              </div>
              <span className="stamp-badge text-pink-400 border-pink-400/50 bg-pink-950/40 self-start">
                FOUNDATIONAL
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {[
                "Integrated UrbanPiper food delivery aggregators with Point-of-Sale software to unify order streaming.",
                "Engineered offline-first web modules utilizing IndexedDB and local caching for zero-downtime store operations.",
                "Modernized legacy core application logic with PHP Laravel frameworks and RESTful APIs.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <ChevronRight className="h-4 w-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      <div className="section-divider" />

      {/* ─── AWARDS & HONORS ─── */}
      <section id="awards" className="container max-w-4xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-500/30 text-xs font-mono text-pink-400 mb-2">
            <Flame className="h-3.5 w-3.5" /> HACKATHONS & WINS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Honors & Hackathon Victories</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 timeline-line" aria-hidden="true" />
          <ol className="space-y-4">
            {awards.map((item, idx) => (
              <li key={`${item.year}-${idx}`} className="relative pl-16">
                <span className="absolute left-3 top-3 h-7 w-7 rounded-full bg-[#070b14] border-2 border-cyan-400 flex items-center justify-center text-xs shadow-lg shadow-cyan-500/30">
                  {item.icon}
                </span>
                <div className="glass-card rounded-xl p-4 hover:border-cyan-400/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold">{item.year}</span>
                    <p className="mt-0.5 font-semibold text-white text-sm sm:text-base">{item.title}</p>
                  </div>
                  <span className="stamp-badge text-amber-300 border-amber-400/40 bg-amber-950/40 self-start sm:self-center">
                    {item.badge}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── EDUCATION ─── */}
      <section id="education" className="container max-w-4xl mx-auto px-4 py-16 scroll-reveal opacity-0">
        <div className="glass-card rounded-2xl p-6 sm:p-8 flex items-start gap-4 hover:border-purple-500/40 transition-all">
          <div className="h-12 w-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-purple-400 font-bold uppercase">B.E. Information Technology</span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Mumbai University
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
              Graduated Aug 2020
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SKILLS & TOOLBELT ─── */}
      <section id="skills" className="container max-w-5xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" /> DUAL OPERATING SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Coder <span className="text-gradient-funky">&</span> The Explorer
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Two sides of the same curious mind: solving complex distributed systems during the week, and exploring new horizons while backpacking on the weekends.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Engineering Tech Stack */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Code2 className="h-5 w-5 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Engineering Toolbelt</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-amber-400" />
                <h3 className="text-sm font-mono font-bold uppercase text-amber-400">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS Certified Cloud Practitioner",
                  "AWS Certified Developer – Associate",
                  "Java Programming",
                  "Developing with Spark & Hadoop",
                ].map((c) => (
                  <span key={c} className="cert-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Nomad & Survival Skills */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Compass className="h-5 w-5 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Nomad & Life Quests</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {travelSkills.map((s) => (
                <span key={s} className="cert-tag">{s}</span>
              ))}
            </div>

            {/* Travel Quote card */}
            <div className="mt-8 p-5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs sm:text-sm text-zinc-300 leading-relaxed font-mono">
              <span className="text-amber-400 font-bold block mb-1">TRAVEL MANIFESTO:</span>
              "Pack light, transition from beach waves to mountain peaks, befriend every street cat, and always fuel up with strong filter coffee."
            </div>
          </div>
        </div>
      </section>



      <div className="section-divider" />

      {/* ─── INTERACTIVE NOMAD TRAVEL MAP ─── */}
      <section id="travel-map" className="container max-w-6xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <TravelMap />
      </section>

      <div className="section-divider" />

      {/* ─── POLAROID GALLERY: CODES & CANDIDS ─── */}
      <section id="gallery" className="container max-w-6xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-xs font-mono text-amber-400 mb-2">
              <Camera className="h-3.5 w-3.5" /> MEMORIES & LOGS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Codes, Summits & Candids
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Snapshots of hackathon stages, mountain peaks, community mentoring & travels.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            Swipe or let auto-scroll ⇄
          </div>
        </div>

        <Carousel setApi={setCandidApi} opts={{ loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {candidImages.map((img, idx) => (
              <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="polaroid-wrapper h-full flex flex-col justify-between">
                  {/* Simulated Washi Tape with colors */}
                  <div className={`washi-tape ${img.tapeColor}`} />

                  <div>
                    <div className="rounded-lg overflow-hidden relative group">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="stamp-badge bg-black/70 text-cyan-300 border-cyan-400/50">
                          {img.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5">
                        <span className="text-[11px] font-mono text-white/90 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-amber-400" /> {img.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-3.5 text-xs sm:text-sm font-medium text-zinc-200 leading-snug">
                      {img.caption}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>#ujala-adventures</span>
                    <Heart className="h-3.5 w-3.5 text-pink-500/70" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <div className="section-divider" />

      {/* ─── INTERACTIVE TERMINAL CONSOLE ─── */}
      <section id="terminal" className="container max-w-4xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-2">
            <Terminal className="h-3.5 w-3.5" /> INTERACTIVE PLAYGROUND
          </div>
          <h2 className="text-3xl font-bold text-white">Wanderer & Dev CLI</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Click commands below to inspect Ujala's passions, passport log, and secret side-quests:
          </p>
        </div>

        {/* Command buttons bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <button
            onClick={() => runTerminalCmd("ujala.getVibe()")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${terminalCommand === "ujala.getVibe()"
              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400"
              : "bg-black/40 text-zinc-400 border-white/10 hover:text-white"
              }`}
          >
            ujala.getVibe()
          </button>
          <button
            onClick={() => runTerminalCmd("cat passport.json")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${terminalCommand === "cat passport.json()"
              ? "bg-amber-500/20 text-amber-300 border-amber-400"
              : "bg-black/40 text-zinc-400 border-white/10 hover:text-white"
              }`}
          >
            cat passport.json
          </button>
          <button
            onClick={() => runTerminalCmd("git status --life")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${terminalCommand === "git status --life"
              ? "bg-pink-500/20 text-pink-300 border-pink-400"
              : "bg-black/40 text-zinc-400 border-white/10 hover:text-white"
              }`}
          >
            git status --life
          </button>
          <button
            onClick={() => runTerminalCmd("npm run tech-stack")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${terminalCommand === "npm run tech-stack"
              ? "bg-emerald-500/20 text-emerald-300 border-emerald-400"
              : "bg-black/40 text-zinc-400 border-white/10 hover:text-white"
              }`}
          >
            npm run tech-stack
          </button>
          <button
            onClick={() => runTerminalCmd("sudo relax")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${terminalCommand === "sudo relax"
              ? "bg-purple-500/20 text-purple-300 border-purple-400"
              : "bg-black/40 text-zinc-400 border-white/10 hover:text-white"
              }`}
          >
            sudo relax ☕
          </button>
        </div>

        {/* Terminal window */}
        <div className="rounded-xl overflow-hidden bg-[#070b14] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40">
          <div className="bg-[#0f1629] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs text-zinc-400">ujala-shell v2.6.0 (zsh)</span>
            <div className="font-mono text-xs text-cyan-400">status: active</div>
          </div>
          <div className="p-5 font-mono text-xs sm:text-sm text-zinc-200 space-y-3 min-h-[220px]">
            <div className="flex items-center gap-2 text-cyan-400">
              <span>➜</span>
              <span className="text-amber-400">~</span>
              <span className="text-zinc-400">$</span>
              <span className="text-white font-semibold">{terminalCommand}</span>
            </div>
            <pre className="text-emerald-300/90 whitespace-pre-wrap font-mono text-xs sm:text-sm leading-relaxed bg-black/40 p-4 rounded-lg border border-white/5">
              {terminalOutput}
            </pre>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── CONNECT & FOOTER ─── */}
      <section id="contact" className="container max-w-4xl mx-auto px-4 py-20 scroll-reveal opacity-0">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-cyan-500/30 text-center relative overflow-hidden shadow-2xl">
          {/* Ambient lighting */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-lg mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-xs font-mono text-cyan-300 mb-4">
              <Sparkles className="h-3.5 w-3.5" /> OPEN FOR ADVENTURES
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's Build or Wander
            </h2>
            <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
              Looking for an AI engineer, a hackathon mentor, or just want to swap travel and backpacking stories? My inbox is always open!
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:jhaujalas@gmail.com">
                <Button className="hover-scale bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold px-6 py-2.5">
                  <Mail className="h-4 w-4 mr-2" /> Email Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ujalajha" target="_blank" rel="noreferrer">
                <Button className="hover-scale glass-card text-white hover:border-cyan-400/50" variant="outline">
                  <Linkedin className="h-4 w-4 mr-2 text-cyan-400" /> LinkedIn
                </Button>
              </a>
              <a href="https://topmate.io/ujalajha" target="_blank" rel="noreferrer">
                <Button className="hover-scale glass-card text-white hover:border-amber-400/50" variant="outline">
                  <img
                    src="/lovable-uploads/e9e7b073-4258-4fcd-ba81-a7715a97d655.png"
                    alt="Topmate"
                    className="h-4 w-4 mr-2"
                  />
                  Topmate 1:1
                </Button>
              </a>
              <a href="https://www.instagram.com/wandering.variable/" target="_blank" rel="noreferrer">
                <Button className="hover-scale glass-card text-white hover:border-pink-400/50" variant="outline">
                  <Instagram className="h-4 w-4 mr-2 text-pink-400" /> Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 border-t border-white/10 text-center font-mono text-xs text-zinc-400">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">$</span>
            <span>echo "Built with code, filter coffee & wanderlust"</span>
          </div>
          <div>
            © {new Date().getFullYear()} Ujala Jha • Mumbai / Bengaluru 📍
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
