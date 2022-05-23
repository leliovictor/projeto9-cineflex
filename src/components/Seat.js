import styled from "styled-components";
import {useState} from 'react';

export default function Seat({setSelectSeat, object, selectSeat, children, form, setForm}) {

    const [select, setSelect] = useState(false);

    function chooseSeat(obj) {
      if(!obj.isAvailable) return alert("Esse assento não está disponível");
      
      if(!select) addSeat(obj);

      if(select) removeSeat(obj);

      setSelect(!select);
    }

    function addSeat(obj) {
      setForm({
        ...form,
        'ids':[...form.ids,obj.id],
        'numberSeat':[...form.numberSeat,obj.name]
      })
    }

    function removeSeat(obj) {
      setForm({
        ...form,
        'ids':[...form.ids].filter(item => item !== obj.id),
        'numberSeat':[...form.numberSeat].filter(item => item !== obj.name)
      })
    }

    return(
        <Chair tone={object.isAvailable} select={select} onClick={() => chooseSeat(object)}>{children}</Chair>
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