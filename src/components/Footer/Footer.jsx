import Icons from '../Icons'

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <img src={Icons.igor} alt="Logo do Igor"/>
        <div>
            <div>© 2025 Portfólio. Todos os direitos reservados.</div>
            <div>Feito por Igor Lima 😎</div>
        </div>
    </footer>
  )
}

export default Footer