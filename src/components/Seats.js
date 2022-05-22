import styled from "styled-components";
import {useState} from "react";
import Seat from "./Seat";

export default function Seats({ objectArr }) {

  const [selectSeat, setSelectSeat] = useState([]);
  
    function backgroundSelect(item) {
        return ['red','red'];
    //fazer 3 condicionais, false, true (partir do isavalible) e passando o selected
        //Fazer um componente aberto para Seat pode resolver! 
    }

  return (
    <AllSeats>
      {objectArr.map((object, index) => (
        <Seat key={index} selectSeat={selectSeat} setSelectSeat={setSelectSeat} object={object}>{object.name}</Seat>
      ))}
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
    </AllSeats>
  );
}



const AllSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -12px;
  padding: 0 24px;
  margin-bottom: 41px;
`;

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
