import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/Icons";
import ProjectArtwork from "@/components/ProjectArtwork";
import CaseSidebarNav from "@/components/CaseSidebarNav";
import ProjectMobileNav from "@/components/ProjectMobileNav";
import { projects } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) return {};
  return { title: "Igor Lima", description: project.description };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <main className="projectPage">
      <ProjectMobileNav />
      <Link className="projectTopBack" href="/#projetos"><span>←</span> Voltar</Link>

      <section className="projectHero" style={{ background: project.gradient }}>
        <div className="projectHeroInfo">
          <span>{project.year}</span>
          <div>{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        </div>
        <ProjectArtwork variant={project.variant} large />
      </section>

      <div className="caseLayout wrap">
        <CaseSidebarNav title={project.title} year={project.year}/>

        <article className="caseDocument">
          <section className="caseOverview caseScrollSection inView" id="overview">
            <span className="caseLabel">/ Visão geral</span>
            <h1>Sobre o projeto</h1>
            <p className="caseLead">{project.description}</p>
            <div className="caseFacts">
              <div><span>Papel</span><p>Product Designer</p></div>
              <div><span>Período</span><p>{project.year}</p></div>
              <div><span>Escopo</span><p>{project.tags.join(" · ")}</p></div>
              <div><span>Habilidades</span>{project.tools.map((tool) => <p key={tool}>{tool}</p>)}</div>
            </div>
            <div className="caseLinks">{project.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.label}>{link.label}<ArrowUpRight size={15}/></a>)}</div>
          </section>

          <section className="caseHighlight caseScrollSection" id="problema">
            <span>/ O problema</span>
            <h2>{project.challenge}</h2>
          </section>

          <section className="caseSection caseScrollSection" id="solucao">
            <span className="caseLabel">/ Solução</span>
            <h2>A resposta construída para o projeto</h2>
            <p>{project.solution}</p>
          </section>

          <section className="caseSection caseScrollSection" id="processo">
            <span className="caseLabel">/ Processo</span>
            <h2>Principais etapas e entregas</h2>
            <div className="caseSteps">{project.contributions.map((item,index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
          </section>

          <section className="caseSection caseScrollSection" id="ferramentas">
            <span className="caseLabel">/ Ferramentas</span>
            <h2>Stack utilizada</h2>
            <div className="caseTools">{project.tools.map((tool) => <b key={tool}>{tool}</b>)}</div>
          </section>

          <Link className="nextProject" href={`/projetos/${projects[(projects.indexOf(project) + 1) % projects.length].id}`}><span>Próximo projeto</span><strong>{projects[(projects.indexOf(project) + 1) % projects.length].title}</strong><ArrowUpRight size={28}/></Link>
        </article>
      </div>
    </main>
  );
}
