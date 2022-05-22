import styled from "styled-components";

export default function Form() {
  return (
    <BuyerInfo>
      <label htmlFor="name">Nome do comprador:</label>
      <input id="name" type="text" placeholder="Digite seu nome..." required />
      <label htmlFor="CPF">CPF do comprador:</label>
      <input id="CPF" type="number" placeholder="Digite seu CPF..." required />
      <button>Reservar assento(s)</button>
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
      padding-left: 18px;

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
