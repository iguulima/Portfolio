import Icons from '../Icons'
import TechCard from '../TechCard'


import './homeTech.css'

const HomeTech = () => {
  const techs = [
    {
      name: "ReactJS",
      description: "Biblioteca JavaScript para construção de interfaces",
      icon: Icons.figma,
      link: "https://www.react.com/",
    },
    {
      name: "JavaScript",
      description: "Linguagem de programação para desenvolvimento web",
      icon: Icons.figma,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      name: "CSS",
      description: "Linguagem de estilo para estilização",
      icon: Icons.figma,
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      name: "Figma",
      description: "Interface de design colaborativa",
      icon: Icons.figma,
      link: "https://www.figma.com/",
    },
    {
      name: "Photoshop",
      description: "Editor de imagens",
      icon: Icons.figma,
      link: "https://www.adobe.com/br/products/photoshop/landpa.html?sdid=29NMCFXM&mv=search&mv2=paidsearch&ef_id=CjwKCAjwtdi_BhACEiwA97y8BFcfuGKGlaEZReTx7zqyPgZ8vPbMm8kzKMW-E9BFxtI0K918qybAuRoCAgEQAvD_BwE:G:s&s_kwcid=AL!3085!3!717645643664!e!!g!!photoshop!188192502!10077842982&gad_source=1&gclid=CjwKCAjwtdi_BhACEiwA97y8BFcfuGKGlaEZReTx7zqyPgZ8vPbMm8kzKMW-E9BFxtI0K918qybAuRoCAgEQAvD_BwE",
    },
    {
      name: "Git",
      description: "Sistema de controle de versão",
      icon: Icons.figma,
      link: "https://git-scm.com",
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
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default HomeTech