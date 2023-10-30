import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src='/imagens/fb.png' alt='fb'/>
                        </a>
                    </li>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src='/imagens/ig.png' alt='ig'/>
                        </a>
                    </li>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src='/imagens/tw.png' alt='tw'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Footer;