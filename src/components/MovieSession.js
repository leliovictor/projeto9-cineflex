import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";

//Colocar Link com a Tela 3! Rever comentário no footer

export default function MovieSession() {
  const { movieId } = useParams();

  const [session, setSession] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`
    );

    promise.then((object) => {
      organizeObject(object);
    });
    promise.catch(() => alert("Deu Ruim"));
  }, []);

  function organizeObject(object) {
    setSession(object.data.days);
    setFooter(object.data);
  }

  return (
    <>
      <H1>Selecione o horário</H1>
      {session.map((objectArr, index) => (
        <Session key={index}>
          <h2>
            {objectArr.weekday}- {objectArr.date}
          </h2>
          <Div>
            {objectArr.showtimes.map((object, index) => (
              <Hour key={index}>{object.name}</Hour>
            ))}
          </Div>
        </Session>
      ))}
      <Footer object={footer} />
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
`;

const Session = styled.div`
  padding: 0 24px;

  h2 {
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    padding-bottom: 22px;

    color: #293845;
  }
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 8px;
`;

const Hour = styled.div`
  width: 83px;
  height: 43px;
  margin-right: 8px;
  margin-bottom: 23px;

  background: #e8833a;
  border-radius: 3px;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;

  color: #ffffff;
`;
