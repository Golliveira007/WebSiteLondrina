import styled from "styled-components";
import Logo from "../Logo/logo";
const AppFooter = styled.header`
    background-color: #E0FFFF;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const TextoFooter = styled.h1`
    color: black;
    text-align: center;
    margin: 0;
`;

function Footer(){
    return(

        <AppFooter>
            <Logo margem="0 0 0 0"/>
            <TextoFooter>Londrina Explorers</TextoFooter>
        </AppFooter>
        
    );
}

export default Footer;