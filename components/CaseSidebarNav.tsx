"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Visão geral" },
  { id: "problema", label: "Problema" },
  { id: "solucao", label: "Solução" },
  { id: "processo", label: "Processo" },
  { id: "ferramentas", label: "Ferramentas" },
];

export default function CaseSidebarNav({ title, year }: { title: string; year: string }) {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const documentRoot = document.querySelector(".caseDocument");
    documentRoot?.classList.add("caseAnimations");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inView");
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: "0px 0px -20%", threshold: .08 });
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="caseSidebar">
      <span className="caseSidebarLabel">Case study · {year}</span>
      <h2>{title}</h2>
      <nav aria-label="Seções do case">
        {sections.map((section) => <button className={active === section.id ? "active" : ""} key={section.id} onClick={() => goTo(section.id)}>{section.label}</button>)}
      </nav>
    </aside>
  );
}
