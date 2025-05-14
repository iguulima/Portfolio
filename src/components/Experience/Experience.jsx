import { useState } from 'react';

import './experience.css';

function Experience() {
  const [experience, setExperience] = useState(1);

  const estiloBtn = (botaoAtivo) => ({
    backgroundColor: botaoAtivo ? '#f8f8ff' : 'transparent',
    color: botaoAtivo ? '#000000' : '#fff',
    cursor: 'pointer',
  });

  return (
    <div className="exp-main">
      <h2>Experiencia</h2>
      <h5 className="exp-subtitle">
        Minha trajetória acadêmica e profissional, destacando experiências e habilidades adquiridas.
      </h5>
      <div className="exp-btn">
        <button
          className="btn" style={{ ...estiloBtn(experience === 1), borderRadius: '1rem 1rem 1rem 0' }} onClick={() => setExperience(1)}
        >
          Profissional
        </button>
        <button
          className="btn"
          style={{ ...estiloBtn(experience === 2), borderRadius: '1rem 1rem 0 1rem' }}
          onClick={() => setExperience(2)}
        >
          Educacional
        </button>
      </div>

      {/* ParticlesComponent moved inside exp-content */}
      <div className="exp-content">
        {experience === 1 ? (
          <div className="exp-cards">
            <div className="exp-scontent">
              <h3>AUTOMASOFT INFORMATICA</h3>
              <h5>Assistente Administrativo ( Set. 2024 - Jan. 2025 )</h5>
              <ul>
                <li>Processamento de faturas</li>
                <li>Acompanhamento de Ordem de Serviços</li>
                <li>Administrava entrada e saidas de notas fiscais</li>
              </ul>

              <h5>Suporte Tecnico ( Jun. 2024 - Set. 2024 )</h5>
              <ul>
                <li>Prestava suporte para clientes relacionado ao sistema da empresa e outros</li>
                <li>Auxiliava na instalacao e atualizacao de programas diversos</li>
                <li>Administrava entrada e saída de notas fiscais</li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div className="exp-scontent">
              <h3>FATEC CATANDUVA</h3>
              <h5>Gestão de Tecnologia da Informação ( 2023 - 2025 )</h5>
              <ul>
                <li>
                  <span>Fundamentos de TI</span> – Arquitetura, sistemas operacionais, lógica de programação
                </li>
                <li>
                  <span>Desenvolvimento de Sistemas</span> – Programação, bancos de dados, web
                </li>
                <li>
                  <span>Infraestrutura e Redes</span> – Administração de redes, computação em nuvem, servidores
                </li>
                <li>
                  <span>Metodologias Ágeis</span> – Scrum, Kanban, PMBOK, ITIL.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;