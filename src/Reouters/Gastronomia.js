import styled from "styled-components";
import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { ParagrafoPadrao } from "./componentesEstilizacao/ParagrafoPadrao";
import { Titulo } from "../Componentes/Titulo";
import CardRecomenda from "./CardSugestoes";
import Gelobel from "../imagens/gelobel.jpg";
import Kozan from "../imagens/kozan.jpg";
import Zanoni from "../imagens/zanozi.jpg";
import Arnaldos from "../imagens/arnaldos.png";
import Footer from "../Componentes/Footer";

const ConteudosPadrao = styled.div`
    background-color:#EBECEE;
    witdh: 100%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

function Gastronomia (){
    return(
      <AppPadrão>
        
        <Header/>

        <LealtContainer>

          <TituloPadrao>Sabores de Londrina: Uma Viagem Gastronômica pelo Interior</TituloPadrao>

          <ParagrafoPadrao>Em Londrina, o sabor é levado a sério! A cidade tem uma cena gastronômica 
            diversificada que reflete as influências dos imigrantes europeus, japoneses e de outras 
            regiões do Brasil, trazendo pratos que vão de receitas tradicionais a criações modernas 
            e cheias de personalidade. Vamos descobrir o que a cidade tem a nos oferecer!
          </ParagrafoPadrao>  
        </LealtContainer>     
        
        <ConteudosPadrao>

          <Titulo>Roteiro Gastronômico de Londrina, conheça os sabores que vão te surpreender!</Titulo>

          <CardRecomenda
            
            titulo="Exelente lugar para o almoços em familia!"
            subTitulo="Gelobel"      
            descricao="O ambiente perfeito para reunir a família e os amigos e celebrar os grandes momentos da vida. Para isso, conte com um cardápio variado, pronto para agradar a todos os gostos. Derreta-se com as nossas deliciosas carnes, porções generosas e diversas opções de bebidas. Tudo preparado especialmente para que você se sinta em casa." 
            img={Gelobel}   
            link="/Gelobel"
          />

          <CardRecomenda 
            titulo="O melhor da gastronomia assiatica!"
            subTitulo="Kozan"      
            descricao="O Kozan Sushi apresenta o que há de melhor na culinária oriental japonesa, com opção de Rodízio Japonês onde tem bebida e sobremesa inclusa, além de um cardápio extenso de pratos “a la carte” com pratos quentes e combinados." 
            img={Kozan}   
            link="/Kozan"
          />
          
          <CardRecomenda
            titulo="Tradição brasileira, sofisticação e qualidade!"
            subTitulo="Sr. Zanoni"      
            descricao="Bem-vindo ao Sr. Zanoni Londrina, um destino gastronômico onde a tradição brasileira se encontra com a sofisticação. Desfrute de cortes suculentos e perfeitamente grelhados, selecionados com o maior cuidado para garantir a máxima qualidade. " 
            img={Zanoni}   
            link="/Zanoni"
          />

          <CardRecomenda
            titulo="A capital do Dogão de Frango!"
            subTitulo="Arnaldos"      
            descricao="Pioneiro no dogão com frango desfiado! Desde 1991, o Arnaldos e referencia na cidade de Londrina com o seu incrivel Dog Frango e varias outras opções em seu cardapio para voce se deliciar" 
            img={Arnaldos}   
            link="/Arnaldos"
          />
        
        </ConteudosPadrao>

        <Footer/>
      </AppPadrão>   
        
    );
};

export default Gastronomia;