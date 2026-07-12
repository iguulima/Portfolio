"use client";

import { useEffect, useState } from "react";
import { experience, projects, type Project } from "@/data/portfolio";
import { ArrowUpRight, Briefcase, GitHub, Graduation, LinkedIn, Mail, Maximize } from "./Icons";

const letters = ["I", "g", "o", "r", " ", "L", "i", "m", "a"];
type HeroVariant = "signature" | "editorial" | "minimal";

const heroVariants: { id: HeroVariant; label: string }[] = [
  { id: "signature", label: "Original" },
  { id: "editorial", label: "Editorial" },
  { id: "minimal", label: "Minimal" },
];

function Logo() {
  return (
    <svg width="38" height="36" viewBox="0 0 64 61" fill="none" aria-hidden="true">
      <path d="M64 15.25 43.6826 29.4834V48.7998H53.8408L64 61H0V0l12.1904 10.167v38.6328h19.3018v-10.166l-3.5557 2.541-3.0478 2.0332L19.7217 47H14V35.3799L64 0v15.25Z" fill="currentColor" />
    </svg>
  );
}

function Wave({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg className={flipped ? "wave waveFlipped" : "wave"} viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 90C240 20 480 130 720 80s480 30 720-30v90H0Z" />
    </svg>
  );
}

function ProjectArtwork({ variant }: Pick<Project, "variant">) {
  if (variant === "polaroid") {
    return (
      <div className="polaroids" aria-hidden="true">
        <span><i /></span><span><i /></span>
      </div>
    );
  }

  if (variant === "chart") {
    return (
      <div className="mock chartMock" aria-hidden="true">
        <div className="browserBar"><i/><i/><i/></div>
        <div className="mockScreen">
          <span className="skeleton short" />
          <div className="bars">{[40, 75, 55, 95, 35, 65].map((height, index) => <i key={height} style={{ height: `${height}%`, opacity: index === 2 || index === 4 ? .25 : 1 }} />)}</div>
          <span className="skeleton long" />
        </div>
      </div>
    );
  }

  return (
    <div className="mock timerMock" aria-hidden="true">
      <div className="browserBar"><i/><i/><i/></div>
      <div className="mockScreen timerScreen">
        <div className="timer">25:00</div>
        <span className="skeleton long" />
        <div className="mockButtons"><i/><i/></div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.classList.add("modalOpen");
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modalOpen");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div className="modalBackdrop" onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modalClose" onClick={onClose} aria-label="Fechar detalhes">×</button>
        <div className="modalHero" style={{ background: project.gradient }}>
          <span className="badge">{project.year}</span>
          <ProjectArtwork variant={project.variant} />
        </div>
        <div className="modalContent">
          <h2 id="modal-title">{project.title}</h2>
          <div className="cardTags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          <p className="modalLead">{project.description}</p>
          <div className="modalColumns">
            <article className="modalBlock"><h3>O desafio</h3><p>{project.challenge}</p></article>
            <article className="modalBlock"><h3>A solução</h3><p>{project.solution}</p></article>
            <article className="modalBlock"><h3>O que eu fiz</h3><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article className="modalBlock"><h3>Ferramentas</h3><div className="toolList">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></article>
          </div>
          <button className="button" type="button">Ver projeto <ArrowUpRight size={15} /></button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [headerDark, setHeaderDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeExperience, setActiveExperience] = useState<"professional" | "academic">("professional");
  const [heroVariant, setHeroVariant] = useState<HeroVariant>("signature");

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

  const selectedExperience = experience[activeExperience];

  return (
    <>
      <header className={`${scrolled ? "scrolled" : ""} ${headerDark ? "onDark" : ""}`}>
        <div className="wrap nav">
          <a className="logo" href="#inicio" aria-label="Ir ao início"><Logo /></a>
          <span className="navRule" aria-hidden="true" />
          <nav className="navLinks" aria-label="Navegação principal">
            <a href="#projetos">PROJETOS</a><a href="#experiencia">EXPERIÊNCIA</a><a href="#contato">CONTATO</a>
          </nav>
          <span className="navDash" aria-hidden="true" />
        </div>
      </header>

      <main>
        <section className={`hero hero--${heroVariant}`} id="inicio">
          <div className="heroBackground" aria-hidden="true"><i className="blob blobOne"/><i className="blob blobTwo"/><span>UI</span><div className="editorialMark">PORTFOLIO<br/>UX / UI<br/>2026</div><div className="minimalOrbit" /></div>
          <div className="wrap heroContent">
            <p className="heroGreeting">Olá, sou</p>
            <h1 className="heroName" aria-label="Igor Lima">
              {letters.map((letter, index) => letter === " " ? <span className="nameSpace" key={index}> </span> : <span className="letter" style={{ animationDelay: `${.35 + index * .055}s` }} key={`${letter}-${index}`}>{letter}</span>)}
            </h1>
            <div className="heroRoleRow"><p className="heroRole">Product Designer · UX/UI</p></div>
            <div className="heroActions">
              <a className="button" href="/curriculo.pdf" target="_blank">Ver Currículo <ArrowUpRight size={16}/></a>
              <a className="iconLink" href="https://github.com/iguulima" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub/></a>
              <a className="iconLink" href="https://linkedin.com/in/igorlima-s" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn/></a>
              <a className="iconLink" href="#contato" aria-label="E-mail"><Mail/></a>
            </div>
          </div>
          <div className="heroSwitcher" role="group" aria-label="Escolher design da seção inicial">
            <span>Hero</span>
            {heroVariants.map((variant, index) => (
              <button
                className={heroVariant === variant.id ? "active" : ""}
                key={variant.id}
                onClick={() => setHeroVariant(variant.id)}
                aria-pressed={heroVariant === variant.id}
                title={variant.label}
              >
                <b>0{index + 1}</b><em>{variant.label}</em>
              </button>
            ))}
          </div>
          <div className="scrollHint" aria-hidden="true">SCROLL</div>
          <div className="waveWrap"><Wave /></div>
        </section>

        <section className="projects darkSection" id="projetos">
          <div className="marquee" aria-hidden="true"><div className="marqueeTrack">{[0, 1].map((copy) => <div key={copy}>{["Product Design", "UX Research", "UI Design", "Design System", "Prototipagem", "Interação"].map((item) => <span key={item}>{item}<b>✦</b></span>)}</div>)}</div></div>
          <div className="wrap">
            <div className="sectionHeading reveal"><h2>Projetos</h2><span>/ 03</span><i /></div>
            <div className="projectGrid">
              {projects.map((project) => (
                <button className="projectCard reveal" key={project.id} onClick={() => setActiveProject(project)} aria-haspopup="dialog">
                  <div className="thumbnail"><span className="badge">{project.year}</span><div className="thumbnailArt" style={{ background: project.gradient }}><ProjectArtwork variant={project.variant}/></div></div>
                  <div className="projectMeta"><h3>{project.title}</h3><span aria-hidden="true"><Maximize size={18}/></span></div>
                </button>
              ))}
            </div>
          </div>
          <Wave flipped />
        </section>

        <section className="experience" id="experiencia">
          <div className="wrap">
            <div className="sectionHeading lightHeading reveal"><h2>Experiência</h2><span>/ trajetória</span><i /></div>
            <div className="reveal">
              <div className="tabs" role="tablist" aria-label="Tipo de experiência">
                <button className={activeExperience === "professional" ? "active" : ""} onClick={() => setActiveExperience("professional")} role="tab" aria-selected={activeExperience === "professional"}><Briefcase/> Profissional</button>
                <button className={activeExperience === "academic" ? "active" : ""} onClick={() => setActiveExperience("academic")} role="tab" aria-selected={activeExperience === "academic"}><Graduation/> Acadêmica</button>
              </div>
              <div className="timeline" role="tabpanel">
                <article className="experienceCard" key={activeExperience}>
                  <div className="experienceTop"><h3>{selectedExperience.title}</h3><span>{selectedExperience.period}</span></div>
                  <div className="experiencePlace">{activeExperience === "professional" ? <Briefcase/> : <Graduation/>}{selectedExperience.place}</div>
                  <p>{selectedExperience.description}</p>
                  <div className="experienceTags">{selectedExperience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact darkSection" id="contato">
          <span className="contactWatermark" aria-hidden="true">IL</span>
          <div className="wrap contactInner reveal"><p className="eyebrow">Contato</p><h2>Vamos criar algo<br/><span>memorável juntos?</span></h2><a className="mailLink" href="mailto:igorlima7194@gmail.com">igorlima7194@gmail.com <ArrowUpRight/></a><div className="contactSocials"><a className="iconLink" href="https://github.com/iguulima" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub/></a><a className="iconLink" href="https://linkedin.com/in/igorlima-s" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn/></a></div></div>
          <footer><div className="wrap footerInner"><span>© {new Date().getFullYear()} Igor Lima — Product Designer UX/UI</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
        </section>
      </main>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  );
}
