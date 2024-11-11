import styled from 'styled-components';
import Header from '../Componentes/Header/header';
import Pesquisa from '../Componentes/Pesquisa';
import Sugestoes from '../Componentes/Sugestoes';
import Footer from '../Componentes/Footer';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  justify-content: center;
` 

function Home() {
  return (
    
    <AppContainer>
      
      <Header/>
      <Pesquisa/>
      <Sugestoes/>
      <Footer/>
    </AppContainer>

    
  );
}

export default Home;