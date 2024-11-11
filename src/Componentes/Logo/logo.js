import styled from "styled-components";
import imgLogo from "../../imagens/logo.png.png";

const Emblema = styled.img`
    width: 120px;
    margin: ${props => props.margem || `0 80px 0 0px`} ;
    
    
`

function Logo (){
    return(
        <Emblema src={imgLogo}/>
    )
}

export default Logo;