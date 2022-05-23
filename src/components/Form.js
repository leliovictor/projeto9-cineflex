import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Form({ form, setForm, filmInfo }) {

  const navigate = useNavigate();

  function handleForm(e) {
    
    const object = {...form.compradores[e.target.id], [(e.target.name)] : e.target.value};
    
    let objectArr = [...form.compradores];

    objectArr[e.target.id] = object;

    setForm({
      ...form,
      compradores:objectArr,
    });
  }

  function nextScreen(e) {
    e.preventDefault();

    if (form.ids.length === 0) return alert("Escolha seu(s) assento(s)");

    for(let i = 0; i < form.compradores.length;i++) {
      if(form.compradores[i].cpf.length !== 11) return alert(`CPF do(a) ${form.compradores[i].nome} inválido, digite apenas os 11 números`);
    }

    sendInformation();
  }

  function sendInformation() {
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      form
    );

    promise.then(() =>
      navigate("/sucesso", {
        state: {
          title: filmInfo.movie.title,
          date: filmInfo.day.date,
          hour: filmInfo.name,
          seats: form.numberSeat,
          people: form.compradores
        },
      })
    );
  }

  return (
    <BuyerInfo onSubmit={nextScreen}>
      {form.ids.map((seat, index) => (
        <React.Fragment key={index}>
          <label>Comprador do assento {form.numberSeat[index]}:</label>
          <input
            id={index}
            type="text"
            onChange={handleForm}
            value={form.compradores[index].nome}
            name="nome"
            placeholder="Digite seu nome..."
            required
          />
          <label>CPF do comprador:</label>
          <input
            id={index}
            type="number"
            onChange={handleForm}
            value={form.compradores[index].cpf}
            name='cpf'
            placeholder="Digite seu CPF..."
            required
          />
        </React.Fragment>
      ))}
      <button type="submit">Reservar assento(s)</button>
    </BuyerInfo>
  );
}

const BuyerInfo = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-bottom: 120px;

  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: #293845;

  input {
    margin-bottom: 7px;
    width: 100%;

    height: 51px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;

    padding: 15px;

    &::placeholder {
      font-style: italic;
      font-size: 18px;
      line-height: 21px;
      padding-left: 14px;

      color: #afafaf;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    width: 225px;
    height: 42px;

    background: #e8833a;
    border-radius: 3px;
    border: none;
    margin: 57px auto 30px auto;

    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
  }
`;
