import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form({form,setForm}) {

  let navigate = useNavigate();
  
  function handleForm (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function nextScreen(e){
    e.preventDefault();

    if(form.ids.length === 0) return alert("Escolha seu(s) assento(s)");

    if(form.CPF.length !== 11) return alert("CPF inválido");

    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",form)

    promise.then(() => navigate("/sucesso", {seila: {name:'lelio'}}));

  }

  return (
    <BuyerInfo onSubmit={nextScreen}>
      <label htmlFor="name">Nome do comprador:</label>
      <input id="name" type="text" onChange={handleForm} value={form.name} name="name" placeholder="Digite seu nome..." required />
      <label htmlFor="CPF">CPF do comprador:</label>
      <input id="CPF" type="number" onChange={handleForm} value={form.CPF} name="CPF" placeholder="Digite seu CPF..." required />
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

  label {
  }

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

    background: #E8833A;
    border-radius: 3px;
    border: none;
    margin: 57px auto 30px auto;

    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
  }
`;
