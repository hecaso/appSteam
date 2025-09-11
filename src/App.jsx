import { BrowserRouter, Routes, Route, Link, matchPath, Outlet } from "react-router-dom"
import './App.css'
import Home from "./Components/Home.jsx"
import Panel from "./Components/Panel.jsx"
import Componentes from './Components/Componentes.jsx';
import Inventarios from './Components/Inventarios.jsx';
import Historial from './Components/Historial.jsx';
import Kits from "./Components/Kits.jsx";
import Pedidos from "./Components/Pedidos.jsx";
import Setting from "./Components/Setting.jsx";
import Abastos from "./Components/Abastos.jsx"
import { useState } from "react";

const NavItem = ({ children, VoyA, posicion=0, CambiarPosicion= ()=> {} }) => {
  return (
    <li className='text-black cursor-pointer hover:bg-white/50 p-2' >
      <Link to={VoyA} onClick={() => {CambiarPosicion(posicion)}} >{children}</Link>
    </li>
  );
};

const NavMenu = ({ VoyA, children, items }) => {
  return (
    <div className='flex flex-col relative items-center' >
      <NavItem VoyA={VoyA}>{children}</NavItem>
      <ul className='bg-black absolute hidden group-hover:block' >
        {items.map((item, index) => {
          const ruta = VoyA + item.VoyA;
          return
          <NavItem key={index} VoyA={ruta}> {item.nombre} </NavItem>
        })}
      </ul>

    </div>
  )
}

const pestañas = {
  panel: {nombre: "Panel Estadísticas", componente: <Panel/>},
  componentes: {nombre: "Componentes", componente: <Componentes/>},
  inventario: {nombre: "Inventarios", componente: <Inventarios/>},
  abastos: {nombre: "Abastos", componente: <Abastos/>},
  pedidos: {nombre: "Pedidos", componente: <Pedidos/>},
  historial: {nombre: "Historial", componente: <Historial/>},
  kits: {nombre: "Kits", componente: <Kits/>},
  setting: {nombre: "Ajustes", componente: <Setting/>},
}

function App() {
//  const  [posicion, setPosicion] = useState(0)

 const hook = useState(0)

 const posicion = hook[0]
 const setPosicion = hook[1]




  return (
    <BrowserRouter>
      <header className='w-25 h-[100vh] flex flex-col justify-evenly items-center p-1 bg-black' >

        <nav className="size-full flex flex-col justify-between" >
          <ul className='size-full flex flex-col justify-between '>
            <NavItem VoyA="/" CambiarPosicion={setPosicion}><img src="./public/svg/steam.svg"  alt="logo-steam" /></NavItem>
            <div className="flex flex-col justify-evenly items-center space-y-4 bg-red">
              {Object.entries(pestañas).map((pestaña, index) => {
                if (pestaña[0] != "setting"){
                  
                  return (
                    <NavItem key={index} posicion={index} CambiarPosicion={setPosicion} VoyA={"/" + pestaña[0]} > <img src={"./public/svg/" + pestaña[0] + ".svg"} alt="" /> </NavItem>
                  )
                }
              })}
              {/* <NavItem VoyA="/panel"><img src="./public/svg/panel.svg" alt="logo-panel" /></NavItem>
              <NavItem VoyA="/componentes"><img src="./public/svg/componentes.svg" alt="logo-componentes" /></NavItem>
              <NavItem VoyA="/inventario"><img src="./public/svg/inventario.svg" alt="logo-inventarios" /></NavItem>
              <NavItem VoyA="/abastos"><img src="./public/svg/abastos.svg" alt="logo-abastos" /></NavItem>
              <NavItem VoyA="/pedidos"><img src="./public/svg/pedidos.svg" alt="logo-pedidos" /></NavItem>
              <NavItem VoyA="/historial"><img src="./public/svg/historial.svg" alt="logo-historial" /></NavItem>
              <NavItem VoyA="/kits"><img src="./public/svg/kits.svg" alt="logo-kits" /></NavItem> */}
            </div>
            <NavItem VoyA="/setting" posicion={-1} CambiarPosicion={setPosicion} ><img src="./public/svg/setting.svg" alt="logo-steam" /></NavItem>
          </ul>
        </nav>

      </header>

      <Routes>
        <Route path="/" element={
          <div className="w-full" >
            <div className="w-full bg-white h-12 flex justify-end items-center px-10" >
              <h1 className="text-black font-extrabold text-4xl" >{Object.entries(pestañas).at(posicion)[1].nombre }</h1>
            </div>
            <Outlet/>
          </div>
        }>
          <Route path="/" element={<Panel />} />
          {Object.entries(pestañas).map(pestaña => {
            return (
              <Route path={"/" + pestaña[0]} element={pestaña[1].componente} />
            )
          })}
          {/* <Route path="/" element={<Panel />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/componentes" element={<Componentes />} />
          <Route path="/inventario" element={<Inventarios />} />
          <Route path="/abastos" element={<Abastos />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/setting" element={<Setting />} />        */}

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
