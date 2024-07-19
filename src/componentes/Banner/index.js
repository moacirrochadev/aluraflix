import fotoBanner from "../../assets/player-banner.png";

export default function Banner () {
    return (
        <div className="bg-image bg-cover bg-no-repeat h-[800px] flex items-end justify-between" style={{ backgroundImage: `url(${fotoBanner})` }}>
            <div className="mx-6 mb-9 flex items-end justify-between flex-1">
                <div className="w-[670px] p-8 bg-zinc-600/50 flex flex-col gap-4">
                <button className="w-44 text-zinc-200 text-2xl font-bold border-none bg-blue-700 rounded-lg p-4">FRONTEND</button>
                <h3 className="text-zinc-200 font-bold text-5xl">SEO com React</h3>
                <p className="text-zinc-200 text-lg font-semibold">Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <div className="bg-image bg-cover bg-no-repeat h-[646px] flex items-end">
                <img className="w-[680px]" src={fotoBanner} alt="Foto de capa da categoria dos vídeos" />
            </div>
            </div>
        </div>
    )
}