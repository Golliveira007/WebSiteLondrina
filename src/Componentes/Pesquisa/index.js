import styled from "styled-components";
import { useState } from "react";
import { Lugares } from "./dadosPesquisa";
import { Titulo } from "../Titulo";

export const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: ${props => props.tamanho || '200px'};
    width: 100%;
`

const Input = styled.input`
    border: 2px solid black; 
    background-color: white;
    border-radius: 10px;
    font-size: 30px;
    color: black;
    text-align: center;
    
    &::placeholder {
        color: black;
        font-size: 20px;
    }
    
`;

const Resultados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        width: 170px;
        border-radius: 10px;
        margin: 20px 0 0 20px;
        justify-content: center;
    }
    
    h2{
        font-size: 20px;
        font-family: Arial;
        justify-content: center;
    }
`;

function Pesquisa(){

    const [LugaresPesquisados, setLugaresPesquisados] = useState([]);

    return(

        <PesquisaContainer>
            <Titulo 
                corFundo="linear-gradient(90deg, #002F52 35%, #326589 165%)" 
                cor="white">
                Encontre aqui o seu lugar em Londrina!
            </Titulo>

            <Input placeholder="Digite o seu destino"

                onBlur={ evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = Lugares.filter( Lugares => Lugares.nome.includes(textoDigitado));
                    setLugaresPesquisados(resultadoPesquisa);
                }}
            />

            {LugaresPesquisados.map( Lugares => (
                <Resultados>
                    <h2>{Lugares.nome}</h2>
                    <img src={Lugares.src}/>
                </Resultados>
            ))}
        </PesquisaContainer>
        
    );
}

export default Pesquisa;