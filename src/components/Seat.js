import styled from "styled-components";
import {useState} from 'react';

export default function Seat({setSelectSeat, object, selectSeat, children}) {

    const [select, setSelect] = useState(false);
 
    //Fazer a ligação do click com selectSeat
    //Mudar o onclick para chamar uma função, criar ela, para salvar a cadeira e mudar o select
    return(
        <Chair tone={object.isAvailable} select={select} onClick={() => setSelect(!select)}>{children}</Chair>
    );
}


const Chair = styled.div`
  width: 26px;
  height: 26px;

  background: ${props => props.tone ? (props.select ? "#8DD7CF" : "#C3CFD9") : "#FBE192" };
  border: 1px solid ${props => props.tone ? (props.select ? "#45BDB0" : "#808F9D") : "#F7C52B" };
  border-radius: 12px;

  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;

  margin-right: 7px;
  margin-bottom: 18px;
  color: #000000;

  :nth-child(10n + 10) {
    margin-right: 0;
  }
`;