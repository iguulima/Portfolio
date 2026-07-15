"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { experience, projects } from "@/data/portfolio";
import { ArrowUpRight, Briefcase, GitHub, Graduation, LinkedIn, Mail } from "./Icons";
import ProjectArtwork from "./ProjectArtwork";

const letters = ["I", "g", "o", "r", " ", "L", "i", "m", "a"];

function Logo() {
  return (
    <svg width="44" height="42" viewBox="0 0 64 61" fill="none" aria-hidden="true">
      <path d="M64 15.25 43.6826 29.4834V48.7998H53.8408L64 61H0V0l12.1904 10.167v38.6328h19.3018v-10.166l-3.5557 2.541-3.0478 2.0332L19.7217 47H14V35.3799L64 0v15.25Z" fill="currentColor" />
    </svg>
  );
}

function Wave({ flipped = false }: { flipped?: boolean }) {
  return <svg className={flipped ? "wave waveFlipped" : "wave"} viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90C240 20 480 130 720 80s480 30 720-30v92H0Z"/></svg>;
}

export default function Portfolio() {
  const [headerDark, setHeaderDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeExperience, setActiveExperience] = useState<"professional" | "academic">("professional");
  const [menuOpen, setMenuOpen] = useState(false);
  const [timelineHeight, setTimelineHeight] = useState<number | null>(null);
  const timelineContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("isVisible"));
    }, { threshold: .12, rootMargin: "0px 0px -40px" });
    document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));

    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = Array.from(document.querySelectorAll<HTMLElement>(".darkSection"));
      setHeaderDark(sections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 40 && rect.bottom >= 40;
      }));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const content = timelineContentRef.current;
    if (!content) return;
    const observer = new ResizeObserver(([entry]) => setTimelineHeight(entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height));
    observer.observe(content);
    return () => observer.disconnect();
  }, [activeExperience]);

  const selectedExperiences = experience[activeExperience];

  return (
    <>
      <div className={`projectFocusBackdrop ${hoveredProject ? "visible" : ""}`} aria-hidden="true" />
      <header className={`mobileMenuDisabled ${scrolled ? "scrolled" : ""} ${headerDark ? "onDark" : ""} ${menuOpen ? "menuActive" : ""}`}>
        <div className={`wrap nav ${menuOpen ? "menuOpen" : ""}`}>
          <a className="logo" href="#inicio" aria-label="Ir ao início"><Logo /></a>
          <span className="navRule" aria-hidden="true" />
          <button className="menuBackdrop" type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />
          <button className="menuToggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span/><span/><span/></button>
          <nav className="navLinks" aria-label="Navegação principal">
            <a href="#projetos" onClick={() => setMenuOpen(false)}>PROJETOS</a><a href="#experiencia" onClick={() => setMenuOpen(false)}>EXPERIÊNCIA</a><a href="#contato" onClick={() => setMenuOpen(false)}>CONTATO</a>
          </nav>
          <span className="navDash" aria-hidden="true" />
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="heroBackground" aria-hidden="true"><i className="blob blobOne"/><i className="blob blobTwo"/><span>UI</span></div>
          <div className="wrap heroContent">
            <p className="heroGreeting">Olá, sou</p>
            <div className="heroIdentity">
              <h1 className="heroName" aria-label="Igor Lima">
                {letters.map((letter, index) => letter === " " ? <span className="nameSpace" key={index}> </span> : <span className="letter" style={{ animationDelay: `${.35 + index * .055}s` }} key={`${letter}-${index}`}>{letter}</span>)}
              </h1>
              <div className="heroRoleRow"><p className="heroRole">Analista de Requisitos · UX/UI</p></div>
            </div>
            <div className="heroActions">
              <a className="button" href="/Igor%20Lima%20-%20Curriculo.pdf" target="_blank">Ver Currículo <ArrowUpRight size={16}/></a>
              <a className="iconLink" href="https://github.com/iguulima" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub/></a>
              <a className="iconLink" href="https://linkedin.com/in/igorlima-s" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn/></a>
              <a className="iconLink" href="#contato" aria-label="E-mail"><Mail/></a>
            </div>
          </div>
          <a className="scrollCue scroll--label" href="#projetos" aria-label="Ir para os projetos"><span className="scrollLabel">Ver projetos</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v16"/><path d="m6 14 6 6 6-6"/></svg></a>
          <div className="waveWrap"><Wave/></div>
        </section>

        <section className={`projects darkSection ${hoveredProject ? "focusMode" : ""}`} id="projetos">
          <div className="wrap">
            <div className={`projectGrid cards--posterSoft ${projects.length === 1 ? "singleProjectGrid" : ""}`}>
              {projects.map((project) => (
                <Link
                  className={`projectCard projectCardVisible ${hoveredProject === project.id ? "focused" : ""}`}
                  href={`/projetos/${project.id}`}
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onFocus={() => setHoveredProject(project.id)}
                  onBlur={() => setHoveredProject(null)}
                  aria-label={`Abrir projeto ${project.title}`}
                >
                  <div className="thumbnail"><span className="badge">{project.year}</span><div className="thumbnailArt" style={{ background: project.gradient }}>{project.image ? <Image className="thumbnailImage" src={project.image} alt={`Mockup do projeto ${project.title}`} fill sizes="(max-width: 620px) 100vw, 50vw" priority /> : <ProjectArtwork variant={project.variant}/>}</div></div>
                  <div className="projectMeta"><div><small>{project.tags[0]}</small><h3>{project.title}</h3></div><span aria-hidden="true"><ArrowUpRight size={18}/></span></div>
                </Link>
              ))}
            </div>
          </div>
          <Wave flipped/>
        </section>

        <section className="experience" id="experiencia">
          <div className="wrap">
            <div className="experienceIntro reveal">
              <div className="sectionHeading lightHeading"><h2>Experiência</h2></div>
              <div className="tabs" role="tablist" aria-label="Tipo de experiência">
                <button className={activeExperience === "professional" ? "active" : ""} onClick={() => setActiveExperience("professional")} role="tab" aria-selected={activeExperience === "professional"}><Briefcase/> Profissional</button>
                <button className={activeExperience === "academic" ? "active" : ""} onClick={() => setActiveExperience("academic")} role="tab" aria-selected={activeExperience === "academic"}><Graduation/> Acadêmica</button>
              </div>
            </div>
            <div className="timeline reveal" role="tabpanel" style={timelineHeight ? { height: timelineHeight } : undefined}>
              <div className="timelineContent" ref={timelineContentRef}>
              {selectedExperiences.map((item) => (
                <article className="experienceEntry" key={`${activeExperience}-${item.place}`}>
                  <div className="experienceDate"><strong>{item.year}</strong><span>{item.period}</span></div>
                  <div className="experienceBody">
                  <div className="experienceTop"><h3>{item.title}</h3></div>
                  <div className="experiencePlace">{item.place}</div>
                  <ul className="experienceHighlights">
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact darkSection" id="contato">
          <span className="contactWatermark" aria-hidden="true">IL</span>
          <div className="wrap contactInner reveal"><p className="eyebrow">Contato</p><h2>Vamos criar algo<br/><span>memorável juntos?</span></h2><a className="mailLink" href="mailto:igorlima7194@gmail.com">igorlima7194@gmail.com <ArrowUpRight/></a><div className="contactSocials"><a className="iconLink" href="https://github.com/iguulima" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub/></a><a className="iconLink" href="https://linkedin.com/in/igorlima-s" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn/></a></div></div>
          <footer><div className="wrap footerInner"><span>© {new Date().getFullYear()} Igor Lima</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
        </section>
      </main>
    </>
  );
}
