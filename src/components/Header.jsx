import '../assets/styles/Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" />
                <ul className="menu">
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                </ul>
            </div>        
        </>
    )
}

export default Header