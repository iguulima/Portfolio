import Icons from '../Icons'
import TechCard from '../TechCard'


import './homeTech.css'

const HomeTech = () => {
  const techs = [
    {
      name: "ReactJS",
      description: "Biblioteca JavaScript para construção de interfaces",
      icon: Icons.react,
      link: "https://www.react.com/",
      size: 30 ,
    },
    {
      name: "JavaScript",
      description: "Linguagem de programação para desenvolvimento web",
      icon: Icons.js,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      size: 25,
    },
    {
      name: "CSS",
      description: "Linguagem de estilo para estilização",
      icon: Icons.css,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      size: 30,
    },
    {
      name: "Figma",
      description: "Interface de design colaborativa",
      icon: Icons.figma,
      link: "https://www.figma.com/",
      size: 15,
    },
    {
      name: "HTML",
      description: "Linguagem de marcação para estruturação de páginas",
      icon: Icons.html,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      size: 30,
    },
    {
      name: "Git",
      description: "Sistema de controle de versão",
      icon: Icons.git,
      link: "https://git-scm.com",
      size: 30,
    },
  ]
  return (
    <div>
        <div className="homeTech">
          <div className="homeTech-title">
            <h2>Tecnologias</h2>
            <h5>Linguagens e Programas que utilizo regularmente no meu dia a dia</h5>
          </div>
          <div className="homeTech-cards">
            {techs.map((tech) => (
              <TechCard
                name={tech.name}
                description={tech.description}
                icon={tech.icon}
                link={tech.link}
                size={tech.size}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default HomeTech