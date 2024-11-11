import styled from "styled-components";
import { Titulo } from "../../Componentes/Titulo";
import { Link } from "react-router-dom";

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 30px auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%; 
    
`
const LinkSdecoracao = styled(Link)`
    text-decoration: none;
    color: black;
`
const Botao = styled.button`
    text-decoration: none;
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: solid;
    border-radius: 10px;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 180px;
    
    &:hover {
        cursor: pointer;
    }
`;
const Descricao = styled.p`
    max-width: 300px;
`
const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`;
const ImgLivro = styled.img`
    width: ${props => props.tamanho || `180px`};
    border-radius: 5px;
    
    &:hover {
        cursor: pointer;
        font-size:30px;
        width: 300px;

    }
`;



function CardRecomenda ({titulo, subTitulo, descricao, img, link}){
    return(
        <Card>
            <div>
                <Titulo tamanhoFont="18px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subTitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            
            <div>
                <ImgLivro src={img}/>
                <LinkSdecoracao to={link}><Botao >saiba mais</Botao></LinkSdecoracao>
            </div>
        </Card>
    )
}

export default CardRecomenda;