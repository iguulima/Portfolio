import { Link } from "react-router-dom";

import "../styles/homeProjects.css";
import "../styles/projects.css";

import tgImg from "../assets/images/tg.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SD Locacoes",
      description: "Sistema mobile feito para automatizar o sistema de locacoes da usina",
      tags: ["React Native", "Expo",],
      image: tgImg,
      link: "/proj/alocacaoSD",
    },
    {
      id: 2,
      title: "Outro Projeto",
      description: "Descrição de outro projeto",
      tags: ["React", "Node.js"],
      image: tgImg,
      link: "/proj/outroProjeto",
    },
  ];

  return (
    <div>
      <div className="cards">
        {projects.map((project) => (
          <Link to={project.link} className="cardProj" key={project.id}>
          <img src={project.image} alt={`Imagem do projeto ${project.title}`} className="card-img" />
            <div className="card-text">
              <h4>{project.title}</h4>
              <h5>{project.description}</h5>
              <div className="card-tags">
                {project.tags.map((tag, index) => (
                  <h6 key={index}>{tag}</h6>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;