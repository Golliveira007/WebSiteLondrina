import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import Igapo from "../imagens/Barragem.jpg";
import Footer from "../Componentes/Footer";

const ConteudosPadrao = styled.div`
    background-color:#EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

function Barragem (){
    return(
        <AppPadrão>
            
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Lago Igapó: O Cartão-Postal de Londrina para Relaxar e Se Divertir</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    
                <SubTitulo>
                    O Lago Igapó é um dos pontos mais icônicos de Londrina e um verdadeiro paraíso para quem gosta de relaxar ao ar livre. Com suas margens cercadas por áreas verdes, ciclovias e trilhas, o Igapó é perfeito para quem quer caminhar, correr, andar de bicicleta ou até fazer um piquenique com uma vista incrível. E para os fãs de esportes aquáticos, o lago também oferece áreas para a prática de stand-up paddle e caiaque!
                    Dividido em várias áreas — como o Igapó I, II e III — cada uma oferece algo especial. O Parque do Lago Igapó, por exemplo, conta com uma pista de caminhada e uma fonte luminosa que ilumina a noite, criando um clima bem charmoso. O pôr do sol por lá é um espetáculo à parte e rende fotos maravilhosas.
                    
                </SubTitulo>

                <ImgPadrao src={Igapo}/>

                <Descricao>Endereço: O Lago Igapó se estende pela região central e sul da cidade, sendo facilmente acessado pela Av. Higienópolis e pela Av. Ayrton Senna.</Descricao>
                    
                </LealtPaginas>
            </ConteudosPadrao>
            
            <Footer/>
        </AppPadrão>
        
        
    )
}

export default Barragem;