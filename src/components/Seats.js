import styled from "styled-components";
import {useState} from "react";
import Seat from "./Seat";
import SeatInfo from "./SeatInfo";

export default function Seats({ objectArr }) {

  //Fazer o Form, e ver como salvar as informações para tela 4;

  const [selectSeat, setSelectSeat] = useState([]);
  
  return (
    <AllSeats>
      {objectArr.map((object, index) => (
        <Seat key={index} selectSeat={selectSeat} setSelectSeat={setSelectSeat} object={object}>{object.name}</Seat>
      ))}
      <SeatInfo />
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
