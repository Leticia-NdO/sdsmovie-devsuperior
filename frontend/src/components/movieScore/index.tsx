import axios from "axios"
import MovieStars from "components/movieStars"
import { useEffect } from "react"
import './styles.css'

type Props = {
    score: number,
    count: number
}

function MovieScore({score, count}: Props) {

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>   {/* se a nota for maior que zero, vai mostrar o score arredondado com uma casa decimal. Senão, mostra só m tracinho */}
            <MovieStars score={score}/>  {/* um component que contém outro component */}
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore