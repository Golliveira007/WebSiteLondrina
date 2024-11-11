import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import Footer from "../Componentes/Footer";
import { Link } from "react-router-dom";

export const InputPadrao = styled.input`
    margin-bottom: ${props => props.margemBaixo || "15px"};
    margin-top: 25px;
    border: solid 1px;
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    justify-content: center;
    width: 250px;
    heigth: 200;
`;

const Botao = styled.button`
    border: solid 1px;
    border-radius: 5px;
    font-size: 30px;
    background-color: #EB9B00;
    color: #FFF;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const LinkSdecoracao = styled(Link)`
    text-decoration: none;
    color: ${props => props.cor || "blue"};

    &:hover {
        cursor: pointer;
    }
`

function Login (){
    return(
        <AppPadrão>

            <Header/>

            <LealtContainer tamanho="50px">
                <TituloPadrao>Login: Usuario!</TituloPadrao>
            </LealtContainer>
            
            <ConteudosPadrao>
                <LealtPaginas>

                    <SubTitulo tamanho="40px">Efetue seu Login!</SubTitulo>

                    <InputPadrao type="text" placeholder="Digite seu email ou Cpf"></InputPadrao>

                    <InputPadrao type="text" placeholder="Digite a sua senha"></InputPadrao>

                    <Botao><LinkSdecoracao to="/Home" cor="#FFF">Entrar</LinkSdecoracao></Botao>

                    <Descricao>Esqueceu a senha? <LinkSdecoracao onClick={ evento => {
                        prompt("Por Favor! Digite o seu email");
                        alert("Voce recebera um Email para recuperar a sua senha. Obrigado!")
                    }}>Clique aqui!</LinkSdecoracao></Descricao>

                    <Descricao>Novo usuario? <LinkSdecoracao to="/cadastro">Clique aqui!</LinkSdecoracao></Descricao>
                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>

        </AppPadrão>
    );
}

export default Login;