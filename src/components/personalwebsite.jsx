"use client";

import { useState, useEffect, useRef } from "react";
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";

// ── DATA ──────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "01",
    title: "Project One",
    description: "A short glimpse at what this does and what drew you to build it.",
    tags: ["React", "WebGL"],
    href: "#",
    glow: "#a78bfa",
  },
  {
    id: "02",
    title: "Project Two",
    description: "Something that challenged you and taught you something new.",
    tags: ["Node.js", "API"],
    href: "#",
    glow: "#67e8f9",
  },
  {
    id: "03",
    title: "Project Three",
    description: "An experiment, a side project, or something just for fun.",
    tags: ["Design", "CSS"],
    href: "#",
    glow: "#f0abfc",
  },
];

const SKILLS = ["JavaScript", "React", "TypeScript", "Node.js", "WebGL", "Figma", "Git", "CSS"];

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

// ── ANIMATION WRAPPER ─────────────────────────────────────────────────────────
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

// ── CHROME STAR SVG ───────────────────────────────────────────────────────────
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
      <path
        d="M50 2 L56 44 L98 50 L56 56 L50 98 L44 56 L2 50 L44 44 Z"
        fill={`url(#cg-${rotate})`}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.5"
      />
    </svg>
  );
}

// ── SMALL DECORATIVE STAR ─────────────────────────────────────────────────────
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

// ── CRESCENT ORNAMET ─────────────────────────────────────────────────────────
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
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

  // parallax offset for hero ornaments
  const px = (mousePos.x / window.innerWidth - 0.5) * 24;
  const py = (mousePos.y / window.innerHeight - 0.5) * 24;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      font-family: 'Syne', sans-serif;
      background: #05060f;
      color: #e2e8f0;
      overflow-x: hidden;
    }

    ::selection { background: rgba(167,139,250,0.35); color: #f0e8ff; }

    @keyframes heroIn {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0);    }
    }
    @keyframes spinSlow { to { transform: rotate(360deg); } }
    @keyframes pulse { 0%,100%{opacity:0.4;} 50%{opacity:0.85;} }
    @keyframes orbitRing {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes floatY {
      0%,100% { transform: translateY(0px); }
      50%     { transform: translateY(-12px); }
    }
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position:  400px 0; }
    }
    @keyframes glowPulse {
      0%,100% { text-shadow: 0 0 30px rgba(167,139,250,0.4), 0 0 60px rgba(167,139,250,0.1); }
      50%      { text-shadow: 0 0 50px rgba(167,139,250,0.6), 0 0 80px rgba(167,139,250,0.2); }
    }

    .nav-link {
      background: none; border: none; cursor: pointer;
      font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 500;
      color: rgba(203,213,225,0.6); letter-spacing: 0.06em;
      text-transform: uppercase; padding: 6px 0;
      border-bottom: 1px solid transparent;
      transition: color 0.2s, border-color 0.2s;
    }
    .nav-link:hover, .nav-link.active {
      color: #e2e8f0;
      border-bottom-color: rgba(167,139,250,0.6);
    }

    .project-card {
      background: rgba(255,255,255,0.025);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      padding: 32px;
      transition: transform 0.35s cubic-bezier(.16,1,.3,1), border-color 0.35s, background 0.35s;
      position: relative;
      overflow: hidden;
    }
    .project-card:hover {
      transform: translateY(-6px);
      background: rgba(255,255,255,0.045);
    }

    .glow-line {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--glow-color, #a78bfa), transparent);
      opacity: 0;
      transition: opacity 0.35s;
    }
    .project-card:hover .glow-line { opacity: 1; }

    .skill-chip {
      font-family: 'Syne', sans-serif;
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: rgba(148,163,184,0.9);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      padding: 6px 16px;
      background: rgba(255,255,255,0.03);
      transition: all 0.2s;
    }
    .skill-chip:hover {
      border-color: rgba(167,139,250,0.4);
      color: #c4b5fd;
      background: rgba(167,139,250,0.06);
    }

    .input-field {
      width: 100%;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 14px 18px;
      font-family: 'Syne', sans-serif;
      font-size: 14px;
      color: #e2e8f0;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
    }
    .input-field:focus {
      border-color: rgba(167,139,250,0.5);
      background: rgba(167,139,250,0.04);
    }
    .input-field::placeholder { color: rgba(148,163,184,0.4); }

    .send-btn {
      background: linear-gradient(135deg, rgba(167,139,250,0.15), rgba(103,232,249,0.1));
      border: 1px solid rgba(167,139,250,0.35);
      border-radius: 40px;
      padding: 15px 40px;
      color: #c4b5fd;
      font-family: 'Syne', sans-serif;
      font-size: 14px; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      cursor: pointer;
      transition: all 0.25s;
    }
    .send-btn:hover {
      background: linear-gradient(135deg, rgba(167,139,250,0.28), rgba(103,232,249,0.18));
      border-color: rgba(167,139,250,0.6);
      color: #ede9fe;
      transform: translateY(-2px);
    }

    .tag-pill {
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 20px;
      background: rgba(255,255,255,0.06);
      color: rgba(148,163,184,0.8);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .section-label {
      font-size: 11px; font-weight: 700;
      letter-spacing: 0.2em; text-transform: uppercase;
      color: rgba(167,139,250,0.8);
      margin-bottom: 16px;
    }

    .view-link {
      font-size: 12px; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      color: rgba(167,139,250,0.7);
      text-decoration: none;
      transition: color 0.2s;
    }
    .view-link:hover { color: #c4b5fd; }

    .divider {
      width: 100%; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(167,139,250,0.2), rgba(103,232,249,0.2), transparent);
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div style={{ background: "#05060f", minHeight: "100vh", position: "relative" }}>

        {/* ── STICKY NAV ── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          padding: "0 2.5rem",
          background: scrollY > 60 ? "rgba(5,6,15,0.85)" : "transparent",
          backdropFilter: scrollY > 60 ? "blur(20px)" : "none",
          borderBottom: scrollY > 60 ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "all 0.4s",
        }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <MiniStar style={{ animation: "spinSlow 8s linear infinite" }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.01em" }}>
                Your Name
              </span>
            </div>
            <div style={{ display: "flex", gap: 36 }}>
              {["about", "projects", "contact"].map(s => (
                <button key={s} className={`nav-link${activeSection === s ? " active" : ""}`} onClick={() => scrollTo(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", padding: "0 2.5rem", overflow: "hidden" }}>

          {/* GravityStars background */}
          <GravityStarsBackground className="absolute inset-0" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

          {/* Radial glows */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
            <div style={{ position: "absolute", top: "20%", left: "55%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)", transform: `translate(${px * 0.5}px, ${py * 0.5}px)`, transition: "transform 0.12s ease-out" }} />
            <div style={{ position: "absolute", top: "50%", left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(103,232,249,0.07) 0%, transparent 70%)", transform: `translate(${-px * 0.3}px, ${-py * 0.3}px)`, transition: "transform 0.12s ease-out" }} />
          </div>

          {/* Floating chrome ornaments */}
          <div style={{ position: "absolute", top: "15%", right: "8%", zIndex: 2, transform: `translate(${px * 1.2}px, ${py * 1.2}px)`, transition: "transform 0.15s ease-out", animation: "floatY 6s ease-in-out infinite" }}>
            <ChromeStar size={80} rotate={12} />
          </div>
          <div style={{ position: "absolute", bottom: "22%", right: "20%", zIndex: 2, transform: `translate(${px * 0.7}px, ${py * 0.7}px)`, transition: "transform 0.15s ease-out", animation: "floatY 8s 1s ease-in-out infinite" }}>
            <ChromeStar size={44} rotate={-20} />
          </div>
          <div style={{ position: "absolute", top: "35%", right: "30%", zIndex: 2, transform: `translate(${px}px, ${py}px)`, transition: "transform 0.15s ease-out", animation: "floatY 7s 2s ease-in-out infinite" }}>
            <ChromeCrescent size={90} />
          </div>
          <div style={{ position: "absolute", bottom: "15%", left: "5%", zIndex: 2, opacity: 0.5, animation: "pulse 4s ease-in-out infinite" }}>
            <ChromeStar size={28} rotate={45} />
          </div>

          {/* Hero text */}
          <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%", position: "relative", zIndex: 3, paddingTop: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, animation: "heroIn 0.7s ease both" }}>
              <div style={{ width: 32, height: 1, background: "rgba(167,139,250,0.6)" }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(167,139,250,0.9)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Portfolio
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: 12,
              animation: "heroIn 0.75s 0.1s ease both",
              animationFillMode: "both",
              opacity: 0,
            }}>
              Your Name
            </h1>
            <h2 style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "rgba(148,163,184,0.8)",
              marginBottom: 40,
              maxWidth: 520,
              lineHeight: 1.5,
              animation: "heroIn 0.75s 0.22s ease both",
              animationFillMode: "both",
              opacity: 0,
            }}>
              Developer & maker — building things that feel alive.
            </h2>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "heroIn 0.75s 0.34s ease both", animationFillMode: "both", opacity: 0 }}>
              <button
                className="send-btn"
                onClick={() => scrollTo("projects")}
                style={{ fontSize: 13 }}
              >
                View work
              </button>
              <button
                onClick={() => scrollTo("about")}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(148,163,184,0.6)", padding: "15px 0", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#94a3b8"}
                onMouseLeave={e => e.target.style.color = "rgba(148,163,184,0.6)"}
              >
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
                    <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400, color: "rgba(167,139,250,0.85)" }}>
                      behind the work
                    </span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(148,163,184,0.85)", marginBottom: 20 }}>
                    I'm a developer based in [Your City]. I care about the craft — the small interactions, the details that take something from good to memorable.
                  </p>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(148,163,184,0.85)" }}>
                    When I'm not building things, you'll find me [hobby], [hobby], or somewhere between curiosity and obsession.
                  </p>
                </Reveal>
              </div>
              <div>
                <Reveal delay={0.15}>
                  <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(100,116,139,0.8)", marginBottom: 20 }}>
                    Technologies
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {SKILLS.map((s, i) => (
                      <span key={s} className="skill-chip" style={{ animationDelay: `${i * 0.05}s` }}>{s}</span>
                    ))}
                  </div>
                </Reveal>

                {/* mini ornament card */}
                <Reveal delay={0.25}>
                  <div style={{
                    marginTop: 48,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16,
                    padding: "24px 28px",
                    display: "flex", alignItems: "center", gap: 20,
                  }}>
                    <ChromeStar size={36} rotate={5} style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "#e2e8f0", marginBottom: 4 }}>Open to opportunities</p>
                      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, color: "rgba(148,163,184,0.6)" }}>Let's build something together.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: "100px 2.5rem", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}><div className="divider" /></div>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <Reveal>
              <p className="section-label">Selected work</p>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 56 }}>
                Things I've{" "}
                <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400, color: "rgba(103,232,249,0.8)" }}>
                  built
                </span>
              </h2>
            </Reveal>

            <div style={{ display: "grid", gap: 20 }}>
              {PROJECTS.map((proj, i) => (
                <Reveal key={proj.id} delay={i * 0.1}>
                  <div className="project-card" style={{ "--glow-color": proj.glow }}>
                    <div className="glow-line" />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(100,116,139,0.7)", letterSpacing: "0.12em" }}>
                            {proj.id}
                          </span>
                          <div style={{ width: 24, height: 1, background: "rgba(100,116,139,0.3)" }} />
                        </div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#f1f5f9", marginBottom: 12, letterSpacing: "-0.01em" }}>
                          {proj.title}
                        </h3>
                        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, lineHeight: 1.7, color: "rgba(148,163,184,0.75)", marginBottom: 20 }}>
                          {proj.description}
                        </p>
                        <div style={{ display: "flex", gap: 8 }}>
                          {proj.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                        </div>
                      </div>
                      <a href={proj.href} className="view-link" style={{ marginTop: 6, whiteSpace: "nowrap" }}>
                        View →
                      </a>
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
                <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic", fontWeight: 400, color: "rgba(167,139,250,0.85)" }}>
                  connect
                </span>
              </h2>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, color: "rgba(148,163,184,0.7)", marginBottom: 48, lineHeight: 1.7 }}>
                Whether it's a project, a collab, or just a hello — I'd love to hear from you.
              </p>
            </Reveal>

            {sent ? (
              <Reveal>
                <div style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 16, padding: "40px", textAlign: "center" }}>
                  <ChromeStar size={40} style={{ margin: "0 auto 16px", display: "block" }} />
                  <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(196,181,253,0.9)" }}>
                    Message received. Talk soon.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={0.1}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { id: "name", placeholder: "Your name", type: "text" },
                    { id: "email", placeholder: "Email address", type: "email" },
                  ].map(({ id, placeholder, type }) => (
                    <input
                      key={id}
                      className="input-field"
                      type={type}
                      placeholder={placeholder}
                      value={form[id]}
                      onChange={e => setForm(p => ({ ...p, [id]: e.target.value }))}
                    />
                  ))}
                  <textarea
                    className="input-field"
                    rows={5}
                    placeholder="Your message"
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ resize: "vertical" }}
                  />
                  <div>
                    <button className="send-btn" onClick={() => setSent(true)}>
                      Send message
                    </button>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ padding: "32px 2.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <MiniStar />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, color: "rgba(100,116,139,0.7)" }}>
                Your Name · {new Date().getFullYear()}
              </span>
            </div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, color: "rgba(100,116,139,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Built with care
            </span>
          </div>
        </footer>

      </div>
    </>
  );
}