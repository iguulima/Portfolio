export type Project = {
  id: string;
  title: string;
  year: string;
  tags: string[];
  gradient?: string;
  background?: string;
  image?: string;
  heroImage?: string;
  variant: "timer" | "polaroid" | "chart";
  description: string;
  challenge: string;
  solution: string;
  contributions: string[];
  overview?: string[];
  clientFeatures?: string[];
  providerFeatures?: string[];
  results?: { value: string; label: string }[];
  learnings?: string[];
  tools: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "techsolve",
    title: "TechSolve",
    year: "2025",
    tags: ["Aplicativo mobile", "UX/UI Design"],
    background: "#141a33",
    image: "/techsolve-mockup.png",
    heroImage: "/techsolve-screens-showcase-dark.png",
    variant: "timer",
    description: "Projeto acadêmico interdisciplinar de um marketplace mobile criado para conectar usuários domésticos a profissionais de serviços técnicos e de manutenção.",
    overview: [
      "O TechSolve nasceu da proposta de desenvolver uma ideia original de produto digital. A solução reuniu em uma única experiência a descoberta de profissionais, o contato, o pré-orçamento, a contratação e o acompanhamento do serviço.",
      "O produto foi estruturado para dois perfis de usuário. Clientes buscavam assistência confiável e prestadores utilizavam a plataforma como uma central para encontrar novos clientes e gerenciar seus atendimentos.",
      "A interface reflete uma fase inicial da minha trajetória no Figma. O valor deste case está principalmente na estruturação de um produto extenso, na organização das jornadas e na construção colaborativa de um protótipo de grande escala.",
    ],
    challenge: "Organizar dezenas de funcionalidades e duas jornadas distintas sem perder a compreensão do produto.",
    solution: "Uma experiência de marketplace que acompanha clientes e prestadores desde o primeiro acesso até o pagamento e a avaliação do serviço.",
    clientFeatures: ["Pesquisa e comparação de profissionais", "Perfis, certificações e avaliações", "Chat e recebimento de pré-orçamento", "Pagamentos, cartões, cupons e notificações", "Acompanhamento e avaliação dos serviços"],
    providerFeatures: ["Recebimento de novas solicitações", "Organização dos atendimentos", "Perfil profissional, certificados e portfólio", "Gestão de informações e histórico", "Planos premium, taxas e relatórios"],
    contributions: ["Participação na concepção da ideia e definição das funcionalidades", "Estruturação dos fluxos de clientes e prestadores", "Criação da maior parte das telas e modais no Figma", "Desenvolvimento e conexão do protótipo navegável", "Criação de componentes simples com variantes", "Refinamento contínuo a partir dos feedbacks do grupo e do professor", "Preparação do protótipo para a apresentação acadêmica"],
    results: [{ value: "≈ 80", label: "telas e modais" }, { value: "≈ 20", label: "componentes com variantes" }, { value: "02", label: "perfis de usuário" }, { value: "05", label: "integrantes no grupo" }],
    learnings: ["O projeto foi uma das minhas primeiras experiências criando um produto digital de maior escala. Durante o processo, desenvolvi minha capacidade de organizar funcionalidades, estruturar jornadas para públicos diferentes e transformar uma ideia ampla em uma experiência visualmente compreensível.", "A quantidade de fluxos tornou o projeto maior do que o previsto e exigiu que o grupo acelerasse as etapas finais. Hoje eu abordaria essa complexidade com uma definição de escopo mais rígida, priorização dos fluxos essenciais e validações mais frequentes ao longo do processo."],
    tools: ["Figma", "FigJam"],
    links: [{ label: "Ver protótipo", url: "#" }],
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
