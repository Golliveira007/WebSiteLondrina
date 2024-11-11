import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoTropical from "../imagens/tropical.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";

function Tropical (){
    return(
        <AppPadrão>
            
            <Header/>
            
            <LealtContainer tamanho="100px">
                <TituloPadrao>Explorando o Tropicadelia: Um Festival de Ritmos e Cultura em Londrina!</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        Tropicadelia é um festival de música que acontece em Londrina, Paraná, conhecido por sua mistura de estilos musicais como rap, trap, reggae, psicodelia e música eletrônica. O evento reúne grandes nomes da música brasileira e internacional, oferecendo uma programação diversificada que inclui apresentações ao vivo, DJs e shows de diversos gêneros.
                        Em sua estrutura, o festival conta com vários palcos, como o Tropical Stage e o Hype, que acomodam diferentes atrações e proporcionam uma experiência imersiva para os participantes. Além das apresentações musicais, o evento oferece também espaços de gastronomia, arte e cultura, criando um ambiente vibrante e dinâmico. A edição de 2023, por exemplo, aconteceu no Parque de Exposições Governador Ney Braga, com destaque para sua infraestrutura de última geração e uma organização que transforma o festival em um dos maiores eventos da cidade.
                    </SubTitulo>

                    <ImgPadrao src={FotoTropical}/>

                    <Descricao>Endereço: Parque de Exposições Governador Ney Braga, Av. Tiradentes, 6275 - Cilo 2, Londrina - PR, 86072-000</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>
            
            <Footer/>

        </AppPadrão>
        
        
    )
}

export default Tropical;