import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import fimdesemananoparque from "../imagens/fimdesemananoparque.webp";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";
import CardRecomenda from "./CardSugestoes";

function Parque (){
    return(
        <AppPadrão>
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Parque Arthur Thomas: Um Pulmão Verde no Meio de Londrina</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        O Parque Arthur Thomas leva o nome do pioneiro que ajudou a desenvolver Londrina. Inaugurado na década de 1980, ele foi criado com a ideia de preservar uma área rica em mata nativa, além de oferecer um espaço para a população se aventurar e relaxar. Um dos pontos mais interessantes do parque é a cachoeira, formada pelo Rio Cambé, que atrai visitantes para fotos e momentos de contemplação.
                        Londrina é uma cidade que não economiza em áreas verdes, e o Parque Arthur Thomas é um dos exemplos mais vibrantes disso! Com uma área que ultrapassa 80 hectares, o parque oferece muito mais do que só árvores e trilhas; é um verdadeiro refúgio para quem quer fugir da rotina e se conectar com a natureza.
                    </SubTitulo>

                    <ImgPadrao src={fimdesemananoparque}/>

                    <Descricao>Endereço: R. da Natureza, 155 - Jardim Piza, Londrina - PR, 86041-050</Descricao>

                </LealtPaginas>
            </ConteudosPadrao>
            
            <Footer/>
            
        </AppPadrão>
    );
};

export default Parque;