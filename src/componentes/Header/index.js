import logo from "../../assets/logo.png";

export function Header (){
  function handleClick(){
    alert("Você clicou no botão!");
  }

    return (
      <div>
        <header className="flex items-center justify-between p-8">
          <img src={logo} alt="Logo" />
          <nav className="flex gap-8 border-4justify-between">
            <button
              onClick={handleClick}
              className="text-zinc-200 text-2xl font-semibold w-[180px] p-2 border-4 border-blue-700 rounded-2xl"
            >
              HOME
            </button>
            <button
              onClick={handleClick}
              className="text-zinc-200 text-2xl font-semibold w-[180px] p-2 border-4 border-blue-700 rounded-2xl"
            >
              NOVO VÍDEO
            </button>
          </nav>
        </header>
      </div>
    );
}