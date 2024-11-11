import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoVitrola from "../imagens/vitrola.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";

function Vitrola (){
    return(
        <AppPadrão>
            
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Vitrola Bar: O Pub mais Tradicional de Londrina!</TituloPadrao>
            </LealtContainer>    
            
            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        O Vitrola Bar é um dos pontos de entretenimento mais tradicionais de Londrina, localizado na Avenida Higienópolis, 2405. Desde sua fundação, o bar se destacou por ser um dos principais locais para quem busca boa música ao vivo e diversão noturna na cidade. Com uma programação que mistura shows ao vivo e discotecagem com hits de diferentes décadas, o Vitrola se tornou o lugar ideal para os amantes de música e baladas.
                        Além de ser palco de grandes shows, o bar também oferece festas temáticas e eventos especiais, com uma atmosfera descontraída e acolhedora. O ambiente é perfeito para quem curte curtir a noite com amigos, aproveitar a música ao vivo e até mesmo participar de sorteios e promoções especiais.
                    </SubTitulo>

                    <ImgPadrao src={FotoVitrola}/>

                    <Descricao>Endereço: Av. Higienópolis, 2405 - Guanabara, Londrina - PR, 86050-000.</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>
        </AppPadrão> 
    )
}

export default Vitrola;