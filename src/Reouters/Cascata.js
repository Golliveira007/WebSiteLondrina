import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoCascata from "../imagens/cascata-no-lago-2.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";

function Cascata (){
    return(
        <AppPadrão>

            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Cascata do Lago Igapó: Um Momento de Paz e Beleza Urbana</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        O Lago Igapó, que significa "alagado" em tupi-guarani, foi construído nos anos 1950 para controlar as enchentes e, de quebra, criar uma área de lazer para a cidade. Com o tempo, ele se transformou no pulmão verde de Londrina e em um ponto de encontro para os moradores e turistas. A Cascata é uma das atrações mais recentes, projetada para oxigenar as águas do lago e dar um toque especial ao lugar.
                        A Cascata do Lago Igapó é, além de bonita, um excelente ponto para fotografias e um lugar para contemplar. O som da água caindo é relaxante e cria um ambiente tranquilo em meio ao parque urbano. Em dias de calor, ela refresca o ambiente e torna a caminhada ao redor do lago ainda mais agradável.
                    </SubTitulo>

                    <ImgPadrao src={FotoCascata}/>

                    <Descricao>Endereço: A cascata está localizada no Lago Igapó, com fácil acesso pela Avenida Higienópolis.</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>
            
            <Footer/>
        </AppPadrão>
    );

}

export default Cascata;