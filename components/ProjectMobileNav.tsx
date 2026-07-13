"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectMobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`projectMobileHeader mobileMenuDisabled ${open ? "menuActive" : ""}`}>
      <div className={`nav ${open ? "menuOpen" : ""}`}>
        <Link className="projectMobileBack" href="/#projetos"><span>←</span> Voltar</Link>
        <button className="menuBackdrop" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} />
        <button className="menuToggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}><span/><span/><span/></button>
        <nav className="navLinks" aria-label="Navegação principal">
          <Link href="/" onClick={() => setOpen(false)}>INÍCIO</Link>
          <Link href="/#projetos" onClick={() => setOpen(false)}>PROJETOS</Link>
          <Link href="/#experiencia" onClick={() => setOpen(false)}>EXPERIÊNCIA</Link>
          <Link href="/#contato" onClick={() => setOpen(false)}>CONTATO</Link>
        </nav>
      </div>
    </header>
  );
}
