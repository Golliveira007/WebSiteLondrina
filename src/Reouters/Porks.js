import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoPorks from "../imagens/porks.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";

function Porks (){
    return(
        <AppPadrão>

            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Descubra o Porks Londrina: Um Pub de Carne de Porco, Chope e Diversão!</TituloPadrao>
            </LealtContainer>
            
        
            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        O Porks Londrina é um bar e pub localizado na cidade de Londrina, oferecendo uma experiência descontraída para quem gosta de boa comida e bebidas, especialmente com foco em pratos feitos com carne de porco, como o tradicional torresmo. O local é popular para encontros de amigos e happy hours, contando com uma atmosfera agradável e decoração estilizada. O cardápio também inclui porções variadas e pratos como o famoso toucinho.
                        Além disso, o Porks é conhecido por oferecer uma boa seleção de bebidas, incluindo chope gelado e coquetéis. O bar frequentemente tem promoções especiais e música ao vivo, tornando o ambiente ainda mais animado. A casa é ideal para quem busca um lugar com bom atendimento e uma excelente opção de lazer na cidade.
                    </SubTitulo>

                    <ImgPadrao src={FotoPorks}/>

                    <Descricao>Endereço: R. Paranaguá, 946 - Centro, Londrina - PR, 86020-030.</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>
        
            <Footer/>
        
        </AppPadrão>
        
    )
}

export default Porks;