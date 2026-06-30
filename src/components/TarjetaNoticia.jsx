import '../index.css';


function TarjetaNoticia({info}) {


    const leerMas = () => {

        alert(
            `Leyendo noticia:\n\n${info.title}`
        );

    }



    return (

        <article className="card">


            <h3>
                {info.title}
            </h3>


            <p>
                {info.body}
            </p>



            <button onClick={leerMas}>
                Leer más
            </button>



        </article>

    );

}


export default TarjetaNoticia;