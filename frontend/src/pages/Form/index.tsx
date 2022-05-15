import FormCard from 'components/formCard';
import { useParams } from 'react-router-dom';




function Form() {


    const params = useParams() // para pegar os params 

    return (
       <FormCard movieId={`${params.movieId}`}/>

    )
}

export default Form