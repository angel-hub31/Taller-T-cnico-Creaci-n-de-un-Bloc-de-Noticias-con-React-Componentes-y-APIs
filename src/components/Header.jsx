import '../index.css';

function Header() {
    return (
        <header className="header">
            <div>
                <h1>📰 Bloc de Noticias</h1>
                <p>Información actualizada desde una API REST</p>
            </div>

            <div className="header-tools">
                <span>Panel de Administración</span>
            </div>
        </header>
    );
}

export default Header;