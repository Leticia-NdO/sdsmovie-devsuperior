import MovieScore from "components/movieScore"
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}

function MovieCard({ movie }: Props) {  // Props podem ser entendidas como argumentos do componente React. Aqui, e estabeleço que o MovieCard precisa de um parâmetro do tipo Movie.

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />    {/* ele já está estilizado porque estámos usando classes do Form, e como o CSS é global, uma vez importado ele está disponível em qualquer lugar. */}
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score}/>

                <Link to={`form/${movie.id}`} >   {/* uma propriedade do react router dom que permite fácil linkagem dos elementos */}
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard