import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import Jardim from "../imagens/jardimBotanico.webp";
import Footer from "../Componentes/Footer";

const ConteudosPadrao = styled.div`
    background-color:#EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

function JardimBotanico (){
    return(
        <AppPadrão>
            
            <Header/>

            <LealtContainer tamanho="100px">
                
                <TituloPadrao >Jardim Botânico de Londrina: Natureza e Tranquilidade em Meio à Cidade!</TituloPadrao>

                
                
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                        <SubTitulo>
                            O Jardim Botânico de Londrina é um verdadeiro refúgio verde para quem quer relaxar e se conectar com a natureza! Com uma área ampla e cheia de trilhas, lagos e vegetação nativa, o local é ideal para passeios tranquilos, caminhadas e até um piquenique com os amigos ou a família. O espaço abriga uma rica biodiversidade de plantas e flores, com espécies da flora brasileira que são um espetáculo à parte para os amantes de botânica e fotografia.
                            Uma das grandes atrações do Jardim Botânico é o orquidário, onde é possível ver várias espécies de orquídeas e aprender sobre o cuidado com essas plantas tão especiais. Além disso, o parque oferece mirantes com vistas incríveis para os lagos e jardins, perfeitos para uma pausa para respirar e aproveitar a paisagem.
                        </SubTitulo>

                        <ImgPadrao src={Jardim}/>

                        <Descricao>Endereço: Av. dos Expedicionários, 1999, Londrina - PR.<br/><br/>
                            Exelente lugar para fugir da correria, caminhar em meio à natureza e ainda tirar fotos lindas? O Jardim Botânico de Londrina é o destino perfeito!
                        </Descricao>
                </LealtPaginas>
            </ConteudosPadrao>
            
            <Footer/>

        </AppPadrão>
        
        
    )
}

export default JardimBotanico;