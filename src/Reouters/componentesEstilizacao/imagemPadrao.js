import styled from "styled-components";

export const ImgPadrao = styled.img`
width: ${props => props.tamanho || `400px`};
border-radius: 5px;
justi-content: center;
align-items: center;

&:hover {
    cursor: pointer;
    font-size:30px;
    width: 600px;

}
`;