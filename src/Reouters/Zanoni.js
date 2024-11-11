import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import Srzanoni from "../imagens/zanozi.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";

function Zanoni() {
    return(
        <AppPadrão>
            
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Sr. Zanoni - Tradição brasileira, sofisticação e qualidade!</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        Se o que você quer é uma experiência de churrasco de verdade, o Sr. Zanoni é o lugar certo em Londrina! O restaurante é conhecido por servir uma costela que desmancha na boca,  O menu também oferece opções variadas de cortes e porções para quem curte churrasco, tudo feito com ingredientes de qualidade e aquele toque caseiro.
                        O ambiente do Sr. Zanoni é descontraído e acolhedor, com uma decoração rústica que remete ao estilo de uma autêntica churrascaria. É o tipo de lugar onde você pode relaxar e se sentir à vontade, seja em uma reunião com amigos, em família ou em um jantar casual.
                    </SubTitulo>

                    <ImgPadrao src={Srzanoni}/>

                    <Descricao>Endereço: Av. Higienópolis, 2357 - Guanabara, Londrina - PR, 86050-000, Proximo a cascata do lago Igapo</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>
            
        </AppPadrão>
        
    );
}

export default Zanoni;