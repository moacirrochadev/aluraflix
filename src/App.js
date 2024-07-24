import * as React from "react";
import { Header } from "./componentes/Header";
import { Home } from "./componentes/Home/index.js";

function App() {
  return (
    <div className="App">
      <div className="w-[1440px] bg-zinc-800">
        {/**HEADER DO ALURAFLIX */}
        <Header />
        {/**CORPO DO SITE QUE IRÁ MUDAR */}
        <Home />
      </div>
    </div>
  );
}

export default App;
