"use client";

import { useState, useEffect, useRef } from "react";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";

// ── DATA ──────────────────────────────────────────────────────────────────────
const RESEARCH = [
  {
    id: "01",
    title: "Decentralized Social Media & Teen Well-being",
    lab: "Collaborative Social Technologies Lab",
    period: "Sep 2024 – Apr 2025",
    description: "Examined the user experience of decentralized platforms like Mastodon as a potential solution to teen well-being risks posed by traditional social media. Conducted literature review and UX analysis.",
    badge: "CHI '25 — Yokohama, Japan",
    tags: ["HCI", "Social Computing", "UX Research"],
    href: "https://mobiletechteens-chi2025.github.io/data/papers/id014.pdf",
    glow: "#a78bfa",
  },
  {
    id: "02",
    title: "TransLucent",
    lab: "Civic A.I. Lab",
    period: "Dec 2025 – present",
    description: "Researching gaps in existing translation tools via formative studies and interviews. Designing a tool that adapts its interface based on the user's language proficiency level.",
    badge: "Ongoing",
    tags: ["HCI", "NLP", "Interface Design"],
    href: "https://github.com/ariawantstokhs/kor-trans-tool/tree/main",
    glow: "#67e8f9",
  },
  {
    id: "03",
    title: "Multilingual Collaboration Platform",
    lab: "Collaborative Social Technologies Lab",
    period: "May 2025 – Dec 2025",
    description: "Pilot study on why international KAIST students leave Korea post-graduation — finding: language and cultural barriers in workplaces. Designed a platform to bridge that gap.",
    badge: null,
    tags: ["Social Computing", "CSCW", "Prototyping"],
    href: "https://github.com/ariawantstokhs/multilingual-communication",
    glow: "#f0abfc",
  },
];

const PROJECTS = [
  {
    id: "01",
    title: "Yarns & Loops",
    period: "April 2026 – present",
    description: "A full-stack AI operations dashboard for a crochet business with multi-agent workflows for production scheduling, inventory replenishment, and customer-reply drafting, with real-time progress streaming and human-in-the-loop approvals.",
    tags: ["React + Vite", "Node/Express", "Supabase", "OpenAI"],
    href: "https://github.com/ariawantstokhs/crochet-dash.git",
    glow: "#a78bfa",
  },
  {
    id: "02",
    title: "AIntegrate",
    period: "Mar 2025 – Jun 2025",
    description: "Platform using LLMs and a research paper dataset to help beginner entrepreneurs find AI optimization strategies for their businesses. Pitched with a YC-template deck.",
    tags: ["LLM", "Entrepreneurship", "Figma"],
    href: "https://www.figma.com/proto/kP86QTEsGF6HRnCDtQ8cWZ/BM---demo?node-id=264-2907&p=f&t=BSxZ1iQeaKImTH6u-1&scaling=scale-down&content-scaling=fixed&page-id=264%3A1474&starting-point-node-id=264%3A2907&show-proto-sidebar=1",
    glow: "#a78bfa",
  },
  {
    id: "03",
    title: "YumYums",
    period: "Mar 2024 – Jun 2024",
    description: "Kiosk interface designed for people with dietary restrictions — allergy checks, personalized suggestions from past customer data, and haptic-button menu customization.",
    tags: ["UX Design", "Figma", "Accessibility"],
    href: "https://www.figma.com/proto/YJaZA8PRmkjA1rwL1ZPZPn/Kiosk-prototype-version-2?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down&t=EmC1P1cgrWREXtnL-1",
    glow: "#67e8f9",
  },
  {
    id: "04",
    title: "Pandora's Box Discord Bot",
    period: "Sep 2024 – Dec 2024",
    description: "Discord bot using the OpenAI API to mediate workplace and lab communication. Generated emotion 2D maps with Matplotlib and preserved member anonymity through prompt engineering.",
    tags: ["OpenAI API", "Python", "Discord"],
    href: "https://github.com/kate-nam/Pandora-Box",
    glow: "#f0abfc",
  },
  {
    id: "05",
    title: "The Sentient Coffee Mug",
    period: "Sep 2024 – Dec 2024",
    description: "Gave a coffee mug sentient thoughts by feeding live sensor data into the OpenAI API. Prompt engineered a distinct personality. Yes, really.",
    tags: ["IoT", "OpenAI API", "Prompt Engineering"],
    href: "https://github.com/SeungjaeLim/Coffee-Mug",
    glow: "#fcd34d",
  },
  {
    id: "06",
    title: "Signature Forgery Detection",
    period: "Sep 2023 – Dec 2023",
    description: "Implemented and compared CNN and Siamese networks for signature forgery detection on a standardized image dataset, analyzing trade-offs in accuracy and generalization.",
    tags: ["CNN", "Deep Learning", "Python"],
    href: "https://github.com/uziahmd/Siguature_Verification",
    glow: "#6ee7b7",
  },
];

const SKILLS = [
  "Python", "React.js", "Java", "TypeScript", "JavaScript",
  "Figma", "Miro", "Adobe Illustrator",
  "Firebase", "GitHub",
];

const LINKEDIN_URL = "https://www.linkedin.com/in/aribah-aizaz-b55046204/";

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0) scale(1)" : "translateY(36px) scale(0.98)",
      transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ── SVG ORNAMENTS ─────────────────────────────────────────────────────────────
function ChromeStar({ size = 48, rotate = 0, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ transform: `rotate(${rotate}deg)`, ...style }}>
      <defs>
        <linearGradient id={`cg-${rotate}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="35%" stopColor="#94a3b8" />
          <stop offset="65%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
      <path d="M50 2 L56 44 L98 50 L56 56 L50 98 L44 56 L2 50 L44 44 Z" fill={`url(#cg-${rotate})`} stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
    </svg>
  );
}

function MiniStar({ style = {} }) {
  return (
    <svg width="16" height="16" viewBox="0 0 100 100" style={style}>
      <defs>
        <linearGradient id="mstar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>
      <path d="M50 2 L56 44 L98 50 L56 56 L50 98 L44 56 L2 50 L44 44 Z" fill="url(#mstar)" />
    </svg>
  );
}

function ChromeCrescent({ size = 60, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
      <defs>
        <linearGradient id="crescent-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="ring-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(200,220,255,0.8)" />
          <stop offset="100%" stopColor="rgba(100,140,200,0.3)" />
        </linearGradient>
      </defs>
      <path d="M70 18 A35 35 0 1 0 70 82 A25 25 0 1 1 70 18 Z" fill="url(#crescent-g)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke="url(#ring-g)" strokeWidth="2" transform="rotate(-30 50 50)" />
    </svg>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("hero");
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    window.scrollTo(0, 0);
  
    const onScroll = () => setScrollY(window.scrollY);
    let ticking = false;
    const onMouse = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePos({ ...mousePosRef.current });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const px = mounted ? (mousePos.x / window.innerWidth - 0.5) * 24 : 0;
  const py = mounted ? (mousePos.y / window.innerHeight - 0.5) * 24 : 0;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Syne', sans-serif; background: #05060f; color: #e2e8f0; overflow-x: hidden; }
    ::selection { background: rgba(167,139,250,0.35); color: #f0e8ff; }

    @keyframes heroIn { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes pulse { 0%,100%{opacity:0.4;} 50%{opacity:0.85;} }
    @keyframes floatY { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-12px);} }

    .nav-link { background:none; border:none; cursor:pointer; font-family:'Syne',sans-serif; font-size:13px; font-weight:500; color:rgba(203,213,225,0.6); letter-spacing:0.06em; text-transform:uppercase; padding:6px 0; border-bottom:1px solid transparent; transition:color 0.2s, border-color 0.2s; }
    .nav-link:hover, .nav-link.active { color:#e2e8f0; border-bottom-color:rgba(167,139,250,0.6); }

    .card { background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:32px; transition:transform 0.35s cubic-bezier(.16,1,.3,1), background 0.35s; position:relative; overflow:hidden; }
    .card:hover { transform:translateY(-6px); background:rgba(255,255,255,0.045); }
    .glow-line { position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg, transparent, var(--glow-color, #a78bfa), transparent); opacity:0; transition:opacity 0.35s; }
    .card:hover .glow-line { opacity:1; }

    .skill-chip { font-family:'Syne',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:rgba(148,163,184,0.9); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:6px 16px; background:rgba(255,255,255,0.03); transition:all 0.2s; }
    .skill-chip:hover { border-color:rgba(167,139,250,0.4); color:#c4b5fd; background:rgba(167,139,250,0.06); }

    .send-btn { background:linear-gradient(135deg, rgba(167,139,250,0.15), rgba(103,232,249,0.1)); border:1px solid rgba(167,139,250,0.35); border-radius:40px; padding:15px 40px; color:#c4b5fd; font-family:'Syne',sans-serif; font-size:14px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; cursor:pointer; transition:all 0.25s; }
    .send-btn:hover { background:linear-gradient(135deg, rgba(167,139,250,0.28), rgba(103,232,249,0.18)); border-color:rgba(167,139,250,0.6); color:#ede9fe; transform:translateY(-2px); }

    .tag-pill { font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; padding:4px 12px; border-radius:20px; background:rgba(255,255,255,0.06); color:rgba(148,163,184,0.8); border:1px solid rgba(255,255,255,0.08); }
    .section-label { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:rgba(167,139,250,0.8); margin-bottom:16px; }
    .view-link { font-size:12px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:rgba(167,139,250,0.7); text-decoration:none; transition:color 0.2s; white-space:nowrap; }
    .view-link:hover { color:#c4b5fd; }
    .divider { width:100%; height:1px; background:linear-gradient(90deg, transparent, rgba(167,139,250,0.2), rgba(103,232,249,0.2), transparent); }
  `;

  return (
    <>
      <style>{css}</style>
      <div style={{ background: "#05060f", minHeight: "100vh", position: "relative" }}>

        {/* ── NAV ── */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, padding: "0 2.5rem", background: scrollY > 60 ? "rgba(5,6,15,0.85)" : "transparent", backdropFilter: scrollY > 60 ? "blur(20px)" : "none", borderBottom: scrollY > 60 ? "1px solid rgba(255,255,255,0.05)" : "none", transition: "all 0.4s" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <MiniStar style={{ animation: "spinSlow 8s linear infinite" }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.01em" }}>Aribah's Portfolio</span>
            </div>
            <div style={{ display: "flex", gap: 36 }}>
              {["about", "research", "projects", "contact"].map(s => (
                <button key={s} className={`nav-link${activeSection === s ? " active" : ""}`} onClick={() => scrollTo(s)}>{s}</button>
              ))}
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", padding: "0 2.5rem", overflow: "hidden" }}>
          <GravityStarsBackground className="absolute inset-0" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
            <div style={{ position: "absolute", top: "20%", left: "55%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)", transform: `translate(${px * 0.5}px, ${py * 0.5}px)`, transition: "transform 0.12s ease-out" }} />
            <div style={{ position: "absolute", top: "50%", left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(103,232,249,0.07) 0%, transparent 70%)", transform: `translate(${-px * 0.3}px, ${-py * 0.3}px)`, transition: "transform 0.12s ease-out" }} />
          </div>

          <div style={{ position: "absolute", top: "15%", right: "8%", zIndex: 2, transform: `translate(${px * 1.2}px, ${py * 1.2}px)`, transition: "transform 0.15s ease-out", animation: "floatY 6s ease-in-out infinite" }}><ChromeStar size={80} rotate={12} /></div>
          <div style={{ position: "absolute", bottom: "22%", right: "20%", zIndex: 2, transform: `translate(${px * 0.7}px, ${py * 0.7}px)`, transition: "transform 0.15s ease-out", animation: "floatY 8s 1s ease-in-out infinite" }}><ChromeStar size={44} rotate={-20} /></div>
          <div style={{ position: "absolute", top: "35%", right: "30%", zIndex: 2, transform: `translate(${px}px, ${py}px)`, transition: "transform 0.15s ease-out", animation: "floatY 7s 2s ease-in-out infinite" }}><ChromeCrescent size={90} /></div>
          <div style={{ position: "absolute", bottom: "15%", left: "5%", zIndex: 2, opacity: 0.5, animation: "pulse 4s ease-in-out infinite" }}><ChromeStar size={28} rotate={45} /></div>

          <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%", position: "relative", zIndex: 3, paddingTop: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, animation: "heroIn 0.7s ease both" }}>
              <div style={{ width: 32, height: 1, background: "rgba(167,139,250,0.6)" }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(167,139,250,0.9)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Portfolio</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3.2rem, 7vw, 6.5rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 12, animation: "heroIn 0.75s 0.1s ease both", animationFillMode: "both", opacity: 0 }}>
              Aribah Aizaz
            </h1>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 400, fontStyle: "italic", color: "rgba(148,163,184,0.8)", marginBottom: 40, maxWidth: 580, lineHeight: 1.5, animation: "heroIn 0.75s 0.22s ease both", animationFillMode: "both", opacity: 0 }}>
              HCI researcher & developer — building things for people.
            </h2>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "heroIn 0.75s 0.34s ease both", animationFillMode: "both", opacity: 0 }}>
              <button className="send-btn" onClick={() => scrollTo("research")} style={{ fontSize: 13 }}>See my work</button>
              <button onClick={() => scrollTo("about")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(148,163,184,0.6)", padding: "15px 0", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#94a3b8"} onMouseLeave={e => e.target.style.color = "rgba(148,163,184,0.6)"}>
                About me →
              </button>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: "120px 2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><div className="divider" /></div>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
              <div>
                <Reveal>
                  <p className="section-label">About</p>
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 32 }}>
                    The person<br />
                    <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400, color: "rgba(167,139,250,0.85)" }}>behind the work</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(148,163,184,0.85)", marginBottom: 15 }}>
                    I'm Aribah — an HCI researcher and developer who believes the best technology is the kind people barely notice, currently based in Daejeon. I study how people use technology and why it so often frustrates them. 
                  </p>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(148,163,184,0.85)", marginBottom: 15 }}>
                  I'm a CS + Business double major from KAIST, published at CHI '25, currently untangling multilingual collaboration one interview at a time.
                  </p>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(148,163,184,0.85)", marginBottom: 32 }}>
                    When I'm not in the lab, I'm mid-crochet project, mid-run, or mid-episode of something that will make me cry. 
                  </p>
                  <a href="https://github.com/ariawantstokhs" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(167,139,250,0.8)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#c4b5fd"} onMouseLeave={e => e.currentTarget.style.color = "rgba(167,139,250,0.8)"}>
                    GitHub @ariawantstokhs →
                  </a>
                </Reveal>
              </div>
              <div>
                <Reveal delay={0.08}>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
                    <div
                      style={{
                        width: 220,
                        aspectRatio: "1 / 1",
                        borderRadius: 16,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.03)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                      }}
                    >
                      <img
                        src="/pic1.jpg"
                        alt="Aribah Aizaz portrait 1"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div
                      style={{
                        width: 220,
                        aspectRatio: "1 / 1",
                        borderRadius: 16,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.03)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                      }}
                    >
                      <img
                        src="/pic2.jpg"
                        alt="Aribah Aizaz portrait 2"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(100,116,139,0.8)", marginBottom: 20 }}>Technologies & tools</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
                    {SKILLS.map(s => <span key={s} className="skill-chip">{s}</span>)}
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(100,116,139,0.8)", marginBottom: 16 }}>Languages</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
                    {["Urdu (native)", "English (native)", "Korean (intermediate)", "Arabic (beginner)"].map(l => <span key={l} className="skill-chip">{l}</span>)}
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 28px", display: "flex", alignItems: "center", gap: 20 }}>
                    <ChromeStar size={36} rotate={5} style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "#e2e8f0", marginBottom: 4 }}>Open to opportunities</p>
                      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, color: "rgba(148,163,184,0.6)" }}>Research, design, or dev — let's build something together.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── RESEARCH ── */}
        <section id="research" style={{ padding: "100px 2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><div className="divider" /></div>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <Reveal>
              <p className="section-label">Research</p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 56 }}>
                What I'm{" "}
                <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400, color: "rgba(167,139,250,0.85)" }}>investigating</span>
              </h2>
            </Reveal>
            <div style={{ display: "grid", gap: 20 }}>
              {RESEARCH.map((r, i) => (
                <Reveal key={r.id} delay={i * 0.1}>
                  <div className="card" style={{ "--glow-color": r.glow }}>
                    <div className="glow-line" />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(100,116,139,0.7)", letterSpacing: "0.12em" }}>{r.id}</span>
                          <div style={{ width: 20, height: 1, background: "rgba(100,116,139,0.3)" }} />
                          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, color: "rgba(148,163,184,0.5)", letterSpacing: "0.04em" }}>{r.lab} · {r.period}</span>
                          {r.badge && (
                            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 20, background: r.badge === "Ongoing" ? "rgba(103,232,249,0.1)" : "rgba(167,139,250,0.15)", color: r.badge === "Ongoing" ? "rgba(103,232,249,0.9)" : "rgba(196,181,253,0.9)", border: `1px solid ${r.badge === "Ongoing" ? "rgba(103,232,249,0.25)" : "rgba(167,139,250,0.3)"}` }}>
                              {r.badge}
                            </span>
                          )}
                        </div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 12, letterSpacing: "-0.01em" }}>{r.title}</h3>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(148,163,184,0.75)", marginBottom: 18 }}>{r.description}</p>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {r.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                        </div>
                      </div>
                      <a href={r.href} target="_blank" rel="noreferrer" className="view-link" style={{ marginTop: 6 }}>Read →</a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: "100px 2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><div className="divider" /></div>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <Reveal>
              <p className="section-label">Projects</p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 56 }}>
                Things I've{" "}
                <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400, color: "rgba(103,232,249,0.8)" }}>built</span>
              </h2>
            </Reveal>
            <div style={{ display: "grid", gap: 20 }}>
              {PROJECTS.map((proj, i) => (
                <Reveal key={proj.id} delay={i * 0.08}>
                  <div className="card" style={{ "--glow-color": proj.glow }}>
                    <div className="glow-line" />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(100,116,139,0.7)", letterSpacing: "0.12em" }}>{proj.id}</span>
                          <div style={{ width: 24, height: 1, background: "rgba(100,116,139,0.3)" }} />
                          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, color: "rgba(148,163,184,0.5)" }}>{proj.period}</span>
                        </div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 12, letterSpacing: "-0.01em" }}>{proj.title}</h3>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(148,163,184,0.75)", marginBottom: 18 }}>{proj.description}</p>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                          {proj.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                        </div>
                      </div>
                      <a href={proj.href} target="_blank" rel="noreferrer" className="view-link" style={{ marginTop: 6 }}>View →</a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "100px 2.5rem 80px", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><div className="divider" /></div>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <Reveal>
              <p className="section-label">Contact</p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 12 }}>
                Let's{" "}
                <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400, color: "rgba(167,139,250,0.85)" }}>connect</span>
              </h2>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, color: "rgba(148,163,184,0.7)", marginBottom: 32, lineHeight: 1.7 }}>
                Whether it's a research collab, a project, or just a hello — I'd love to hear from you.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
                <a
                  href="mailto:aaribah0709@gmail.com"
                  className="send-btn"
                  style={{ textDecoration: "none" }}
                >
                  Email me →
                </a>
              
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="send-btn"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, textDecoration: "none" }}
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ padding: "32px 2.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MiniStar />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, color: "rgba(100,116,139,0.7)" }}>
                Aribah's Portfolio · {mounted ? new Date().getFullYear() : ""}
              </span>
            </div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, color: "rgba(100,116,139,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Built with care</span>
          </div>
        </footer>

      </div>
    </>
  );
}