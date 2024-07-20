import logoFoto from "../../assets/logo.png";

export default function Header(){
    return (
        <header className="flex items-center justify-between p-8 bg-zinc-900">
        <img className="w-32" src={logoFoto} alt="" />
        <nav className="flex gap-8">
          <button className="text-zinc-200 text-2xl font-semibold p-2 border-4 border-blue-700">HOME</button>
          <button className="w-46 text-zinc-200 text-2xl font-semibold p-2 border-4 border-blue-700">NOVO VÍDEO</button>
        </nav>
      </header>
    )
}