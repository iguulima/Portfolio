import ProjCard from "../components/ProjCard";
import '../components/HomeProjects/homeProjects.css';

import usdImg from "../assets/images/UsdApp.png";
import tgImg from "../assets/images/tg.png";

const Projects = () => {
  const projects = [
    {
      title: "App Usina São Domingos",
      description: "App mobile para controle de locações em usinas, eliminando planilhas e agilizando processos.",
      tags: ["React Native", "Figma"],
      image: usdImg,
      link: "/proj/usd",
    },
    {
      title: "Outro projeto",
      description: "descrição exemplo",
      tags: ["JavaScript", "CSS"],
      image: tgImg,
      link: "/proj/abc",
    },
    {
      title: "Mais um projeto",
      description: "descrição teste",
      tags: ["HTML", "Node.js"],
      image: tgImg,
      link: "/proj/xyz",
    },
  ];

  return (
    <div>
      <div style={{
        width: "85%",
        margin: "5vh auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1vw",
      }}>
        {projects.map((project) => (
          <ProjCard
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
            style={{ width: "27vw" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;