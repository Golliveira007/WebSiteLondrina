import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoKozan from "../imagens/kozan.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";

function Kozan() {
    return(
        <AppPadrão>
            
            <Header/>
            
            <LealtContainer tamanho="100px">
                <TituloPadrao>Kozan – Um Toque de Japão em Londrina!</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        Se você quer dar uma escapada para o Japão sem sair de Londrina, o Kozan é o lugar certo! Este restaurante combina o melhor da culinária japonesa tradicional com um toque moderno, oferecendo uma experiência autêntica e cheia de sabor. Seja no rodízio ou no à la carte, o Kozan é conhecido pela qualidade e frescor dos ingredientes, com sushis, sashimis e pratos quentes que conquistam até quem está experimentando comida japonesa pela primeira vez.
                        O ambiente é acolhedor e sofisticado, perfeito tanto para um jantar a dois quanto para uma comemoração em família ou com amigos. Um destaque especial vai para o tempurá crocante e o salmão sempre impecável, que são favoritos entre os frequentadores. E para quem curte inovar, o menu inclui opções criativas e surpreendentes, como combinados exclusivos e sobremesas que misturam sabores orientais.
                    </SubTitulo>
                    
                    <ImgPadrao src={FotoKozan}/>

                    <Descricao>Endereço: Av. Higienópolis, 2529 - Guanabara, Londrina - PR, 86020-080, Proximo ao lago Igapo</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>
        </AppPadrão>
        
    );
}

export default Kozan;