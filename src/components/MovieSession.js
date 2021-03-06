import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Seats from "./Seats";
import Form from "./Form";
import Footer from "./Footer";

export default function MovieSesson() {
  const { sessionId } = useParams();

  const [seats, setSeats] = useState([]);
  const [footer, setFooter] = useState({movie:'',day:''});
  
  const [form, setForm] = useState({
    ids:[],
    compradores:[],
    numberSeat:[]
  });

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`
    );

    promise.then((object) => {
      organizeObject(object);
    });
  }, [sessionId]);

  function organizeObject(object) {
    setSeats(object.data.seats);
    setFooter(object.data);
  }

  return (
    <>
      <H1>Selecione o(s) assento(s)</H1>
      <Seats objectArr={seats} form={form} setForm={setForm}/>
      <Form form={form} setForm={setForm} filmInfo={footer} />
      <Footer posterURL={footer.movie.posterURL} title ={footer.movie.title}>{`${footer.day.weekday} - ${footer.name}`}</Footer>
    </>
  );
}

const H1 = styled.h1`
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
  width: 100%;
  height: 110px;
  color: #293845;
`;

