import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoExpo from "../imagens/expo.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";

function Expo (){
    return(
        <AppPadrão>
            
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Expo Londrina: Música, Negócios e Diversão no Maior Evento do Paraná</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        A Expo Londrina é um dos maiores eventos do agronegócio e do entretenimento no Paraná, realizado anualmente no Parque de Exposições Governador Ney Braga, em Londrina. Tradicionalmente, o evento reúne diversas atrações, como exposições de tecnologia e inovação no setor agropecuário, feiras de negócios, shows de grandes artistas e uma extensa área de entretenimento com parque de diversões e gastronomia.
                        A Expo é um evento importante para profissionais do agronegócio, pois oferece um espaço para atualização sobre as últimas tendências do setor, com palestras, exposições e demonstrações de novos produtos e soluções tecnológicas. Além disso, a festa se transforma em um grande ponto de encontro para o público geral, com uma programação de shows, apresentações musicais e atividades culturais que atraem pessoas de todas as idades.
                    </SubTitulo>

                    <ImgPadrao src={FotoExpo}/>

                    <Descricao>Endereço: Parque de Exposições Governador Ney Braga, Av. Tiradentes, 6275 - Cilo 2, Londrina - PR, 86072-000.</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>
            
            <Footer/>
        </AppPadrão>
        
        
    )
}

export default Expo;