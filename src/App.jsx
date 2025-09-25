import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

/* ---------- Layout helpers ---------- */
const Section = ({ className = "", children }) => (
  <section className={className}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`container ${className}`}>{children}</div>
);

/* ---------- Header ---------- */
const Header = () => (
  <header className="topbar">
    <div className="topbar-inner">
      <div className="brand">
        <img src="/LOGO FISA.png" alt="SIMA" className="logo-img" />
        <span className="brand-name">SIMA</span>
      </div>
    </div>
  </header>
);

/* ---------- Hero ---------- */
const Hero = () => (
  <Section className="hero">
    <div className="hero-bg" />
    <Container className="hero-inner">
      <h1 className="hero-title">
        De la evaluación al futuro:<br/>tecnología y finanzas claras
      </h1>
    </Container>
  </Section>
);

/* ---------- Features ---------- */
const FeatureRow = ({ img, alt, body, reversed }) => (
  <div className={`feature-row ${reversed ? "reversed" : ""}`}>
    <div className="feature-illustration">
      <img className="feature-img" src={img} alt={alt} />
    </div>
    <div className="feature-copy">
      <p>{body}</p>
    </div>
  </div>
);

/* ---------- Qué buscamos generar (Carrusel) ---------- */
const WhatWeGenerate = () => {
  const items = useMemo(
    () => [
      { img: "/CerebroLibro.png",       label: "SEGURIDAD" },
      { img: "/ImagenBrindarAyuda.png", label: "BRINDAR\nAYUDA" },
      { img: "/ImagenInformar.png",     label: "INFORMAR" },
      { img: "/Financiero.png",         label: "ACCESO\nFINANCIERO" },
      { img: "/Inclusion.png",          label: "INCLUSIÓN" },
    ],
    []
  );

  const CARD_WIDTH = 320;
  const GAP = 24;
  const STEP = CARD_WIDTH + GAP;

  const [visible, setVisible] = useState(() =>
    typeof window !== "undefined" && window.innerWidth <= 700 ? 1 : 3
  );

  useEffect(() => {
    const onResize = () =>
      setVisible(window.innerWidth <= 700 ? 1 : 3);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <Section className="wwg-wrap">
      <Container>
        <h2 className="wwg-title">Que buscamos generar</h2>

        <div
          className="wwg-viewport"
          style={{
            maxWidth:
              visible === 3
                ? `${3 * CARD_WIDTH + 2 * GAP}px`
                : `${CARD_WIDTH}px`,
          }}
        >
          <div
            className="wwg-track"
            style={{ transform: `translateX(${-index * STEP}px)` }}
          >
            {items.map((it, i) => (
              <div className="wwg-card-wrap" key={i}>
                <div className="wwg-card">
                  <img className="wwg-icon" src={it.img} alt={it.label.replace("\n", " ")} />
                  <div className="wwg-label">
                    {it.label.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {j === it.label.split("\n").length - 1 ? "" : <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <button className="wwg-arrow wwg-arrow--left" onClick={prev} aria-label="anterior">
        ←
      </button>
      <button className="wwg-arrow wwg-arrow--right" onClick={next} aria-label="siguiente">
        →
      </button>
    </Section>
  );
};

/* ---------- CTA ---------- */
const GiantButton = () => (
  <Section className="giant-cta">
    <Container>
      <a
        className="giant-btn"
        href="https://frontend-fisa.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        PRUEBANOS
      </a>
    </Container>
  </Section>
);

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="footer">
    <div className="footer-gradient">
      <Container>
        <h3 className="footer-title">Contáctanos</h3>
        <div className="contact-list">
          <div className="contact-item">
            <span className="badge">in</span>
            <span className="contact-text">FISA</span>
          </div>
          <div className="contact-item">
            <span className="badge">@</span>
            <span className="contact-text">FISA@gmail.com</span>
          </div>
        </div>
      </Container>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <Section className="features">
        <Container>
          <FeatureRow
            img="/ImagenPantalla.png"
            alt="pantalla"
            body="En SIMA buscamos brindarte seguridad y confianza en cada paso. Queremos que tomes decisiones financieras con tranquilidad, sabiendo que tu información está protegida y que siempre estaremos de tu lado para acompañarte."
          />
          <FeatureRow
            reversed
            img="/MEGAFONO.png"
            alt="megáfono"
            body="En SIMA queremos ayudarte a mejorar tu relación con el banco. Detectamos tus puntos débiles como solicitante de préstamos y te damos las herramientas para fortalecer tu perfil, aumentando tus posibilidades de acceso al crédito."
          />
        </Container>
      </Section>

      <WhatWeGenerate />
      <GiantButton />
      <Footer />
    </main>
  );
}
