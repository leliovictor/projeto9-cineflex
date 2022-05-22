import styled from "styled-components";
import {useState} from 'react';

export default function Seat({setSelectSeat, object, selectSeat, children}) {

    const [alreadySelect, setAlreadySelect] = useState(false);
    const [color, setColor] = useState(object.isAvailable);

    function chooseSeat(obj) {
        if(obj.isAvailable && !alreadySelect) {
            setSelectSeat([...selectSeat,obj.name]);
            setColor(['#8DD7CF','#45BDB0']);
            setAlreadySelect(true);
        }

        if(obj.isAvailable && alreadySelect) {
            setColor(['#C3CFD9','#808F9D']);
            setAlreadySelect(false);
        }
    }

    function colorSeat(str) {
        if(str === true) return ['#C3CFD9','#808F9D'];
        if(str === false) return ['#FBE192','#F7C52B'];
        return color;
    }

    const okok = '#C3CFD9';

    return(
        <Chair color={colorSeat(color)} onClick={()=>chooseSeat(object)}>{children}</Chair>
    );
}


const Chair = styled.div`
  width: 26px;
  height: 26px;

  background: ${props => okok};
  border: 1px solid ${props => props.color[1]};
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