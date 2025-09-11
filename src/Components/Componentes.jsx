import FormComponentes from "./FormComponentes"

function Componentes() {
  return (
    <>

      <div className="w-[80%] flex flex-row justify-evenly items-center space-x-4 pt-6" >
        <div className=" w-[60%] flex justify-between bg-gray-50 border-1 rounded-2xl p-2 space-x-2" >
          <input type="search" placeholder="Sensor Ultrasonico" className="w-[90%] p-2 border-1 rounded-2xl" />
          <img src="./public/svg/search.svg" alt="" />
        </div>

        <div className="flex relative" >
          <img src="./public/svg/list.svg" className="bg-gray-400 p-2 rounded-md  " alt="" />
          <img src="./public/svg/cuadricula.svg" className="bg-white p-2 rounded-md  absolute ml-12" alt="" />
        </div>

        <div className="flex relative" >
          <h3 className="w-[50px] h-[50px] bg-gray-400 flex justify-center items-center font-black text-4xl rounded-md" >A</h3>
          <h3 className="w-[50px] h-[50px] bg-white flex justify-center items-center font-black text-4xl rounded-md absolute ml-10" >Z</h3>
        </div>

      </div>
      <FormComponentes/>

      
    </>
  )
}

export default Componentes