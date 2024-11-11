import styled from "styled-components";
import { Titulo } from "../Titulo";
import { SugestoesLugares } from "./SugestoesLista";
import CardRecomenda from "../../Reouters/CardSugestoes";
import FotoCartagena from "../../imagens/cartagena.jpg";
import FimdeSemananoParque from "../../imagens/fimdesemananoparque.webp"
import Lago from "../../imagens/cascata-no-lago-2.jpg";

 const ConteudoPrincipal = styled.div`
    background-color:#EBECEE;
    padding-bottom: 20px;
    flex-direction: column;
 `;

 const Conteudos = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
 `;

 const ImgSugestoes = styled.img`
    width: 300px;
    border-radius: 10px;
    margin: 20px 0 0 20px;
    justify-content: center;
    display: flex;
 `;

 const Texto = styled.p`
    font-size: 20px;
    font-family: Arial;
    justify-content: center;
    display: flex;
 `;

function SubTitulo (){
    return(
        <ConteudoPrincipal>
            <Titulo 
                cor="black" 
                margem=" 20px 0 0 0"
                corFundo="white">
                O melhor que Londrina tem a nos oferecer
            </Titulo>

            <CardRecomenda
                titulo="O ponto turistico mais falado Londrina!"
                subTitulo="Cascata do Lago Igapo"
                descricao="Quando se pensa em Londrina, o Lago Igapó é um dos primeiros lugares que vêm à mente. Esse lago, que já é uma verdadeira obra de arte natural, ainda nos brinda com uma atração especial a famosa Cascata do Lago Igapó."
                img={Lago}
                link="/Cascata"
            />
            
            <CardRecomenda
                titulo="Sugestões para o seu domingo em familia!"
                subTitulo="Parque Municipal Arthur Thomas"
                descricao="O Parque Arthur Thomas leva o nome do pioneiro que ajudou a desenvolver Londrina. Inaugurado na década de 1980, ele foi criado com a ideia de preservar uma área rica em mata nativa, além de oferecer um espaço para a população se aventurar e relaxar. "
                img={FimdeSemananoParque}
                link="/Parque"
            />

            <CardRecomenda
                titulo="Noites Inesquecíveis em Londrina!"
                subTitulo="Cartagena"
                descricao="O Cartagena Bar, localizado na Rua Bento Munhoz da Rocha Neto, 585, em Londrina, é um espaço notável da cidade para quem aprecia um ambiente vibrante e moderno. "
                img={FotoCartagena}
                link="/Cartagena"
            />
        </ConteudoPrincipal>
        
        
    );
}

export default SubTitulo;