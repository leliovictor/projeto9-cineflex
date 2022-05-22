import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";

//Colocar Link com a Tela 3! Rever comentário no footer

export default function Movie() {
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
    promise.catch((Error) => alert("Request API error" + Error));
  }, []);

  function organizeObject(object) {
    setSession(object.data.days);
    setFooter(object.data);
  }

  return (
    <>
      <H1>Selecione o horário</H1>
      <section>
      {session.map((objectArr, index) => (
        <Session key={index}>
          <h2>
            {objectArr.weekday} - {objectArr.date}
          </h2>
          <Div>
            {objectArr.showtimes.map((object, index) => (
              <Link to={`/assentos/${object.id}`} key={index}>
                <Hour>{object.name}</Hour>
              </Link>
            ))}
          </Div>
        </Session>
      ))}
      </section>
      <Footer posterURL={footer.posterURL} title={footer.title} />
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

  :last-child {
    margin-bottom: 120px;
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
