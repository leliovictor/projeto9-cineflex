import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Nav() {

    const navigate = useNavigate();

    let hide = true;

    function navigatePage() {
        
        const windowURL = window.location.href;
        
        if(windowURL[windowURL.length-1] !== "/") hide = false;
    }
    
    navigatePage();
    
    return(
        <Logo>
            <Link to="/">CINEFLEX</Link>
            <Undo onClick={()=> navigate(-1)} hide={hide}>
                <ion-icon name="arrow-undo-outline"></ion-icon>
            </Undo>
        </Logo>
    );
}

const Logo = styled.div`
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
    position: relative;
    
    a {
        cursor:pointer;
        text-decoration: none;
        color: #E8833A;
    }

`

const Undo = styled.div`
    position: absolute;
    bottom: 10px;
    left: 5px;
    color: #E8833A;
    display: ${props => props.hide ? 'none' : 'initial'}
`
