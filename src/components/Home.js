import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(objectArr => {
			setMovies(objectArr.data);
		});
	}, []);

    return(
        <>
            <H1>Selecione o filme</H1>
            <Content>
                {movies.map((object, index)=> 
                <Link to={`/filme/${object.id}`} key={index}>
                    <img src={object.posterURL} alt={`${object.title} poster`} />
                </Link>
                )}
            </Content>
        </>
    );

}

const H1 = styled.h1`
font-size: 24px;
line-height: 28px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
letter-spacing: 0.04em;

width: 100%;
height: 110px;
color: #293845;
`

const Content = styled.div`
    width: 100%;
    padding: 0 38px; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
        width: 129px;
        height: 193px;
        margin-bottom: 19px;
    }
`