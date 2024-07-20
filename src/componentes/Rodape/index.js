import fotoLogo from "../../assets/logo.png";

export default function Rodape(){
    return (
        <footer className="flex items-center flex-col bg-zinc-800 p-8 border-2 border-t-sky-500">
            <img className="p-2" src={fotoLogo} alt="Foto da logomarca da Aluraflix" />
            <p className="text-zinc-200 text-lg font-bold p-2">Desenvolvido por @moacirrochadev</p>
        </footer>
    )
}