import React from "react";
import "./App.css";

const BRAND = { name: "SIMA" };

const Section = ({ className = "", children, id }) => (
  <section id={id} className={className}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`container ${className}`}>{children}</div>
);

/* Header */
const Header = () => (
  <header className="topbar">
    <div className="topbar-inner">
      <div className="brand">
        <img src="/LOGO FISA.png" alt="Logo SIMA" className="logo-img" />
        <span className="brand-name">SIMA</span>
      </div>
    </div>
  </header>
);


/* Hero */
const Hero = () => (
  <Section className="hero">
    <div className="hero-bg" />
    <Container className="hero-inner">
      <h1 className="hero-title">
        De la evaluación al futuro:<br />
        tecnología y finanzas claras
      </h1>
    </Container>
  </Section>
);

/* Features */
const FeatureRow = ({ img, body, reversed = false, alt = "" }) => (
  <div className={`feature-row ${reversed ? "reversed" : ""}`}>
    <div className="feature-illustration">
      <div className="illus-box">
        <img src={img} alt={alt} className="illus-img" />
      </div>
    </div>
    <div className="feature-copy">
      <p className="feature-text">{body}</p>
    </div>
  </div>
);

/* Qué buscamos generar */
const WhatWeGenerate = () => (
  <Section className="wwg">
    <Container className="wwg-head">
      <h2>Que buscamos generar</h2>
    </Container>
    <div className="wwg-strip">
      <button className="wwg-arrow">←</button>
      <div className="wwg-cards">
        <div className="wwg-card">
          <img src="/CerebroLibro.png" alt="Seguridad" className="wwg-icon" />
          <div className="wwg-label">SEGURIDAD</div>
        </div>
        <div className="wwg-card active">
          <img src="/ImagenBrindarAyuda.png" alt="Brindar ayuda" className="wwg-icon" />
          <div className="wwg-label">BRINDAR<br/>AYUDA</div>
        </div>
        <div className="wwg-card">
          <img src="/ImagenInformar.png" alt="Informar" className="wwg-icon" />
          <div className="wwg-label">INFORMAR</div>
        </div>
      </div>
      <button className="wwg-arrow">→</button>
    </div>
  </Section>
);

/* Botón gigante */
const GiantButton = () => (
  <Section className="giant-cta">
    <Container>
      <a 
        href="https://frontend-fisa.vercel.app" 
        target="_blank" 
        rel="noreferrer" 
        className="giant-btn"
      >
        PRUEBANOS
      </a>
    </Container>
  </Section>
);


/* Footer sin links */
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
      <Section className="features-wrap">
        <Container>
          <FeatureRow
            img="/ImagenPantalla.png"
            alt="Seguridad y confianza"
            body="En SIMA buscamos brindarte seguridad y confianza en cada paso. Queremos que tomes decisiones financieras con tranquilidad, sabiendo que tu información está protegida y que siempre estaremos de tu lado para acompañarte."
          />
          <FeatureRow
            reversed
            img="/MEGAFONO.png"
            alt="Mejor relación con tu banco"
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
