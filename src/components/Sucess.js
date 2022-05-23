import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucess() {
  const location = useLocation();

  const numbers = location.state.seats.sort((a, b) => a - b);

  function styleCPF(numberString) {
    let arr = numberString.split("");
    arr.splice(9, 0, "-");
    arr.splice(6, 0, ".");
    arr.splice(3, 0, ".");
    return arr.join("");
  }

  return (
    <Section>
      <h1>
        Pedido feito
        <br />
        com sucesso!
      </h1>
      <h2>Filme e sessão</h2>
      <div>
        <p>{location.state.title}</p>
        <p>{`${location.state.date} - ${location.state.hour}`}</p>
      </div>
      <h2>Ingressos</h2>
      <div>
        {numbers.map((number, index) => (
          <p key={index}>Assento {number}</p>
        ))}
      </div>
      <h2>Compradores</h2>
      {location.state.people.map((person, index) => (
        <div key={index}>
          <p>Nome: {person.nome}</p>
          <p>CPF: {styleCPF(person.cpf)}</p>
        </div>
      ))}
      <Link to={"/"}>
        <Button>Voltar pra Home</Button>
      </Link>
    </Section>
  );
}

const Section = styled.section`
  padding: 0 24px;

  h1 {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;

    color: #247a6b;
  }

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    margin-top: 50px;

    color: #293845;
  }

  p {
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    margin-bottom: 5px;

    color: #293845;
  }

  h1 + h2 {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  width: 225px;
  height: 42px;
  margin: 75px auto 75px auto;

  background: #e8833a;
  border-radius: 3px;
  border: none;

  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: #ffffff;
`;
