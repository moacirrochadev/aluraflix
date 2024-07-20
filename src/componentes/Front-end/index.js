import video1 from "../../assets/image 7.png";
import video2 from "../../assets/image 7-1.png";
import video3 from "../../assets/image 7-2.png";

export default function FrontEnd() {
  return (
    <div className="bg-zinc-800 p-8">
      <div className="flex flex-col gap-8">
        <p className="rounded-xl w-[432px] font-bold text-4xl text-zinc-200 text-center p-4 bg-blue-700">
          FRONT END
        </p>

        <div className="w-full flex justify-between">
          <div className="w-[432px]">
            <div className="w-full border-4 border-blue-700">
              <img src={video1} alt="" />
              <div className="flex items-center justify-around">
                <button className="text-zinc-200 text-2xl flex items-center gap-2">
                  {/**<Trash2 /> */} DELETAR
                </button>
                <button className="text-zinc-200 text-2xl flex items-center gap-2">
                  {/**<PencilLine /> */} EDITAR
                </button>
              </div>
            </div>
          </div>

          <div className="w-[432px]">
            <div className="w-full border-4 border-blue-700">
              <img src={video2} alt="" />
              <div className="flex items-center justify-around">
                <button className="text-zinc-200 text-2xl flex items-center gap-2">
                  {/**<Trash2 /> */} DELETAR
                </button>
                <button className="text-zinc-200 text-2xl flex items-center gap-2">
                  {/**<PencilLine /> */} EDITAR
                </button>
              </div>
            </div>
          </div>
          <div className="w-[432px]">
            <div className="w-full border-4 border-blue-700">
              <img src={video3} alt="" />
              <div className="flex items-center justify-around">
                <button className="text-zinc-200 text-2xl flex items-center gap-2">
                  {/**<Trash2 /> */} DELETAR
                </button>
                <button className="text-zinc-200 text-2xl flex items-center gap-2">
                  {/**<PencilLine /> */} EDITAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
