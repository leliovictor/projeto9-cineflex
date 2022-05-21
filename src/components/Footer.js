import styled from "styled-components";

//No Children entrará na tela 3 o horário e dia escolhido com h1, h2,h3, sei lá;

export default function Footer({ object, children }) {
  return (
    <Content>
      <MoviePoster>
        <img src={object.posterURL} alt={`${object.title} poster`} />
      </MoviePoster>
      <Title>
        <h1>{object.title}</h1>
        <h2>
          {children}
        </h2>
      </Title>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 117px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #dfe6ed;
  border: 1px solid #9eadba;

  display: flex;
  padding: 14px 10px;
`;

const MoviePoster = styled.div`
  width: 64px;
  height: 89px;

  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink:0;
  margin-right: 14px;

  img {
    width: 48px;
    height: 72px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 26px;
  line-height: 30px;

  color: #293845;

  h1 {
    padding-bottom: 8px;
  }
`;
