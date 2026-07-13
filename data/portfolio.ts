export type Project = {
  id: string;
  title: string;
  year: string;
  tags: string[];
  gradient: string;
  variant: "timer" | "polaroid" | "chart";
  description: string;
  challenge: string;
  solution: string;
  contributions: string[];
  tools: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "pulse",
    title: "Pulse Focus",
    year: "2025",
    tags: ["Mobile", "Gamificação"],
    gradient: "linear-gradient(135deg,#232b52,#141a33)",
    variant: "timer",
    description: "Aplicativo de produtividade com timer pomodoro gamificado, sistema de níveis, streaks e acompanhamento de foco.",
    challenge: "Apps de pomodoro tradicionais são abandonados rapidamente. O desafio era transformar sessões de foco em um hábito prazeroso.",
    solution: "Uma camada de gamificação sobre uma experiência de foco minimalista, com XP, streaks e conquistas.",
    contributions: ["Pesquisa e benchmark", "Fluxos e wireframes", "Interface e protótipo", "Testes de usabilidade"],
    tools: ["Figma", "FigJam", "Protopie"],
    links: [{ label: "Ver protótipo", url: "#" }, { label: "Repositório", url: "#" }],
  },
  {
    id: "polaroid",
    title: "Polaroid Studio",
    year: "2025",
    tags: ["Mobile", "Edição"],
    gradient: "linear-gradient(135deg,#3a2e45,#141a33)",
    variant: "polaroid",
    description: "Aplicativo de criação de polaroids digitais com edição de fotos, textos personalizados e templates visuais.",
    challenge: "Editores tradicionais têm uma curva de aprendizado alta para quem busca um resultado estético rápido.",
    solution: "Um fluxo simples de foto, template e texto, com preview em tempo real e ajustes opcionais.",
    contributions: ["Benchmark e moodboard", "Arquitetura do fluxo", "Biblioteca de templates", "Protótipo de alta fidelidade"],
    tools: ["Figma", "Photoshop"],
    links: [{ label: "Ver no Figma", url: "#" }],
  },
  {
    id: "soundscope",
    title: "SoundScope",
    year: "2025",
    tags: ["Dashboard", "Data Viz"],
    gradient: "linear-gradient(135deg,#1e3140,#141a33)",
    variant: "chart",
    description: "Dashboard de analytics musicais com gráficos semanais, ranking de gêneros e acompanhamento de hábitos musicais.",
    challenge: "Dados de streaming são abundantes, mas dispersos e difíceis de interpretar sem contexto.",
    solution: "Um dashboard com resumo semanal, tendências e rankings organizados por perguntas do usuário.",
    contributions: ["Definição das perguntas-chave", "Sistema de data visualization", "Dashboard responsivo", "Handoff documentado"],
    tools: ["Figma", "FigJam"],
    links: [{ label: "Ver projeto", url: "#" }, { label: "Repositório", url: "#" }],
  },
];

export const experience = {
  professional: [
    {
      title: "Analista de Requisitos",
      year: "2025",
      period: "Set. 2025 – Atual",
      place: "Integrativa Tecnologia",
      highlights: [
        "Especificação de requisitos funcionais e regras de negócio para evolução de sistemas corporativos.",
        "Prototipação de interfaces e fluxos de usuário no Figma para validação de soluções junto aos stakeholders.",
        "Organização de componentes reutilizáveis e padronização visual das interfaces, contribuindo para maior consistência entre funcionalidades.",
        "Elaboração de documentação funcional e apoio à comunicação entre áreas de negócio e desenvolvimento.",
        "Suporte à equipe de desenvolvimento durante a implementação e homologação das funcionalidades.",
      ],
      tags: ["Requisitos", "UX/UI Design", "Figma", "Design System", "IA generativa"],
    },
    {
      title: "Estagiário de Suporte Técnico e Assistente Administrativo",
      year: "2024",
      period: "Jun. 2024 – Jan. 2025",
      place: "Automasoft",
      highlights: [
        "Suporte técnico aos usuários, auxiliando na resolução de demandas e incidentes operacionais.",
        "Atendimento às rotinas administrativas, incluindo processamento e conferência de documentos fiscais.",
        "Consultas e manipulação de dados em banco Firebird para apoio aos processos internos.",
        "Acompanhamento de Ordens de Serviço e controle das atividades operacionais.",
        "Suporte às rotinas administrativas, contribuindo para a organização e continuidade dos processos.",
      ],
      tags: ["Suporte técnico", "Firebird", "Documentos fiscais", "Processos"],
    },
  ],
  academic: [
    {
      title: "Gestão da Tecnologia da Informação",
      year: "2023",
      period: "2023 – 2025",
      place: "Fatec Catanduva",
      highlights: [
        "Formação em desenvolvimento de sistemas, bancos de dados e infraestrutura.",
        "Estudos em metodologias ágeis e gestão de serviços de TI.",
      ],
      tags: ["Tecnologia", "Desenvolvimento", "Gestão de TI"],
    },
  ],
};
