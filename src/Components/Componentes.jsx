import { useState } from "react"
import FormComponentes from "./FormComponentes"
import ficha from "./Ficha"
import Ficha from "./Ficha";

function Componentes() {
  const [showModal, setShowModal] = useState(false);
  const [Componentes, setComponentes] = useState([]);
  const [viewMode, SetViewMode] = useState("list");
  const [abc, setAbc] = useState("A");

  const handleAddComponent = (nuevo) => {
    setComponentes([...Componentes, nuevo]);
    setShowModal(false);
  }

  return (
    <>

    <div className="flex flex-col justify-center items-center space-y-6">

      <div className="w-[80%] flex flex-row justify-evenly items-center space-x-4 pt-6" >
        <div className=" w-[60%] flex justify-between bg-gray-50 border-1 rounded-4xl p-2 space-x-2" >
          <input type="search" placeholder="Sensor Ultrasonico" className="w-[90%] p-2" />
          <button className="pr-4"><img src="./public/svg/search.svg" className="w-[40px] h-[40px] " alt="" /></button>
        </div>

        <div className="flex justify-center items-center border-2 border-black rounded-lg p-2" >
          <button 
            onClick={() => SetViewMode("list")}
            className={`w-12 h-12 flex justify-center items-center rounded-md ${(viewMode === "list" ? "bg-white" : "bg-black/50")}`}><img src="./public/svg/list.svg" alt="list" />
          </button>

          <button
            onClick={() => SetViewMode("cuadricula")}
            className={`w-12 h-12 flex justify-center items-center rounded-md ${(viewMode === "list" ? "bg-black/50" : "bg-white")}`}><img src="./public/svg/cuadricula.svg" alt="" />
          </button>
        </div>

        <div className="flex justify-center items-center border-2 border-black rounded-lg p-2" >
          <button
          onClick={() => setAbc("A")}
            className={`w-12 h-12 flex justify-center items-center rounded-md ${(abc === "A" ? "bg-white" : "bg-black/50")}`}><h1 className="text-4xl">A</h1>
          </button>
          <button
          onClick={() => setAbc("Z")}
            className={`w-12 h-12 flex justify-center items-center rounded-md ${(abc === "A" ? "bg-black/50" : "bg-white")}`}><h1 className="text-4xl">Z</h1>
          </button>
          {/* <h3 className="w-[50px] h-[50px] bg-gray-400 flex justify-center items-center font-black text-4xl rounded-md" >A</h3> */}
          {/* <h3 className="w-[50px] h-[50px] bg-white flex justify-center items-center font-black text-4xl rounded-md absolute ml-10" >Z</h3> */}
        </div>


        {/* {boton Add} */}
        <button onClick={() => setShowModal(true)} className="fixed bottom-[22px] right-[20px] bg-white border-1 p-2 rounded-full shadow-lg" ><img src="./public/svg/Add.svg" alt="Add" /> </button>

        {/* {Modal} */}

        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/50 z-50">

            <div>
              <FormComponentes onCancel={() => setShowModal(false)} onAdd={handleAddComponent} />

              {/* {boton cerrar} */}
              <button onClick={() => setShowModal(false)} className="absolute bottom-[22px] right-[33px] bg-white border-1 p-2 w-[55px] h-[55px] rounded-full shadow-lg" > <img src="./public/svg/Delete.svg" alt="" /> </button>


            </div>
          </div>
        )}

      </div>

      <Ficha />
    </div>






    </>
  )
}

export default Componentes