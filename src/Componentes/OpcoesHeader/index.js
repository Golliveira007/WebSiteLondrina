import styled from "styled-components";
import { Link } from "react-router-dom";


const LinkStilizado = styled(Link)`
    text-decoration: none;
    color: black;
`



const Opcoes = styled.div`
    display: flex;
`;

const Opcao = styled.p`
    margin: 0 0 0 20px;
    cursor: pointer;
    
`;

const textoOpcoes = [
    
    <LinkStilizado to="/Home">Home</LinkStilizado>,
    <LinkStilizado to="/Turismo">Turismo</LinkStilizado>,  
    <LinkStilizado to="/Gastronomia">Gastronomia</LinkStilizado>,
    <LinkStilizado to="/Eventos">Eventos</LinkStilizado>,   
     
]



function OpcoesHeader (){
    return(
        <nav>
            <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Opcao>{texto}</Opcao>
            ))}
            </Opcoes>
        </nav>
        
        
    )

}

export default OpcoesHeader;