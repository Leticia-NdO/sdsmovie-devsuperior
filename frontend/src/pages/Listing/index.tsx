// cria-se duas pastas, components e pages, pra diferenciar os componentes que são pedaços do site dos que são rotas.
import axios from "axios";
import MovieCard from "components/movieCard";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0)   // useState serve para armazenar estados dentro do componente. O primeiro item da lista é a variável e o segundo é a função que serve para manipular essa variável. O primeira parâmetro de useState é o valor da variável

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`).then(response => {
            const data = response.data as MoviePage;
            console.log(data)
            setPageNumber(data.number);
        })
    }, [])  // o useEffect xecuta algo na instanciação ou destruição do componente e observa estado. Ele recebe dois parâmetros, uma função e uma lista de objetos que vai observar. Sempre que um desses objetos sofrer uma alteração, ele vai executar a função. Se a lista estiver vazia ele só executa a função quando o componente for carregado.

    // FORMA ERRADA



    return (
        <>  {/* a função que é um componente react só pode exportar um componente, mas é ó colocar entre uma div ou um fragmente que ele aceita */}
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">  {/* o grid system do bootstrap divide a tela em 12 colunas padrão, ao dizer sm (small) 6, eu digo que essa coluna deve ocupar 6 desses espaços, ou seja, metade da tela. O mb-3 (margin bottom) coloca uma pequena margem abaixo do objeto*/}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">  {/* o grid system do bootstrap divide a tela em 12 colunas padrão, ao dizer sm (small) 6, eu digo que essa coluna deve ocupar 6 desses espaços, ou seja, metade da tela */}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">  {/* o grid system do bootstrap divide a tela em 12 colunas padrão, ao dizer sm (small) 6, eu digo que essa coluna deve ocupar 6 desses espaços, ou seja, metade da tela */}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">  {/* o grid system do bootstrap divide a tela em 12 colunas padrão, ao dizer sm (small) 6, eu digo que essa coluna deve ocupar 6 desses espaços, ou seja, metade da tela */}
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;