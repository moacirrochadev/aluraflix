// eslint-disable-next-line no-unused-vars
import logoImage from "../../assets/logo.png";

export default function Header() {
    return (
        <header className="bg-zinc-700 text-white w-full h-32 p-8 flex items-center justify-between">
            <div className="p-4">
                <img className="w-60" src={logoImage} alt="Logo aluraflix" />
            </div>
            <nav className="flex gap-6">
                <button className="w-44 text-2xl font-bold border-4 border-blue-700 rounded-lg p-4">HOME</button>
                <button className="w-44 text-xl font-bold border-4 border-blue-700 rounded-lg p-4">NOVO VÍDEO</button>
            </nav>
        </header>
    )
}