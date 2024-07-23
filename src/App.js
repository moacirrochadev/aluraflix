import * as React from "react";
import logoFoto from "../src/assets/logo.png";
import fotoBanner from "../src/assets/player-banner.png";
import video1 from "./assets/image 7.png";
import video2 from "./assets/image 7-1.png";
import video3 from "./assets/image 7-2.png";
import video4 from "./assets/image 8.png";
import video5 from "./assets/image 8-1.png";
import video6 from "./assets/image 8-2.png";
import video7 from "./assets/image 9.png";
import video8 from "./assets/image 9-1.png";
import video9 from "./assets/image 9-2.png";
import { PencilLine, Trash2 } from "lucide-react";
import { Header } from "./componentes/Header";

function App() {
  return (
    <div className="App">
      <div className="w-[1440px] bg-zinc-800">
        {/**HEADER DO ALURAFLIX */}
        <Header />
        {/**BANNER PRINCIPAL */}
        <div
          className="h-[832px] bg-image bg-cover bg-no-repeat bg-fixed flex items-end"
          style={{ backgroundImage: `url(${fotoBanner})` }}
        >
          <div className="mx-6 mb-9 flex items-end justify-between flex-1">
            <div className="w-[665px] flex flex-col items-start gap-4 bg-zinc-700/25">
              <span className="w-72 text-5xl text-zinc-200 font-bold p-4 bg-blue-700 rounded">
                FRONT END
              </span>
              <h2 className="text-zinc-200 font-bold text-3xl">
                SEO com React
              </h2>
              <p className="text-zinc-200 text-lg text-left font-semibold">
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
                começar uma app inspirada no desenho Pokémon com Nextjs e React,
                ver algumas dicas sobre performance e de quebra conhecer uma
                plataforma sensacional pra fazer deploy que é a Vercel. Tudo em
                22 minutos nesse vídeo feito com todo o carinho do mundo
                construindo uma "Pokedex"!
              </p>
            </div>
            <div className="w-[665px]">
              <img src={fotoBanner} alt="Foto da notícia" />
            </div>
          </div>
        </div>
        {/**VÍDEOS DE FRONT-END */}
        <div className="p-8 flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-8 w-full">
            <p className="rounded-xl w-[432px] font-bold text-4xl text-zinc-200 text-center p-4 bg-blue-700">
              FRONT END
            </p>

            <div className="w-full flex justify-between">
              <div className="w-[432px] border-4 border-blue-700">
                <div className="flex flex-col items-center justify-center">
                  <img src={video1} alt="" />
                  <div className="flex p-2 gap-8">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[432px]">
                <div className="w-full border-4 border-blue-700">
                  <img src={video2} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[432px]">
                <div className="w-full border-4 border-blue-700">
                  <img src={video3} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-12 h-2 bg-zinc-700 border-2 border-zinc-700 rounded"></div>
        </div>
        {/**VIDEOS DE BACK-END */}
        <div className="p-8 flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-8 w-full">
            <p className="rounded-xl w-[432px] font-bold text-4xl text-zinc-200 text-center p-4 bg-green-700">
              BACK END
            </p>

            <div className="w-full flex justify-between">
              <div className="w-[432px]">
                <div className="w-full border-4 border-green-700">
                  <img src={video4} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[432px]">
                <div className="w-full border-4 border-green-700">
                  <img src={video5} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[432px]">
                <div className="w-full border-4 border-green-700">
                  <img src={video6} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-12 h-2 bg-zinc-700 border-2 border-zinc-700 rounded"></div>
        </div>
        {/**VÍDEOS MOBILE */}
        <div className="p-8 flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-8 w-full">
            <p className="rounded-xl w-[432px] font-bold text-4xl text-zinc-200 text-center p-4 bg-yellow-700">
              MOBILE
            </p>

            <div className="w-full flex justify-between">
              <div className="w-[432px]">
                <div className="w-full border-4 border-blue-700">
                  <img src={video7} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[432px]">
                <div className="w-full border-4 border-blue-700">
                  <img src={video8} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[432px]">
                <div className="w-full border-4 border-blue-700">
                  <img src={video9} alt="" />
                  <div className="p-2 flex items-center justify-evenly">
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <Trash2 /> DELETAR
                    </button>
                    <button className="text-zinc-200 text-2xl flex items-center gap-2">
                      <PencilLine /> EDITAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-12 h-2 bg-zinc-700 border-2 border-zinc-700 rounded"></div>
        </div>
        {/**Rodapé do site */}
        <footer className="flex items-center flex-col p-8">
          <img
            className="p-2"
            src={logoFoto}
            alt="Foto da logomarca da Aluraflix"
          />
          <p className="text-zinc-200 text-lg font-bold p-2">
            Desenvolvido por @moacirrochadev
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
