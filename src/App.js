import Banner from "./componentes/Banner";
import Header from "./componentes/Header";
import FrontEnd from "./componentes/Front-end";
import BackEnd from "./componentes/Back-end";
import Mobile from "./componentes/Mobile";
import Rodape from "./componentes/Rodape";

function App() {
  return (
    <div className="App">
      {/**HEADER DO ALURAFLIX */}
      <Header />
      {/**BANNER PRINCIPAL */}
      <Banner />
      {/**VÍDEOS DE FRONT-END */}
      <FrontEnd />
      {/**VIDEOS DE BACK-END */}
      <BackEnd />
      {/**VÍDEOS MOBILE */}
      <Mobile />
      {/**Rodapé do site */}
      <Rodape />

    </div>
  );
}

export default App;
