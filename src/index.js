import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Reouters/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Reouters/Home';
import Gastronomia from './Reouters/Gastronomia';
import Turismo from './Reouters/Turismo';
import Eventos from './Reouters/Eventos';
import Museo from './Reouters/museu';
import { Navigate } from 'react-router-dom';
import PracaJapones from './Reouters/PracaJapones';
import JardimBotanico from './Reouters/JardimBoranico';
import Barragem from './Reouters/Barragem';
import Gelobel from './Reouters/Gelobel';
import Kozan from './Reouters/Kozan';
import Zanoni from './Reouters/Zanoni';
import Arnaldos from './Reouters/Arnaldos';
import Expo from './Reouters/Expo';
import Tropical from './Reouters/Tropical';
import Vitrola from './Reouters/Vitrola';
import Porks from './Reouters/Porks';
import Login from './Reouters/Login';
import Cartagena from './Reouters/Cartagena';
import Cascata from './Reouters/Cascata';
import Parque from './Reouters/Parque';
import Casdastro from './Reouters/Cadastro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  }, 
    {
      path: "/Home",
      element: <Home/>
    },
    {
      path: "/Gastronomia",
      element: <Gastronomia/>
    },
    {
      path: "/Turismo",
      element: <Turismo/>
    },
    {
      path: "/Museo",
      element: <Museo/>
    },
    {
      path: "/PracaJapones",
      element: <PracaJapones/>
    },
    {
      path: "/JardimBotanico",
      element: <JardimBotanico/>
    }, 
    {
      path: "/Barragem",
      element: <Barragem/>
    },
    {
      path: "/Eventos",
      element: <Eventos/>
    },
    {
      path: "/Gelobel",
      element: <Gelobel/>
    },
    {
      path: "/Kozan",
      element: <Kozan/>
    },
    {
      path: "/Zanoni",
      element: <Zanoni/>
    },
    {
      path: "/Arnaldos",
      element: <Arnaldos/>
    },
    {
      path: "/Expo",
      element: <Expo/>
    },
    {
      path: "/Tropical",
      element: <Tropical/>
    },
    {
      path: "/Vitrola",
      element: <Vitrola/>
    },
    {
      path: "/Porks",
      element: <Porks/>
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/Cartagena",
      element: <Cartagena/>
    },
    {
      path: "/Cascata",
      element: <Cascata/>
    },
    {
      path: "/parque",
      element: <Parque/>
    },
    {
      path: "/Cadastro",
      element: <Casdastro/>
    },
    ],

  
  
  
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>

    
   
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
