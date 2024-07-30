import * as React from "react";
import { Header } from "./componentes/Header/index.js";
import { Home } from "./componentes/Home/index.js";

function App() {
  return (
    <div className="App text-zinc-50 text-xl antialiased">
      <div className="divide-y-4 divide-blue-700">
        {/**HEADER DO ALURAFLIX */}
        <Header />
        {/**CORPO DO SITE QUE IRÁ MUDAR */}
        <Home />
      </div>
    </div>
  );
}

export default App;
