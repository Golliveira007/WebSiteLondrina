import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import FotoMuseu from "../imagens/museo.jpg";
import Footer from "../Componentes/Footer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";

const ConteudosPadrao = styled.div`
    background-color:#EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;


function Museo (){
    return(
        <AppPadrão>
            <Header/>

            <LealtContainer tamanho="100px">

                <TituloPadrao>Museu Histórico de Londrina: Uma Viagem ao Passado no Coração da Cidade!</TituloPadrao>

            </LealtContainer>
            
            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        O Museu Histórico de Londrina é o lugar ideal para quem quer entender um pouco mais sobre a história e o desenvolvimento da cidade e da região. Instalado na antiga estação ferroviária de Londrina, o museu é um charme à parte com sua arquitetura preservada, lembrando os tempos em que os trens eram o principal meio de transporte. Lá dentro, você encontra exposições que contam desde a chegada dos imigrantes e o crescimento agrícola até as transformações que moldaram Londrina ao longo dos anos.
                        Além de objetos antigos, o museu também exibe documentos, fotografias e ferramentas usadas pelos pioneiros, proporcionando uma verdadeira viagem ao passado. A visita é interessante tanto para os moradores quanto para turistas, e o ambiente acolhedor convida a explorar cada canto!
                    </SubTitulo>

                    <ImgPadrao src={FotoMuseu}/>

                    <Descricao>Endereço: Rua Benjamin Constant, 900, no Centro de Londrina. O Museu fica pertinho de outras atrações da cidade, então é fácil incluir no seu roteiro!</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>
        </AppPadrão>
        
        
    )
}

export default Museo;