import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MovieSesson() {

    const { sessionId } = useParams();

    const [seats,setSeats] = useState([]);
    const [footer, setFooter] = useState({});


    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`);

        promise.then((object) => {organizeObject(object)});



    },[]);

    function organizeObject(object) {
        setSeats(object.data.seats);
        setFooter(object.data);
    }

    console.log(seats);


    return(
        <h1>teste {sessionId}</h1>
    );
}