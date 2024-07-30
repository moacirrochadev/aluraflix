import banner from "../../assets/player-banner.png";

export default function Banner(){
    return (
      <div
        className=""
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="">
          <div className="">
            <div className="">
              <span className="">
                
              </span>
              <h2 className="">
                SEO com React
              </h2>
              <p className="">
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
                começar uma app inspirada no desenho Pokémon com Nextjs e React,
                ver algumas dicas sobre performance e de quebra conhecer uma
                plataforma sensacional pra fazer deploy que é a Vercel. Tudo em
                22 minutos nesse vídeo feito com todo o carinho do mundo
                construindo uma "Pokedex"!
              </p>
            </div>
            <div className="">
              <img src={banner} alt="Foto da notícia" />
            </div>
          </div>
        </div>
      </div>
    );
}