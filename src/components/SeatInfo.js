import styled from "styled-components";

export default function SeatInfo() {
  return (
    <Example>
      <div>
        <Selected></Selected>
        <Info>Selecionado</Info>
      </div>
      <div>
        <Available></Available>
        <Info>Disponível</Info>
      </div>
      <div>
        <NoAvailable></NoAvailable>
        <Info>Indisponível</Info>
      </div>
    </Example>
  );
}

const Example = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;


  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const examples = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
`;

const Selected = styled(examples)`
  background: #8dd7cf;
  border: 1px solid #1aae9e;
`;

const Info = styled.p`
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  letter-spacing: -0.013em;
  padding-top: 5px;
  color: #4e5a65;
`;

const Available = styled(examples)`
  background: #c3cfd9;
  border: 1px solid #7b8b99;
`;

const NoAvailable = styled(examples)`
  background: #fbe192;
  border: 1px solid #f7c52b;
`;
