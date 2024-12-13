import { FaCheck, FaWhatsapp } from "react-icons/fa";

import './App.css'

function App() {

  return (
    <div className="container">
      <div className="header">
        <h1>Detetive Severo</h1>
        <p>+18 anos de experiência</p>
        {/* <img src="src/images/gettyimages-1398047195-612x612.jpg" alt="Detetive" /> */}
        <img src="src/images/blob.jpg" alt="Detetive" />
      </div>

      <div className="descricao">
        <h2>Te ajudo a descobrir as respostas para as perguntas que estão tirando o seu sono</h2>
      </div>

      <div className="razoes">
        <ul>
          <li>
            <FaCheck />
            <span>Infidelidade Conjugal</span>
          </li>
          <li>
            <FaCheck />
            <span>Pessoas Desaparecidas</span>
          </li>
          <li>
            <FaCheck />
            <span>Rastreador de Carros</span>
          </li>
          <li>
            <FaCheck />
            <span>E muito mais investigações</span>
          </li>
        </ul>
      </div>

      <div className="bloco-final">
      <div className="apelo">
        <h2>Precisa de um detetive?</h2>
        <h2>Fale comigo agora</h2>
      </div>

      <div className="conversar">
        {/* <button className="btn">INICIAR CONVERSA <FaWhatsapp /></button> */}
        <div className="btn">
        <a href="https://api.whatsapp.com/send?phone=5521981261313&#038;text=Ol%C3%A1,%20vim%20pelo%20site%20e%20gostaria%20de%20ter%20maiores%20informa%C3%A7%C3%B5es">
          INICIAR CONVERSA <FaWhatsapp />
        </a>
        </div>
        <h3>(21) 98018-9243</h3>
      </div>
      </div>
    </div>
  )
}

export default App
