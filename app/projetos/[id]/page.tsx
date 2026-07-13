import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/Icons";
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

      <section className="projectHero" style={{ background: project.background }}>
        <div className="projectHeroInfo">
          <span>{project.year}</span>
          <div>{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
        </div>
        {(project.heroImage ?? project.image) && <div className="projectHeroMedia"><Image className="projectHeroImage" src={project.heroImage ?? project.image!} alt={`Apresentação do projeto ${project.title}`} fill priority sizes="100vw" /></div>}
      </section>

      <div className="caseLayout wrap">
        <CaseSidebarNav title={project.title} year={project.year}/>

        <article className="caseDocument">
          <section className="caseOverview caseScrollSection inView" id="overview">
            <span className="caseLabel">/ Visão geral</span>
            <h1>{project.title}</h1>
            <p className="caseLead">{project.description}</p>
            <div className="caseFacts">
              <div><span>Papel</span><p>UX/UI Designer</p><p>Prototipação</p></div>
              <div><span>Período</span><p>{project.year}</p></div>
              <div><span>Contexto</span><p>Projeto acadêmico</p><p>Equipe de 5 pessoas</p></div>
              <div><span>Escopo</span><p>Produto mobile</p><p>Dois perfis de usuário</p></div>
            </div>
            <div className="caseLinks">{project.links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.label}>{link.label}<ArrowUpRight size={15}/></a>)}</div>
            <div className="caseNarrative">{project.overview?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>

          <section className="caseHighlight caseScrollSection" id="desafio">
            <span>/ O desafio</span>
            <h2>{project.challenge}</h2>
            <div className="caseNarrative"><p>Como os atendimentos aconteceriam presencialmente, também foi necessário pensar nos limites de atuação do aplicativo e em situações externas à plataforma: alterações no serviço, problemas durante o atendimento, cancelamentos e divergências entre cliente e prestador.</p></div>
          </section>

          <section className="caseSection caseScrollSection" id="produto">
            <span className="caseLabel">/ O produto</span>
            <h2>Uma plataforma, duas experiências conectadas</h2>
            <p>{project.solution}</p>
            <div className="caseFeatureColumns">
              <div><h3>Para clientes</h3><ul>{project.clientFeatures?.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Para prestadores</h3><ul>{project.providerFeatures?.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </section>

          <section className="caseSection caseScrollSection" id="participacao">
            <span className="caseLabel">/ Minha participação</span>
            <h2>Da definição do produto ao protótipo navegável</h2>
            <p>Fui responsável pela maior parte da construção do protótipo no Figma, trabalhando continuamente com os feedbacks dos outros quatro integrantes do grupo e do professor responsável.</p>
            <div className="caseSteps">{project.contributions.map((item,index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
          </section>

          <section className="caseSection caseScrollSection" id="resultado">
            <span className="caseLabel">/ Resultado</span>
            <h2>Um protótipo extenso e pronto para apresentação</h2>
            <p>O resultado cobriu a jornada desde o cadastro e tutorial inicial até busca, contato, orçamento, pagamento e gerenciamento de serviços.</p>
            <div className="caseResults">{project.results?.map((result) => <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}</div>
          </section>

          <section className="caseSection caseScrollSection" id="aprendizados">
            <span className="caseLabel">/ Aprendizados</span>
            <h2>O início da minha evolução em produtos digitais</h2>
            <div className="caseNarrative">{project.learnings?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="caseTools">{project.tools.map((tool) => <b key={tool}>{tool}</b>)}</div>
          </section>
        </article>
      </div>
    </main>
  );
}
