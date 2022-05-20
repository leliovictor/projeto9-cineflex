import styled from 'styled-components';

export default function Logo() {
    return(
        <Nav >
            <h1>CINEFLEX</h1>
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

    color: #E8833A;
`
