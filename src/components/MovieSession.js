import { useParams } from 'react-router-dom';


export default function MovieSession() {

    const { movieId } = useParams();

    return(
        <h1>testeee {movieId} </h1>
    );
}