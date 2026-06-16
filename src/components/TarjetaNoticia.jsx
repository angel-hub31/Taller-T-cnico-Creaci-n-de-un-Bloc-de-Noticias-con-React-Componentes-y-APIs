import './TarjetaNoticia.css';

function TarjetaNoticia({ info }) {
    return (
        <div className="card">
            <h3>{info.title}</h3>
            <p>{info.body}</p>
            <button>Leer más</button>
        </div>
    );
}

export default TarjetaNoticia;