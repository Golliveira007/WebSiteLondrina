import Header from "../Componentes/Header/header";
import styled from "styled-components";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { ParagrafoPadrao } from "./componentesEstilizacao/ParagrafoPadrao";
import { Titulo } from "../Componentes/Titulo";
import CardRecomenda from "./CardSugestoes";
import Expo from "../imagens/expo.jpg";
import Tropical from "../imagens/tropical.jpg"
import Vitrola from "../imagens/vitrola.jpg";
import Porks from "../imagens/porks.jpg";
import Footer from "../Componentes/Footer";

const ConteudosPadrao = styled.div`
    background-color:#EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;


function Eventos() {
    return(
        <AppPadrão>
            <Header/>

            <LealtContainer>

                <TituloPadrao>Londrina em Festa: Eventos Imperdíveis para Todos os Gostos</TituloPadrao>

                <ParagrafoPadrao>Em Londrina, a animação é garantida o ano todo! A cidade oferece uma variedade 
                    de eventos que refletem seu espírito acolhedor e sua cultura diversificada, sendo uma parada 
                    obrigatória para quem gosta de viver experiências únicas. Tem opções para todos: música, cultura, 
                    gastronomia, festivais, Shows.  
                </ParagrafoPadrao>
            </LealtContainer>
            
            <ConteudosPadrao>
                <Titulo>Agenda Londrinense: Eventos Culturais e Festas que Você Não Pode Perder!</Titulo>

                <CardRecomenda
                    titulo="O maior evento pecuário do norte do Paraná"
                    subTitulo="Expo Londrina"
                    descricao="Londrona e sede da maior feira agropecuaria do norte do Paraná, são 9 dias de muita festa e feiras dos melhores e mais avançados produtos do mundo da agropecuaria para voce, são 6 dias de shows de diferentes artistas renomeados brasileiros e mais 3 dias de rodeio para finalizar essa grande evento."
                    img={Expo}
                    link="/Expo"
                />

                <CardRecomenda
                    titulo="A Vibração da Cultura Brasileira em um Só Festival!"
                    subTitulo="Tropicaldelia"
                    descricao="O Tropicadelia Festival nasceu em 2022 na cidade de Londrina. Desde então o evento reúne grandes nomes do rap, trap, reggae, eletronica, além dos principais nomes do funk brasileiro. O evento vem crescendo mais a cada ano sempre trazendo grandes artistas, grandes instruturas e arrastando pessoas de todo Paraná para curtir o festival."
                    img={Tropical}
                    link="/Tropical"
                />

                <CardRecomenda
                    titulo="O rock vive em Londrina!"
                    subTitulo="Vitrola Bar"
                    descricao="O Vitrola Bar é um dos lugares mais queridos de Londrina para quem busca boa música, drinques caprichados e um ambiente acolhedor. Com uma decoração retrô que faz você se sentir em uma verdadeira viagem no tempo, o Vitrola é conhecido pela sua programação que traz sempre os melhores colvers do mundo do rock para voces."
                    img={Vitrola}
                    link="/Vitrola"
                />

                <CardRecomenda
                    titulo="Noite de bar em bar!"
                    subTitulo="Porks Londrina"
                    descricao="O Porks (Porco e Chopp) é o point perfeito em Londrina para quem adora bons petiscos e cervejas artesanais! Com um cardápio dedicado às delícias da carne de porco, o Porks oferece pratos como torresmo crocante, costelinha barbecue e sanduíches saborosos, todos preparados para harmonizar com uma seleção especial de cervejas locais e nacionais. "
                    img={Porks}
                    link="/Porks"
                />
            </ConteudosPadrao>

            <Footer/>

        </AppPadrão>
        
    );
};

export default Eventos;