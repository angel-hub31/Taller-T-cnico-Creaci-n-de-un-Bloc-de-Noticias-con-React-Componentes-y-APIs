import './Header.css';
function Header() {
    return (
        <header className="header">
            <h1>Bloc de Noticias</h1>
            <nav>
                <button>Inicio</button>
                <button>Categorías</button>
            </nav>
        </header>
    );
}

export default Header;