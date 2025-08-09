import type React from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Linkedin, Award, GraduationCap, Briefcase, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import preplacedLogo from "@/assets/logos/preplaced.ico";
import microsoftLogo from "@/assets/logos/microsoft.svg";
import jpmcLogo from "@/assets/logos/jpmorgan.svg";

const Index = () => {
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + "%";
    const y = ((e.clientY - rect.top) / rect.height) * 100 + "%";
    e.currentTarget.style.setProperty("--pointer-x", x);
    e.currentTarget.style.setProperty("--pointer-y", y);
  };

  const title = "Ujala Jha — SWE 2 @ Microsoft | AI & Release Automation";
  const description = "Seasoned software engineer. AI, Release Automation, Cloud. 4x SIH Winner. Let’s build reliable systems.";

  return (
    <main onMouseMove={handleMouseMove}>
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
              "https://preplaced.in/profile/ujala-jha",
              "https://topmate.io/ujala_jha"
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "India"
            }
          })}
        </script>
      </Helmet>

      <header className="relative overflow-hidden">
        <div className="ambient-spotlight" aria-hidden="true" />
        <div className="container py-16 md:py-24">
          <div className="flex items-center justify-end">
            <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
              <a href="#about" className="story-link">About</a>
              <a href="#experience" className="story-link">Experience</a>
              <a href="#skills" className="story-link">Skills</a>
              <a href="#awards" className="story-link">Awards</a>
              <a href="#contact" className="story-link">Contact</a>
            </nav>
          </div>

          <section id="about" className="mt-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="order-1 md:order-1 md:col-span-7">
              <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-brand via-brand-2 to-brand-3 bg-clip-text text-transparent animate-fade-in">
                Ujala Jha
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground animate-fade-in">
                Solves Problem 24*7 • SWE 2 @ Microsoft • Ex-JPMC • 4× Smart India Hackathon Winner
              </p>
              {/** Photo for mobile view */}
              <div className="md:hidden mt-6">
                <Card className="shadow-[var(--shadow-elevated)]">
                  <CardContent className="p-6">
                    <img
                      src="/lovable-uploads/727ca543-175e-45ea-985c-fcc2352e70ad.png"
                      alt="Ujala Jha headshot"
                      className="w-full h-80 object-cover rounded-lg shadow-[var(--shadow-soft)]"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl animate-fade-in">
              I turn fuzzy problems into shipped features. 
              Currently at Microsoft, I’m automating and building reliable release frameworks for Microsoft Fabric. Riding the Generative AI wave, I’m also crafting pragmatic AI agents for risk checks, smart approvals, and actionable nudges—so teams ship faster and better, with confidence.

              Before that, I engineered data pipelines, wrangled AWS clouds, and kept JPMorgan Chase’s markets data warehousing team drama-free. Along the way, I’ve won (and mentored) my way through 20+ hackathons, proving that curiosity, caffeine, and clean code are a powerful trio.

              When I’m not coding, you’ll find me solo-travelling across the country or catching up on things I skipped as a kid—because it’s never too late to learn to juggle… or ride a unicycle.  
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:jhaujala3@gmail.com" aria-label="Email Ujala">
                  <Button className="hover-scale" variant="default">
                    <Mail className="h-4 w-4 mr-2" /> Contact
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/ujalajha" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Button className="hover-scale" variant="secondary">
                    <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                  </Button>
                </a>
                <a href="https://preplaced.in/profile/ujala-jha" target="_blank" rel="noreferrer" aria-label="Preplaced">
                  <Button className="hover-scale" variant="outline">
                    <img src={preplacedLogo} alt="Preplaced logo" className="h-4 w-4 mr-2" />
                    Preplaced
                  </Button>
                </a>
                <a href="https://topmate.io/ujala_jha" target="_blank" rel="noreferrer" aria-label="Topmate">
                  <Button className="hover-scale" variant="outline">
                    <img src="/lovable-uploads/e9e7b073-4258-4fcd-ba81-a7715a97d655.png" alt="Topmate logo (red roundel)" className="h-4 w-4 mr-2" loading="lazy" />
                    Topmate
                  </Button>
                </a>
              </div>
            </div>
            <div className="order-2 md:order-2 md:col-span-5 hidden md:block">
              <Card className="shadow-[var(--shadow-elevated)]">
                <CardContent className="p-6">
                  <img
                    src="/lovable-uploads/727ca543-175e-45ea-985c-fcc2352e70ad.png"
                    alt="Ujala Jha headshot"
                    className="w-full h-80 object-cover rounded-lg shadow-[var(--shadow-soft)]"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </header>

      <section id="experience" className="container py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
        <div className="mt-6 grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <img src={microsoftLogo} alt="Microsoft logo" className="h-5 w-auto" />
                    <h3 className="font-medium">Microsoft — Software Engineer 2</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Sep 2024 — Present • Bengaluru, India</p>
                  <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Automating and optimizing release & deployment for Microsoft Fabric.</li>
                    <li>Built GPT-powered chatbot with RAG for release management.</li>
                    <li>AI agents for risk assessment, automatic approvals, and guided resolutions.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <img src={jpmcLogo} alt="JPMorgan Chase & Co. logo" className="h-5 w-auto" />
                    <h3 className="font-medium">JPMorgan Chase & Co. — Software Engineer 1 → 3</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Aug 2020 — Sep 2024 • Mumbai, India</p>
                  <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Led modules for reporting, data warehousing, and AWS big data.</li>
                    <li>Migrated legacy Hadoop to AWS using Spark on EKS.</li>
                    <li>Built Java Spring microservices, Kafka/MQ ingestion, batch schedulers.</li>
                    <li>Enhanced UIs with React; database changes via JPA/Hibernate, MS SQL.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Atto Infotech — Software Engineer</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">May 2018 — Jul 2020 • Mumbai, India</p>
                  <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Integrated UrbanPiper with POS to unify food delivery orders.</li>
                    <li>Built offline-ready modules with IndexedDB/Web SQL.</li>
                    <li>Modernized PHP stack from legacy to Laravel.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="skills" className="container py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">My Expertise</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'Artificial Intelligence',
            'Generative AI',
            'Predictive AI',
            'Automation',
            'Microsoft Azure',
            'AWS',
            'Software Engineering',
            'Software Consulting',
            'Big Data',
          ].map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{s}</span>
          ))}
        </div>
      </section>

      <section id="awards" className="container py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Honors & Awards</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
          <ol className="space-y-6">
            {[{ year: 2018, title: 'Runner-Up — Smart India Hackathon' },
              { year: 2019, title: 'Winner — Smart India Hackathon' },
              { year: 2019, title: 'Runner Up — JPMorgan Chase & Co. Code for Good' },
              { year: 2020, title: 'Winner — Smart India Hackathon' },
              { year: 2022, title: 'Winner (Mentor) — Smart India Hackathon' },
            ].sort((a,b) => b.year - a.year).map((item, idx) => (
              <li key={`${item.year}-${idx}`} className="relative pl-12">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15" />
                <div className="p-4 rounded-lg bg-card shadow-[var(--shadow-soft)]">
                  <p className="text-sm text-muted-foreground">{item.year}</p>
                  <p className="mt-1 font-medium">{item.title}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="certifications" className="container py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Certifications</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'Java Programming',
            'Developing with Spark and Hadoop',
            'AWS Certified Cloud Practitioner',
            'AWS Certified Developer – Associate'
          ].map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">{c}</span>
          ))}
        </div>
      </section>

      <section id="education" className="container py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
        <Card className="mt-6">
          <CardContent className="p-6 flex items-start gap-3">
            <GraduationCap className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium">Vivekanand Education Society's Institute Of Technology</h3>
              <p className="text-sm text-muted-foreground">B.E. Information Technology • Aug 2016 — Aug 2020</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="contact" className="container py-16">
        <Card className="bg-primary/5 border-dashed">
          <CardContent className="p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Let’s connect</h2>
            <p className="mt-2 text-muted-foreground">Open to collaboration, mentoring, and speaking.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:jhaujala3@gmail.com">
                <Button>
                  <Mail className="h-4 w-4 mr-2" /> Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ujalajha" target="_blank" rel="noreferrer">
                <Button variant="secondary">
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Button>
              </a>
              <a href="https://preplaced.in/profile/ujala-jha" target="_blank" rel="noreferrer" aria-label="Preplaced">
                <Button variant="outline">
                  <img src={preplacedLogo} alt="Preplaced logo" className="h-4 w-4 mr-2" />
                  Preplaced
                </Button>
              </a>
              <a href="https://topmate.io/ujala_jha" target="_blank" rel="noreferrer" aria-label="Topmate">
                <Button variant="outline">
                  <img src="/lovable-uploads/e9e7b073-4258-4fcd-ba81-a7715a97d655.png" alt="Topmate logo (red roundel)" className="h-4 w-4 mr-2" loading="lazy" />
                  Topmate
                </Button>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Button variant="outline">
                  <Youtube className="h-4 w-4 mr-2" /> YouTube
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="py-10">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ujala Jha • Built with a pastel minimalist design
        </div>
      </footer>
    </main>
  );
};

export default Index;
