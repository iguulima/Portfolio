import ProjCard from "../components/ProjCard";
import "../components/HomeProjects/homeProjects.css";
import "../pages/projects.css";

import tgImg from "../assets/images/tg.png";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Projeto teste",
      description: "teste foda",
      tags: ["React", "Teste"],
      image: tgImg,
      link: "/proj/usd",
    },
    {
      id: "2",
      title: "Outro projeto",
      description: "descrição exemplo",
      tags: ["JavaScript", "CSS"],
      image: tgImg,
      link: "/proj/abc",
    },
    {
      id: "3",
      title: "Mais um projeto",
      description: "descrição teste",
      tags: ["HTML", "Node.js"],
      image: tgImg,
      link: "/proj/xyz",
    },
  ];

  return (
    <div>
      <div className="cards">
        {projects.map((project) => (
          <ProjCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;