import { useForm } from 'react-hook-form'

function FormComponentes() {

  const { register, handleSubmit, 
    formState: {errors}
   } = useForm();
   console.log(errors)
  const onSubmit = handleSubmit((data) => {

  console.log(data) 
})

  return (
    <div className="flex flex-col justify-center items-center p-6" >
      <h1 className="font-sans font-extrabold text-3xl p-6" >Agregar Componente</h1>


      <form onSubmit={onSubmit} className="w-[60%] bg-white flex flex-col justify-center items-center space-x-4 border-1 p-6 rounded-2xl shadow-2xl ">

        <div className='w-full flex justify-center items-center space-x-2'>

          <div className='w-full p-4 space-y-8'>
            <label htmlFor="nombre">Nombre
            <input type="text"
              {...register('nombre', {
                required: true
              })}
              className=" w-full bg-[#DFDFDF] border p-2 rounded-2xl"
              placeholder="Sensor ultrasonico HC-SR04" />
              {
                errors.nombre && <span className='bg-amber-200 text-red-600 text-sm' >Nombre es requerido</span>
              }
            </label> <br />

            <label htmlFor="imagen">Imagen</label>
            <input type="text"
              {...register("imagen")}
              className="w-full bg-[#DFDFDF] border p-2 rounded-2xl"
              placeholder="Sensor ultrasonico HC-SR04" />

            <label htmlFor="description">Descripción</label>
            <textarea name=""
              className="w-full bg-[#DFDFDF] border p-2 rounded-2xl"
              {...register("descropcion")} ></textarea>

            <label htmlFor="etiquetas">Etiquetas</label>
            <input type="text"
              {...register("etiquetas")}
              className="w-full bg-[#DFDFDF] border-1 p-2 rounded-2xl" />
          </div>

          <div className="w-full flex flex-col items-center space-y-6 border-1 p-6 rounded-2xl shadow-2xl " >
            <h2 className="font-sans font-extrabold text-2xl text-center" >Sensor Ultrasónico HC-SR04</h2>
            <div className="flex flex-col justify-center items-center space-y-5 ">
              <img src="./public/vite.svg" className="w-[40%]" alt="img-componente" />
              <p className="font-sans font-medium text-justify bg-white p-4 ">Dispositivo utilizado para medir distancias mediante ultrasonido. Funciona emitiendo un pulso ultrasónico y midiendo el tiempo que tarda en regresar después de rebotar en un objeto.</p>

              <div className="flex flex-wrap space-x-3 space-y-3" >
                <button className="p-2 bg-white rounded-2xl" >Sensor</button>
                <button className="p-2 bg-white rounded-2xl" >4 pines</button>
                <button className="p-2 bg-white rounded-2xl" >5v</button>
                <button className="p-2 bg-white rounded-2xl" >Ultrsonido</button>
                <button className="p-2 bg-white rounded-2xl" >Ultrasónico</button>
                <button className="p-2 bg-white rounded-2xl" >hc-sr04</button>
                <button className="p-2 bg-white rounded-2xl" >Echo</button>
                <button className="p-2 bg-white rounded-2xl" >Trig</button>
                <button className="p-2 bg-white rounded-2xl" >Cristal</button>

              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center space-x-30 p-5">
          <button className="bg-yellow-300 p-3 rounded-2xl border-1 shadow-yellow-500/55 cursor-pointer hover:bg-blue-200 " >Cancelar</button>
          <button type='submit' className="bg-yellow-300 p-3 rounded-2xl border-1 shadow-yellow-500/55 cursor-pointer hover:bg-blue-200 ">Agregar</button>
        </div>

      </form>

    </div>


  )
}

export default FormComponentes