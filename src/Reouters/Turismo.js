import Header from "../Componentes/Header/header";
import styled from "styled-components";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { ParagrafoPadrao } from "./componentesEstilizacao/ParagrafoPadrao";
import { Titulo } from "../Componentes/Titulo";
import CardRecomenda from "./CardSugestoes";
import Museu from "../imagens/museo.jpg"
import { Link } from "react-router-dom";
import PracaJapones from "../imagens/pracaJapones.jpg";
import Jardim from "../imagens/jardimBotanico.webp";
import Barragem from "../imagens/Barragem.jpg";
import Footer from "../Componentes/Footer";

const ConteudosPadrao = styled.div`
    background-color:#EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

function Turismo() {
    return(
       
        <AppPadrão>
            
            <Header/>

            <LealtContainer>
                
                <TituloPadrao>Londrina: Uma Surpresa no Sul do Brasil</TituloPadrao>

                <ParagrafoPadrao>Conhecida como a "Pequena Londres", Londrina combina natureza e urbanidade 
                como ninguém! Rodiada por cachoeiras e rios e uma cena cultural 
                vibrante, a cidade é o destino perfeito para quem busca história, lazer e uma boa dose 
                de tranquilidade. Vamos conhecer juntos e se encantar!</ParagrafoPadrao>

            </LealtContainer>

            

            <ConteudosPadrao>
                <Titulo margem="0 0 0 0">Sugestões que vão te deixar amarrado na "Pequena Londres"</Titulo>
                
                <CardRecomenda
                 titulo="Conheça tudo sobre a historia da cidade!  "
                 subTitulo="Museu Histórico de Londrina"      
                 descricao="O Museu Histórico de Londrina é o lugar ideal para quem quer entender um pouco mais sobre a história e o desenvolvimento da cidade e da região. Instalado na antiga estação ferroviária de Londrina, o museu é um charme à parte com sua arquitetura preservada." 
                 img={Museu}
                 link="/Museo" 
                /> 

                <CardRecomenda
                 titulo="Londrina é cultura!"
                 subTitulo="Praça Tomi Nakagawa"      
                 descricao="A Praça Tomi Nakagawa foi inaugurada em 22 de junho de 2008, durante as comemorações dos 100 anos da Imigração Japonesa no Brasil e a chegada do navio Kasato Maru. A ocasião contou com a presença do príncipe herdeiro do Japão, Naruhito, e do vice-presidente da República, José Alencar." 
                 img={PracaJapones}   
                 link="/PracaJapones"
                /> 

                <CardRecomenda
                 titulo="Natureza e preservação!"
                 subTitulo="Jardim Botanico de Londrina"      
                 descricao="O Jardim Botânico de Londrina é uma das mais importantes unidades de pesquisa e conservação de espécies nativas e exóticas no Paraná. Ele é um espaço voltado à proteção e cultivo de espécies silvestres raras, ameaçadas de extinção." 
                 img={Jardim}   
                 link="/JardimBotanico"
                /> 

                <CardRecomenda
                 titulo="Otimo para o seu fim de tarde!"
                 subTitulo="Barragem do lago Igapo"      
                 descricao="A Barragem do Lago Igapó I tornou-se um dos principais cartões postais da cidade. A obra foi projetada em 1957. As sondagens e cálculos para a construção da barragem para o represamento do ribeirão começaram em abril daquele ano sua inauguração aconteceu em 10 de dezembro de 1959." 
                 img={Barragem}   
                 link="/Barragem"
                /> 
            </ConteudosPadrao>

            <Footer/>
        </AppPadrão>
       
    );
};

export default Turismo;