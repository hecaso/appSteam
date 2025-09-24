import { useForm } from 'react-hook-form'

function FormComponentes( {onCancel, onAdd} ) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  console.log(errors)
  
  const onSubmit = handleSubmit((data) => {

    console.log(data)

    const user = prompt('Ingrese el nombre de la persona que agrega el componente.');

    // si el usuario cancela el prompt
    if (user === null) {
      alert("se canceló la acción")
      return;
    }

    // si el user deja campos vacios o solo espacioas
    if (user.trim() === "") {
      alert("Para continuar ingrese un nombre válido")
      return;
    }

    // si el usuario ingresa un nombre válido
    alert(`Componente agregado por:\n\n${user}.`)

    onCancel();

    const newComponente = {
      ...data,
      etiquetas: data.etiquetas.split(",").map((tag) => tag.trim()).filter((tag) => tag.length > 0), user,
    };

    onAdd(newComponente);
  });
  const inputEtiqueta = watch("etiquetas") || "";
  const arregloEtiqueta = inputEtiqueta.split(",").map((tag) => tag.trim()).filter((tag) => tag.length > 0);

  return (
    <div className="w-[650px] flex flex-col rounded-xl bg-white shadow-[5px_5px_10px_black]" >
      {/* {encabezado} */}
      <h1 className="font-sans font-extrabold text-3xl p-6" > Agregar Componentes</h1>

      {/* {contenido del formulario} */}
      <div className='relative w-full flex p-2 mb-14 space-x-3' >

        {/* {cuadro izquierdo} */}
        <div className='w-1/2 rounded-2xl shadow-[5px_5px_10px_gray]'>

          <div className='w-ful flex flex-col h-auto space-2' >
            {/* {form-left} */}
            <form onSubmit={onSubmit} className="w-full bg-white flex flex-col justify-center items-center space-x-4 border-1 p-6 rounded-2xl shadow-2xl ">

              <label htmlFor="nombre">Nombre
                <input type="text" maxLength={20}
                  {...register('nombre', {
                    required: {
                      value: true,
                      message: "Debe escribir un nombre"
                    },
                    minLength: {
                      value: 3,
                      message: "El nombre debe contener al menos 3 carácteres"
                    },
                    maxLength: {
                      value: 20,
                      message: "El nombre solo debe contener 20 carácteres"
                    }
                  })}
                  className=" w-full bg-[#DFDFDF] border p-2 rounded-2xl"
                  placeholder="Sensor ultrasonico HC-SR04" />
                {
                  errors.nombre && <span className='bg-amber-200 text-red-600 text-sm' >{errors.nombre.message}</span>
                }
              </label> <br />

              <label htmlFor="imagen">Imagen</label>
              <input type="text"
                {...register("imagen",
                  {
                    required: {
                      value: true,
                      message: "este campo es obligatorio"
                    },
                    pattern: {
                      value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)|data:image\/(?:png|jpg|jpeg|gif|svg|webp);base64,[A-Za-z0-9+/=]+)$/i,
                      message: "debe ingresar una ruta válida"
                    }
                  }
                )}
                className="w-full bg-[#DFDFDF] border p-2 rounded-2xl"
                placeholder="Sensor ultrasonico HC-SR04" />

              <label htmlFor="description">Descripción</label>
              <textarea name=""
                className="w-full bg-[#DFDFDF] border p-2 rounded-2xl"
                {...register("descripcion")} ></textarea>

              <label htmlFor="etiquetas">Etiquetas</label>
              <input type="text"
                {...register("etiquetas")}
                className="w-full bg-[#DFDFDF] border-1 p-2 rounded-2xl" />

              <div className="absolute bottom-[-45px] right-0 flex items-center w-full justify-center space-x-20 ">
                <button type='submit' className="bg-yellow-300 p-3 rounded-2xl border-1 shadow-yellow-500/55 cursor-pointer hover:bg-blue-200 ">Agregar</button>
                <button onClick={onCancel} type='buttom' className="bg-yellow-300 p-3 rounded-2xl border-1 shadow-yellow-500/55 cursor-pointer hover:bg-blue-200 " >Cancelar</button>
              </div>
            </form>

          </div>
        </div>

        {/* {cuadro right} */}
        <div className="w-1/2 px-5 h-auto border-1 rounded-2xl shadow-[5px_5px_10px_gray]" >
        <div className='space-y-4'>
          <h2 className="font-sans font-extrabold text-2xl text-center" >{watch("nombre") || "Nombre"}</h2>
          <div className=" w-full flex flex-col justify-center items-center space-y-6">
            <img src={watch("imagen") || "./public/vite.svg"} className="w-[40%]" alt="img-componente" />
            <p className="font-sans font-medium text-justify p-4 ">{watch("descripcion") || "Escribe una descripción aquí"}.</p>

            <div className="flex flex-wrap space-x-3 space-y-3" >
              {(arregloEtiqueta.length > 0) ? (arregloEtiqueta.map((tag, i) => (<span className=' bg-gray-300 rounded-xl p-1 border-1 ' key={i} >{tag}</span>))) : (<span> Ej: Módulo, Programación...</span>)}

              {/* <button className="p-2 bg-white rounded-2xl" >Sensor</button>
              <button className="p-2 bg-white rounded-2xl" >4 pines</button>
              <button className="p-2 bg-white rounded-2xl" >5v</button>
              <button className="p-2 bg-white rounded-2xl" >Ultrsonido</button>
              <button className="p-2 bg-white rounded-2xl" >Ultrasónico</button>
              <button className="p-2 bg-white rounded-2xl" >hc-sr04</button>
              <button className="p-2 bg-white rounded-2xl" >Echo</button>
              <button className="p-2 bg-white rounded-2xl" >Trig</button>
              <button className="p-2 bg-white rounded-2xl" >Cristal</button> */}

            </div>
          </div>

        </div>
        </div>








      </div>

    </div>


  )
}

export default FormComponentes