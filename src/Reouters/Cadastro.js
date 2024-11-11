import Header from "../Componentes/Header/header";
import styled from "styled-components";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import Footer from "../Componentes/Footer";
import { Link } from "react-router-dom";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";

const TextPadrao = styled.p`
    color: black;
    font: normal, Arial;
    font-size: 20px;
`;

const Inputcadastro = styled.input`
    border: solid;
    border-radius: 5px;
    font-size:20px;
`;

const BotaoPadrao = styled.button`
    border: solid 1px;
    border-radius: 5px;
    font-size: 30px;
    background-color: #EB9B00;
    color: #FFF;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const LinkSdecoracao = styled(Link)`
    text-decoration: none;
    color: ${props => props.cor || "blue"};

    &:hover {
        cursor: pointer;
    }
`

function Casdastro (){
    return(
        <AppPadrão>
            <Header/>
            <LealtContainer tamanho="100px">
                <TituloPadrao tamanho="100px">Realize seu cadastro!</TituloPadrao>
            </LealtContainer>

            <LealtPaginas>
                
                <SubTitulo tamanho="50px">Casdastre-se</SubTitulo>

                <TextPadrao>EMAIL</TextPadrao>
                <Inputcadastro type="text"></Inputcadastro>

                <TextPadrao>CPF</TextPadrao>
                <Inputcadastro type="text"></Inputcadastro>

                <TextPadrao>SENHA</TextPadrao>
                <Inputcadastro type="text"></Inputcadastro>

                <TextPadrao>CONFIRME SUA  SENHA</TextPadrao>
                <Inputcadastro type="text"></Inputcadastro>

                <BotaoPadrao><LinkSdecoracao to="/Login" cor="#FFF">Enviar</LinkSdecoracao></BotaoPadrao>

            </LealtPaginas>

            <Footer/>
        </AppPadrão>
    
    );
};

export default Casdastro;