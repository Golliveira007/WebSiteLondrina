import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import Footer from "../Componentes/Footer";

import Japones from "../imagens/pracaJapones.jpg";
const ConteudosPadrao = styled.div`
    background-color:#EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

function PracaJapones (){
    return(
        <AppPadrão>
            
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Praça Tomi Nakagawa: Onde Londrina Celebra a Cultura Japonesa!</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>Localizada no coração de Londrina, a Praça Tomi Nakagawa é um espaço que celebra a herança japonesa na cidade, trazendo um clima de paz e harmonia. Inaugurada em homenagem aos imigrantes japoneses e ao fortalecimento das relações entre Brasil e Japão, a praça combina elementos da cultura japonesa, como lanternas e um belo jardim, criando um ambiente perfeito para relaxar e apreciar a natureza.
                    Além da paisagem única, o local abriga eventos culturais, como festivais e apresentações tradicionais, que reforçam o vínculo entre a comunidade japonesa e os londrinenses. Com sua arquitetura inspirada em templos japoneses e seu ar sereno, a Praça Tomi Nakagawa é ideal para uma pausa tranquila em meio à rotina da cidade.
                    </SubTitulo>

                    <ImgPadrao src={Japones}/>

                    <Descricao>A Praça Tomi Nakagawa está localizada na Rua Beijamin Constant - Centro, Londrina - PR.</Descricao>

                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>
        </AppPadrão>
        
    )
}

export default PracaJapones;