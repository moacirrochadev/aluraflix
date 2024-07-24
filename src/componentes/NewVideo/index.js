import { Header } from "../Header";

export function NewVideo() {
  return (
    <>
      <Header />
      <div className="w-[1440px] h-[1442px] flex flex-col items-center">
        <div className="m-10 flex flex-col gap-3">
          <h1 className="text-6xl text-zinc-200 text-center font-black">
            NOVO VÍDEO
          </h1>
          <p className="text-xl text-zinc-200 text-center">
            Complete o formulário para criar um novo card de vídeo.
          </p>
        </div>

        <div className="w-[1172px]">
          <h2 className="w-[1172px] py-8 text-4xl text-zinc-200 font-semibold border-y-2 border-zinc-700">
            Criar Card
          </h2>
          <form className="text-zinc-200 flex gap-5">
            <div className="flex flex-col gap-2 w-[470px]">
              <label className="text-xl font-semibold">Título</label>
              <input
                className="p-2 text-zinc-600 bg-zinc-800 border border-zinc-600"
                type="text"
                placeholder="Digite o título"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold">Categoria</label>
              <select
                className="w-[572px] p-2 text-zinc-400 bg-zinc-800 border border-zinc-600"
                placeholder="Selecione uma categoria"
              >
                <option>Selecione uma categoria</option>
                <option>FRONT END</option>
                <option>BACK END</option>
                <option>MOBILE</option>
              </select>
            </div>
          </form>

          <form className="mt-10 text-zinc-200 flex justify-between">
            <div className="flex flex-col gap-2 w-[470px]">
              <label className="text-xl font-semibold">Imagem</label>
              <input
                className="w-[573px] p-2 text-zinc-600 bg-zinc-800 border border-zinc-600"
                type="url"
                placeholder="O link é obrigatório"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold">Vídeo</label>
              <input
                className="w-[573px] p-2 text-zinc-600 bg-zinc-800 border border-zinc-600"
                type="url"
                placeholder="Digite o link do vídeo"
                required
              />
            </div>
          </form>
          <div className="w-[573px] mt-10 flex flex-col gap-2 text-xl font-semibold text-zinc-200">
            <label>Descrição</label>
            <textarea
              className="p-2 resize-none rounded text-zinc-600 bg-zinc-800 border-2 border-zinc-600"
              name="descrição"
              rows={10}
              cols={30}
            >
              Sobre o que é este vídeo?
            </textarea>
          </div>
          <div className="flex gap-8 mt-10 text-zinc-200 font-semibold">
            <button className="w-44 p-2 border-2 border-zinc-200 rounded-lg">GUARDAR</button>
            <button className="w-44 p-2 border-2 rounded-lg">LIMPAR</button>
          </div>
        </div>
      </div>
    </>
  );
}
