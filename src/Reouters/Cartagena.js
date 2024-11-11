import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoCartagena from "../imagens/cartagena.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";

function Cartagena (){
    return(

        <AppPadrão>
            
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Cartagena Bar: Diversão e Estilo no Coração de Londrina</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        O Cartagena Bar, localizado na Rua Bento Munhoz da Rocha Neto, 585, em Londrina, é um espaço notável da cidade para quem aprecia um ambiente vibrante e moderno. Com uma proposta descontraída, o bar é conhecido pela sua atmosfera jovem e animada, ideal para quem curte música eletrônica e está em busca de um espaço onde o público é predominantemente universitário e profissional jovem.
                        O local é frequentemente elogiado por suas bebidas variadas e pelo ambiente agradável, embora possa ficar bastante movimentado, especialmente nos finais de semana e durante eventos especiais. Além disso, o Cartagena recebe shows de artistas e DJs, oferecendo uma boa opção de entretenimento noturno na cidade​.
                    </SubTitulo>

                    <ImgPadrao src={FotoCartagena}/>

                    <Descricao>Endereço: R. Bento Munhoz da Rocha Neto, 585 - Palhano 2, Londrina - PR, 86050-435.</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>

        </AppPadrão>
        
    );
};

export default Cartagena;