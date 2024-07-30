import logo from "../../assets/logo.png";

export function Header (){
  function handleClick(){
    alert("Você clicou no botão!");
  }

    return (
      <div>
        <nav className="flex items-center justify-between p-4 bg-zinc-800">
          <a href="/">
            <img src={logo} alt="Logo" className="w-32 lg:w-44 bg-zinc-800" />
          </a>
          <div className="flex gap-x-2 bg-zinc-800">
            <a
              href="/"
              className="text-base lg:text-xl lg:text-center font-black lg:w-44 border-4 border-blue-700 hover:bg-zinc-600 bg-zinc-800 rounded-lg px-2"
            >
              HOME
            </a>
            <a
              href="/"
              className="text-base lg:text-xl lg:text-center font-black lg:w-44 border-4 border-blue-700 hover:bg-zinc-600 bg-zinc-800 rounded-lg px-2"
            >
              NOVO VÍDEO
            </a>
          </div>
        </nav>
      </div>
    );
}