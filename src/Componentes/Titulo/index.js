import styled from "styled-components";

export const Titulo = styled.h1`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.corFundo || `#FFF`};
    color: ${props => props.cor || `#000`};
    font-size: ${props => props.tamanhoFont || `30px`};
    text-align: ${props => props.alinhamento || `center`};
    margin: ${props => props.margem || `0 0 0 0`} ;
`;