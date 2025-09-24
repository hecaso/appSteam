

function Ficha() {
  return (
    <div className="w-[70%] flex justify-between  bg-white p-4 rounded-2xl shadow-[5px_5px_10px_black]">
        <div className="w-[20%] h-[15vh] flex justify-center items-center">
            <img src="./public/vite.svg" className="w-full h-full" alt="" />
        </div>
        <div className="w-[80%] ">
            <f1>Title</f1>
            <p>descrpción</p>

        </div>
    </div>
  )
}

export default Ficha