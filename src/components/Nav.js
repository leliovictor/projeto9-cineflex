import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Fazer um link para Home path=/

export default function Logo() {
    return(
        <Nav >
            <Link to="/">CINEFLEX</Link>
        </Nav>
    );
}

const Nav = styled.div`
    width: 100%;
    height: 67px;
    background: #C3CFD9;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    
    a {
        cursor:pointer;
        text-decoration: none;
        color: #E8833A;
    }

`
