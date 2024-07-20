import fotoBanner from "../../assets/player-banner.png";

export default function Banner(){
    return (
        <div className="h-[832px] bg-image bg-cover bg-no-repeat bg-fixed flex items-end" style={{ backgroundImage: `url(${fotoBanner})` }}>
            <div className="mx-6 mb-9 flex items-end justify-between flex-1">
                <div className="w-[665px] flex flex-col items-start gap-4 bg-zinc-700/25">
                    <span className="w-72 text-5xl text-zinc-200 font-bold p-4 bg-blue-700 rounded">FRONT END</span>
                    <h2 className="text-zinc-200 font-bold text-3xl">SEO com React</h2>
                    <p className="text-zinc-200 text-lg text-left font-semibold">Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
                    </p>
                </div>
                <div className="w-[665px]">
                    <img src={fotoBanner} alt="Foto da notícia" />
                </div>
            </div>
        </div>
    )
}