import logoFoto from "../../assets/logo.png";
import fotoBanner from "../../assets/player-banner.png";
import video1 from "../../assets/image 7.png";
import video2 from "../../assets/image 7-1.png";
import video3 from "../../assets/image 7-2.png";
import video4 from "../../assets/image 8.png";
import video5 from "../../assets/image 8-1.png";
import video6 from "../../assets/image 8-2.png";
import video7 from "../../assets/image 9.png";
import video8 from "../../assets/image 9-1.png";
import video9 from "../../assets/image 9-2.png";
import { PencilLine, Trash2 } from "lucide-react";

export function Home() {
  return (
    <>
      {/**BANNER PRINCIPAL */}
      <div>
        <div
          className="lg:h-[744px] lg:w-full flex "
          style={{ backgroundImage: `url(${fotoBanner})` }}
        >
          <div className="p-4 flex items-end justify-evenly gap-2 bg-transparent">
            <div className="w-1/2 flex flex-col bg-transparent">
              <div className="bg-transparent p-2">
                <span className="bg-blue-700 font-black rounded-md lg:px-8 px-4 lg:py-2 py-1">
                  FRONT END
                </span>
              </div>
              <h2 className="bg-transparent p-2 font-black">SEO com React</h2>
              <p className="bg-transparent p-2 text-xs lg:text-lg">
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
                começar uma app inspirada no desenho Pokémon com Nextjs e React,
                ver algumas dicas sobre performance e de quebra conhecer uma
                plataforma sensacional pra fazer deploy que é a Vercel. Tudo em
                22 minutos nesse vídeo feito com todo o carinho do mundo
                construindo uma "Pokedex"!
              </p>
            </div>
            <div className="w-1/2 bg-transparent">
              <img className="" src={fotoBanner} alt="Foto da notícia" />
            </div>
          </div>
        </div>
      </div>
      {/**VÍDEOS DE FRONT-END */}
      <div className="flex flex-col items-center">
        <span className="lg:w-[432px] mt-4 text-center font-black bg-blue-400 rounded-md px-8 py-1 lg:p-2">
          FRONT END
        </span>
        {/**área dos cards */}
        <div className="overscroll-none flex">
          <div className="m-2">
            <img src={video1} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
          <div className="m-2">
            <img src={video2} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
          <div className="m-2">
            <img src={video3} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**VIDEOS DE BACK-END */}
      <div className="flex flex-col items-center">
        <span className="lg:w-[432px] mt-4 text-center font-black bg-green-400 rounded-md px-8 py-1 lg:p-2">
          BACK END
        </span>
        {/**área dos cards */}
        <div className="overscroll-none flex">
          <div className="m-2">
            <img src={video4} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
          <div className="m-2">
            <img src={video5} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
          <div className="m-2">
            <img src={video6} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**VÍDEOS MOBILE */}
      <div className="flex flex-col items-center">
        <span className="lg:w-[432px] mt-4 text-center font-black bg-orange-400 rounded-md px-8 py-1 lg:p-2">
          MOBILE
        </span>
        {/**área dos cards */}
        <div className="overscroll-none flex">
          <div className="m-2">
            <img src={video7} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
          <div className="m-2">
            <img src={video8} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
          <div className="m-2">
            <img src={video9} alt="Vídeo" />
            <div className="flex items-center justify-around">
              <button className="flex gap-2">
                <Trash2 />
                DELETAR
              </button>
              <button className="flex gap-2">
                <PencilLine />
                EDITAR
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**Rodapé do site */}
      <footer className="flex items-center flex-col lg:p-8">
        <img
          className="lg:p-2 pt-3"
          src={logoFoto}
          alt="Foto da logomarca da Aluraflix"
        />
        <p className="text-zinc-200 text-lg font-bold p-2">
          Desenvolvido por @moacirroneto
        </p>
      </footer>
    </>
  );
}
