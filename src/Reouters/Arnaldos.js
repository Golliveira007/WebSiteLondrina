import Header from "../Componentes/Header/header";
import { AppPadrão } from "./componentesEstilizacao/AppPadrao";
import { LealtContainer } from "./componentesEstilizacao/LealtContainer";
import { LealtPaginas } from "./componentesEstilizacao/LealtPaginas";
import { TituloPadrao } from "./componentesEstilizacao/TituloPadrao";
import { Descricao } from "./componentesEstilizacao/DescricaoPadrao";
import { ImgPadrao } from "./componentesEstilizacao/imagemPadrao";
import FotoArnaldos from "../imagens/arnaldos.png";
import { ConteudosPadrao } from "./componentesEstilizacao/ConteudosPadrao";
import { SubTitulo } from "./componentesEstilizacao/SubTitulo";
import Footer from "../Componentes/Footer";


function Arnaldos() {
    return(
        <AppPadrão>
            
            <Header/>
            
            <LealtContainer tamanho="100px">
                <TituloPadrao>Arnaldo’s – O Melhor Hot Dog de Londrina!</TituloPadrao>
            </LealtContainer>

            <ConteudosPadrao>
                <LealtPaginas>
                    <SubTitulo>
                        Se você é fã de um bom hot dog, não pode deixar de conhecer o Arnaldos em Londrina! O restaurante é o lugar perfeito para quem busca um lanche rápido, saboroso e diferente. O Arnaldo’s se destaca pelos seus hot dogs caprichados, feitos com ingredientes frescos e combinações criativas que deixam qualquer um com água na boca.
                        O ambiente do Arnaldo’s é descontraído, ideal para um almoço rápido, um lanche no fim de tarde ou até para curtir um momento mais informal com os amigos. A atmosfera acolhedora e o atendimento atencioso fazem com que o restaurante se torne um lugar perfeito para quem ama um bom lanche. Se você estiver em Londrina não deixe de saborear um hot dog diferente e saboroso.
                    </SubTitulo>

                    <ImgPadrao src={FotoArnaldos}/>

                    <Descricao>Endereço: O Arnaldo’s estão em dois Endereços para melhor atende-los Av. Bandeirantes, 55 - Ipiranga, Londrina - PR, 86010-020 & Av. Maringá, 430 - Vitoria, Londrina - PR, 86060-000</Descricao>
                </LealtPaginas>
            </ConteudosPadrao>

            <Footer/>

        </AppPadrão>
        
    );
}

export default Arnaldos;