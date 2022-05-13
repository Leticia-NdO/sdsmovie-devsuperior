// cria-se duas pastas, components e pages, pra diferenciar os componentes que são pedaços do site dos que são rotas.
import axios from "axios";
import MovieCard from "components/movieCard";
import Pagination from "components/pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then(response => {
        console.log(response.data)
    })


    return (
        <>  {/* a função que é um componente react só pode exportar um componente, mas é ó colocar entre uma div ou um fragmente que ele aceita */}
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