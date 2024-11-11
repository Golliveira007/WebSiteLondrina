import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import Restaurante from "../imagens/gelobel.jpg";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import Footer from "../Componentes/Footer";

function Gelobel (){
    return(
        <AppPadrão>
            <Header/>

            <LealtContainer tamanho="100px">
                <TituloPadrao>Gelobel – O Templo da Costela em Londrina!</TituloPadrao>
            </LealtContainer>  

            <ConteudosPadrao>
                <LealtPaginas>

                    <SubTitulo>
                        Se você está em Londrina e sente aquele desejo por uma costela saborosa, o Gelobel é uma parada obrigatória! Com uma tradição que remonta aos anos 1980, este restaurante é praticamente uma lenda na cidade quando o assunto é churrasco. A estrela do cardápio é a costela bovina, que chega à mesa desmanchando de tão macia, com aquele sabor defumado irresistível. Acompanhada de mandioca e um tempero caseiro especial, ela conquista fãs de todas as idades.
                        O ambiente é perfeito para quem quer relaxar e curtir uma boa comida em um clima informal e acolhedor. Além disso, o Gelobel oferece opções de porções generosas  perfeitas para compartilhar com os amigos ou a família. Ah, e claro a Gelobel tem uma variedade de Drinks especial da casa que sempre surpreende, alem daquele Chop gelado e de qualidade!
                    </SubTitulo>

                    <ImgPadrao src={Restaurante}/>

                    <Descricao>Endereço: A Gelobel está presente em varias areas são mais de 10 lojas para melhor atende-lo, eles estão inclusive na praça de alimentação do shopping Bulevard e do Catuai</Descricao>

                </LealtPaginas>  
            </ConteudosPadrao>

            <Footer/>
            
        </AppPadrão>
    );
};

export default Gelobel;