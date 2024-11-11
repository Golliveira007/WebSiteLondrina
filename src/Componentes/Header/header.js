import styled from "styled-components";
import Logo from "../Logo/logo";
import OpcoesHeader from "../OpcoesHeader";
import Icone from "../Icone";

const AppHeader = styled.header`
    background-color: #E0FFFF;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;    
`

function Header() {
    return(
        <AppHeader>
            <Logo/>
            <OpcoesHeader/>
            <Icone/>
        </AppHeader>
    )
}

export default Header;