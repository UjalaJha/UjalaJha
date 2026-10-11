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
  ExternalLink,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

import microsoftLogo from "@/assets/logos/microsoft.svg";
import jpmcLogo from "@/assets/logos/jpmorganchase_logo.jpeg";

const Index = () => {
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
    const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";
    e.currentTarget.style.setProperty("--pointer-x", x);
    e.currentTarget.style.setProperty("--pointer-y", y);
  };

  const title = "Ujala Jha — SWE @ Microsoft | Code · Travel · Build";
  const description =
    "Senior Software Engineer at Microsoft. I write code, build AI agents, and explore mountains. 4x SIH Winner. Let's build something.";

  const candidImages = [
    { src: "/ujala_social_photos/image.png", alt: "Ujala Jha candid 1" },
    { src: "/ujala_social_photos/ujala_mentor2.jpeg", alt: "Ujala Jha mentoring" },
    { src: "/ujala_social_photos/ujala_mentor3.jpeg", alt: "Ujala Jha at event" },
    { src: "/ujala_social_photos/ujala_mentor5.jpeg", alt: "Ujala Jha speaking" },
    { src: "/ujala_social_photos/ujala_mentor1.jpeg", alt: "Ujala Jha workshop" },
    { src: "/ujala_social_photos/ujala_jpmc.jpeg", alt: "Ujala Jha at JPMC" },
    { src: "/ujala_social_photos/ujala_presenting.jpg", alt: "Ujala Jha presenting" },
  ];
  const [candidApi, setCandidApi] = useState<CarouselApi | null>(null);

  /* Typing effect for hero subtitle */
  const phrases = [
    "shipping AI agents on Azure ☁️",
    "solo-travelling across the country 🏔️",
    "automating releases for Microsoft Fabric ⚡",
    "mentoring hackathon teams 🚀",
    "turning caffeine into clean code ☕",
  ];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    const timeout = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentPhrase(phrase.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
        if (charIdx + 1 === phrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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
    }, 3000);
    return () => clearInterval(id);
  }, [candidApi]);

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

  const skills = [
    "Artificial Intelligence",
    "Generative AI",
    "Predictive AI",
    "Automation",
    "Microsoft Azure",
    "AWS",
    "Software Engineering",
    "Software Consulting",
    "Big Data",
  ];

  const certifications = [
    "Java Programming",
    "Developing with Spark and Hadoop",
    "AWS Certified Cloud Practitioner",
    "AWS Certified Developer – Associate",
  ];

  const awards = [
    { year: 2022, title: "Winner — JPMC Post Trade Technology India Hackathon", icon: "🏆" },
    { year: 2022, title: "Winner (Mentor) — Smart India Hackathon", icon: "🎖️" },
    { year: 2020, title: "Winner — Smart India Hackathon", icon: "🏆" },
    { year: 2019, title: "Winner — Smart India Hackathon", icon: "🏆" },
    { year: 2019, title: "Runner Up — JPMorgan Chase & Co. Code for Good", icon: "🥈" },
    { year: 2018, title: "Runner-Up — Smart India Hackathon", icon: "🥈" },
  ];

  return (
    <main onMouseMove={handleMouseMove} className="grain-overlay">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ujala Jha",
            jobTitle: "Software Engineer",
            worksFor: { "@type": "Organization", name: "Microsoft" },
            email: "mailto:jhaujala3@gmail.com",
            url: "https://linkedin.com/in/ujalajha",
            sameAs: [
              "https://linkedin.com/in/ujalajha",
              "https://topmate.io/ujalajha",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
          })}
        </script>
      </Helmet>

      {/* ─── NAVBAR ─── */}
      <div className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
        <div className="container" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <nav className="flex gap-5 md:gap-8 text-sm text-muted-foreground justify-center md:justify-end overflow-x-auto py-5">
            <a href="#about" className="story-link">About</a>
            <a href="#experience" className="story-link">Experience</a>
            <a href="#skills" className="story-link">Skills</a>
            <a href="#awards" className="story-link">Awards</a>
            <a href="#gallery" className="story-link">Gallery</a>
            <a href="#contact" className="story-link">Contact</a>
          </nav>
        </div>
      </div>

      {/* ─── HERO ─── */}
      <header className="relative overflow-hidden min-h-screen flex items-center">
        <div id="about" className="ambient-spotlight" aria-hidden="true" />
        <div className="container pt-20 pb-20">
          <section className="grid md:grid-cols-12 gap-10 items-center">
            <div className="order-1 md:order-1 md:col-span-7">
              {/* Terminal-style greeting */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-border text-sm text-muted-foreground mb-6 animate-fade-in">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono text-xs">~/ujala</span>
                <span className="text-primary font-mono text-xs">$</span>
                <span className="font-mono text-xs">whoami</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-gradient-hero animate-fade-in pb-2">
                Hey, I am Ujala!
              </h1>

              <p className="mt-4 text-lg md:text-xl font-medium text-muted-foreground animate-fade-in flex items-center gap-2 flex-wrap">
                <Code2 className="h-5 w-5 text-primary" />
                Senior SWE @ Microsoft
                <span className="text-border">|</span>
                Ex-JPMC
                <span className="text-border">|</span>
                4× SIH Winner
              </p>

              {/* Typing effect */}
              <div className="mt-4 font-mono text-sm text-muted-foreground animate-fade-in">
                <span className="text-primary">→</span> Currently{" "}
                <span className="text-foreground">{currentPhrase}</span>
                <span className="animate-pulse text-primary">▌</span>
              </div>

              {/* Mobile-only photo */}
              <div className="mt-8 md:hidden">
                <div className="rounded-xl overflow-hidden glow-border">
                  <img
                    src="/ujala_social_photos/IMG_2726.jpg"
                    alt="Ujala Jha"
                    className="w-full h-80 object-cover object-[50%_65%]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-8 text-base leading-relaxed text-muted-foreground max-w-2xl animate-fade-in space-y-4">
                <p>
                  I turn <strong className="text-foreground">fuzzy</strong> problems into shipped features.
                </p>
                <p>
                  Currently at <strong className="text-foreground">Microsoft</strong>, I'm automating and
                  building reliable release frameworks for Microsoft Fabric. Riding the{" "}
                  <strong className="text-foreground">Generative AI</strong> wave, I'm also crafting
                  pragmatic AI agents on <strong className="text-foreground">Azure Cloud</strong> for risk
                  checks, smart approvals, and actionable nudges—so teams ship faster and better, with
                  confidence.
                </p>
                <p>
                  Before that, I engineered data pipelines, wrangled{" "}
                  <strong className="text-foreground">AWS clouds</strong>, and kept JPMorgan Chase's markets
                  data <strong className="text-foreground">warehousing</strong> team drama-free. Along the
                  way, I've won (and mentored) my way through 20+ hackathons, proving that curiosity,
                  caffeine, and clean code are a powerful trio.
                </p>
                <p>
                  When I'm not coding, you'll find me{" "}
                  <strong className="text-foreground">solo-travelling</strong> across the country or catching
                  up on things I skipped as a kid—because it's never too late to learn to juggle… or ride a
                  bike!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-3 animate-fade-in">
                <a href="mailto:jhaujala3@gmail.com" aria-label="Email Ujala">
                  <Button className="hover-scale bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                    <Mail className="h-4 w-4 mr-2" /> Get in Touch
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/ujalajha"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button className="hover-scale glass-card glow-border text-foreground hover:bg-white/5" variant="outline">
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </Button>
                </a>
                <a
                  href="https://topmate.io/ujalajha"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Topmate"
                >
                  <Button className="hover-scale glass-card glow-border-amber text-foreground hover:bg-white/5" variant="outline">
                    <img
                      src="/lovable-uploads/e9e7b073-4258-4fcd-ba81-a7715a97d655.png"
                      alt="Topmate logo"
                      className="h-4 w-4 mr-2"
                      loading="lazy"
                    />{" "}
                    Topmate
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/indie.butterfly/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Button className="hover-scale glass-card glow-border text-foreground hover:bg-white/5" variant="outline">
                    <Instagram className="h-4 w-4 mr-2" /> Instagram
                  </Button>
                </a>
              </div>
            </div>

            {/* Desktop hero photo */}
            <div className="order-2 md:order-2 md:col-span-5 hidden md:block">
              <div className="relative group">
                {/* Glow backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-[hsl(38,95%,60%)]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative rounded-xl overflow-hidden glow-border">
                  <img
                    src="/ujala_social_photos/IMG_2726.jpg"
                    alt="Ujala Jha"
                    className="w-full h-[500px] object-cover object-center"
                    loading="lazy"
                  />
                  {/* Photo overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm text-white/80">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="font-mono text-xs">somewhere in the mountains</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <div className="section-divider" />

      {/* ─── GALLERY: CODES & CANDIDS ─── */}
      <section id="gallery" className="container py-20 scroll-reveal opacity-0">
        <div className="flex items-center gap-3 mb-8">
          <Plane className="h-5 w-5 text-[hsl(38,95%,60%)]" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient-amber">
            Codes & Candids
          </h2>
        </div>
        <Carousel setApi={setCandidApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {candidImages.map((img, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <div className="rounded-xl overflow-hidden glow-border group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <div className="section-divider" />

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="container py-20 scroll-reveal opacity-0">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient-cyan">Experience</h2>
        </div>
        <div className="space-y-6">
          {/* Microsoft */}
          <div className="glass-card rounded-xl p-6 glow-border transition-all duration-300 hover:border-primary/40">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <img src={microsoftLogo} alt="Microsoft" className="h-5 w-auto" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium text-foreground">Microsoft — Senior Software Engineer</h3>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Bengaluru
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-mono">Sep 2024 — Present</p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Automating and optimizing release & deployment for Microsoft Fabric.",
                    "Built GPT-powered chatbot with RAG for release management.",
                    "AI agents for risk assessment, automatic approvals, and guided resolutions.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* JPMC */}
          <div className="glass-card rounded-xl p-6 glow-border transition-all duration-300 hover:border-primary/40">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <img src={jpmcLogo} alt="JPMorgan Chase" className="h-5 w-auto rounded" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium text-foreground">
                    JP Morgan Chase & Co. — Senior Software Engineer
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Mumbai
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-mono">Aug 2020 — Sep 2024</p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Led modules for reporting, data warehousing, and AWS big data.",
                    "Migrated legacy Hadoop to AWS using Spark on EKS.",
                    "Built Java Spring microservices, Kafka/MQ ingestion, batch schedulers.",
                    "Enhanced UIs with React; database changes via JPA/Hibernate, MS SQL.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Atto Infotech */}
          <div className="glass-card rounded-xl p-6 glow-border transition-all duration-300 hover:border-primary/40">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h3 className="font-medium text-foreground">
                    Atto Infotech — Software Engineer (Intern)
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> Mumbai
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-mono">May 2018 — Jul 2020</p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Integrated UrbanPiper with POS to unify food delivery orders.",
                    "Built offline-ready modules with IndexedDB/Web SQL.",
                    "Modernized PHP stack from legacy to Laravel.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SKILLS ─── */}
      <section id="skills" className="container py-20 scroll-reveal opacity-0">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="h-5 w-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient-cyan">My Expertise</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-5 w-5 text-[hsl(38,95%,60%)]" />
            <h3 className="text-xl font-semibold text-gradient-amber">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <span key={c} className="cert-tag">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── AWARDS ─── */}
      <section id="awards" className="container py-20 scroll-reveal opacity-0">
        <div className="flex items-center gap-3 mb-10">
          <Award className="h-5 w-5 text-[hsl(38,95%,60%)]" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient-amber">
            Honors & Awards
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 timeline-line" aria-hidden="true" />
          <ol className="space-y-5">
            {awards.map((item, idx) => (
              <li key={`${item.year}-${idx}`} className="relative pl-14">
                <span className="absolute left-2 top-3 h-7 w-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs">
                  {item.icon}
                </span>
                <div className="glass-card rounded-xl p-4 glow-border transition-all duration-300 hover:border-primary/40">
                  <p className="text-xs font-mono text-primary">{item.year}</p>
                  <p className="mt-1 font-medium text-foreground">{item.title}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── EDUCATION ─── */}
      <section id="education" className="container py-20 scroll-reveal opacity-0">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="h-5 w-5 text-[hsl(280,60%,65%)]" />
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[hsl(280,60%,65%)] to-[hsl(175,80%,50%)] bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        <div className="glass-card rounded-xl p-6 glow-border">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-[hsl(280,60%,65%)]/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-5 w-5 text-[hsl(280,60%,65%)]" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Vivekanand Education Society's Institute Of Technology
              </h3>
              <p className="text-sm text-muted-foreground font-mono mt-1">
                B.E. Information Technology • Aug 2016 — Aug 2020
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── CONTACT ─── */}
      <section id="contact" className="container py-20 scroll-reveal opacity-0">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[hsl(38,95%,60%)]/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-gradient-hero">Let's connect</h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">
              Open to collaboration, mentoring, and speaking. Whether it's code, travel stories, or
              building something cool—hit me up!
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:jhaujala3@gmail.com">
                <Button className="hover-scale bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                  <Mail className="h-4 w-4 mr-2" /> Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ujalajha" target="_blank" rel="noreferrer">
                <Button className="hover-scale glass-card glow-border text-foreground hover:bg-white/5" variant="outline">
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a href="https://topmate.io/ujalajha" target="_blank" rel="noreferrer" aria-label="Topmate">
                <Button className="hover-scale glass-card glow-border-amber text-foreground hover:bg-white/5" variant="outline">
                  <img
                    src="/lovable-uploads/e9e7b073-4258-4fcd-ba81-a7715a97d655.png"
                    alt="Topmate logo"
                    className="h-4 w-4 mr-2"
                    loading="lazy"
                  />{" "}
                  Topmate
                </Button>
              </a>
              <a
                href="https://www.instagram.com/indie.butterfly/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Button className="hover-scale glass-card glow-border text-foreground hover:bg-white/5" variant="outline">
                  <Instagram className="h-4 w-4 mr-2" /> Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 border-t border-border/50">
        <div className="container text-center text-sm text-muted-foreground font-mono">
          <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Ujala Jha • Built
          with love, code & wanderlust"
        </div>
      </footer>
    </main>
  );
};

export default Index;
