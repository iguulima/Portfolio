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
  },
];

export const experience = {
  professional: {
    title: "Suporte Técnico e Assistente Administrativo",
    period: "Jun. 2024 – Jan. 2025",
    place: "Automasoft",
    description: "Prestei suporte para clientes, auxiliando na instalação e atualização de programas. Também acompanhei ordens de serviço e processos administrativos.",
    tags: ["Suporte ao cliente", "Processos", "Sistemas ERP"],
  },
  academic: {
    title: "Gestão da Tecnologia da Informação",
    period: "2023 – 2025",
    place: "Fatec Catanduva",
    description: "Formação em tecnologia, desenvolvimento de sistemas, bancos de dados, infraestrutura, metodologias ágeis e gestão de serviços de TI.",
    tags: ["Tecnologia", "Desenvolvimento", "Gestão de TI"],
  },
};
