import styled from "styled-components";
import Perfil from "../../imagens/login.png";
import { Link } from "react-router-dom";

const Login = styled.img`
    width: 35px;
    margin: 0 0 0 130px;
`;

function Icone (){
    return(
        <Link to="/Login">
            <Login src={Perfil}/>
        </Link>
        
    );
}

export default Icone;
