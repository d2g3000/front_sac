import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import  { useState } from "react";
import {BsArrowLeftShort,BsChevronDown,BsFillGridFill } from "react-icons/bs"
import {BsFillBuildingsFill} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"
import {FcHome} from "react-icons/fc"
import { SacContext} from '../../Context/Index';


const Navbar = () => {
    const context = useContext(SacContext)

    const [open,setOpen]=useState(true);
    const [menuInventario,setMenuInventario]=useState(false);
    const [menuVentas,setMenuVentas]=useState(false);
    const [menuCompras,setMenuCompras]=useState(false);
    const inventario =   {
      title:"Inventario",
      menuInventario:true,
    subMenuItems:[
      {title:"Ajuste",navegacion:'/ajustes'},
      {title:"Traslado",navegacion:'/traslados'},
      {title:"Artículo",navegacion:'/articulos'},
      {title:"Sucursal",navegacion:'/sucursales'},
      {title:"Almacen",navegacion:'/almacenes'},
      {title:"Procedencia",navegacion:'/procedencias'},
    ],}
  
    const Ventas =   {
      title:"Ventas",
      menuVentas:true,
    subMenuItems:[
      {title:"Pedido",navegacion:'/pedidos'},
      {title:"Factura venta",navegacion:'/facturas-de-ventas'},
      {title:"Cotizacion",navegacion:'/cotizaciones'},
      {title:"Devolucion",navegacion:'/devoluciones'},
      {title:"Nota de entrega",navegacion:'/notas-de-entrega'},
      {title:"Despacho",navegacion:'/despachos'},
      {title:"Cobro",navegacion:'/cobros'},
      {title:"Cliente",navegacion:'/clientes'},
    ],}
  
    const Compras =   {
      title:"Compras",
      menuCompras:true,
    subMenuItems:[
      {title:"Orden de Compra",navegacion:'/ordenes-de-compra'},
      {title:"Factura compra",navegacion:'/facturas-de-compra'},
      {title:"Cotizacion",navegacion:'/cotizaciones'},
      {title:"Nota de recepcion",navegacion:'/notas-de-recepcion'},
      {title:"Pago",navegacion:'/pagos'},
      {title:"Proveedores",navegacion:'/proveedores'},
    ],}
return (

    <>
    
    <div className="flex ">
      <div className={`h-screen ss:p-1 sm:p-5 pt-8  ${open ? "w-60":"w-20"}   bg-gray-500 relative overflow-y-auto overflow-x-hidden`}>
      <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute 
      -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
      <div className="inline-flex">
      <BsFillBuildingsFill className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
        <h3 className={` duration-100 ${!open && "scale-0"}`}>
        SISTEMA ADMINISTRATIVO CENTRALIZADO(SAC)
        </h3>
        </div>
        <div className='mt-2 items-center'>

     
        <NavLink
              to='/'
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }} caseSensitive>
                <FcHome className='cursor-pointer block float-left mr-2'/>
           Home

            </NavLink>
            </div>
      <div className="flex items-center rounded-md bg-stone-400 mt-6 px-4 py-2">
      <BsSearch className="text-white"/>
      <input type={"search"} placeholder="Search" className="text-base bg-transparent w-full text-white focus:outline-none" />
      </div>
      <ul className="pt-2">
        <>
      <li className={`text-gray-200 text-sm
               flex gap-x-4 cursor-pointer p-2
               hover:bg-gray-600 rounded-md mt-2 `} > <BsFillGridFill/><span className={`${!open && "hidden"}`} >{inventario.title}</span>
               { inventario.menuInventario &&(
                <BsChevronDown onClick={()=>context.setMenuInventarioOpen(!context.isMenuInventarioOpen)}/>
               )}     
                  </li> 
               {inventario.menuInventario && context.isMenuInventarioOpen && (
                <ul className={`${!open && "hidden"}`}>
                  {inventario.subMenuItems.map((x,i)=>(
                    <li key={i}>
                     
                     <NavLink
              to={x.navegacion}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }} caseSensitive>
              {x.title}

            </NavLink>

                    </li>
                  ))}
                </ul>
               )}
             
             <li className={`text-gray-200 text-sm
               flex gap-x-4 cursor-pointer p-2
               hover:bg-gray-600 rounded-md mt-2 `} > <BsFillGridFill/><span className={`${!open && "hidden"}`} >{Ventas.title}</span>
               { Ventas.menuVentas &&(
                <BsChevronDown onClick={()=>context.setMenuVentasOpen(!context.isMenuVentasOpen)}/>
               )}     
                  </li> 
               {Ventas.menuVentas && context.isMenuVentasOpen && (
                <ul className={`${!open && "hidden"}`}>
                  {Ventas.subMenuItems.map((x,i)=>(
                    <li key={i}>
                     
                            <NavLink
              to={x.navegacion}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }} caseSensitive>
              {x.title}

            </NavLink>

                    </li>
                  ))}
                </ul>
               )}

<li className={`text-gray-200 text-sm
               flex gap-x-4 cursor-pointer p-2
               hover:bg-gray-600 rounded-md mt-2 `} > <BsFillGridFill/><span className={`${!open && "hidden"}`} >{Compras.title}</span>
               { Compras.menuCompras &&(
                <BsChevronDown onClick={()=>context.setMenuComprasOpen(!context.isMenuComprasOpen)}/>
               )}     
                  </li> 
               {Compras.menuCompras && context.isMenuComprasOpen && (
                <ul className={`${!open && "hidden"}`}>
                  {Compras.subMenuItems.map((x,i)=>(
                    <li key={i}>
                     
                     <NavLink
              to={x.navegacion}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }} caseSensitive>
              {x.title}

            </NavLink>

                    </li>
                  ))}
                </ul>
               )}
             </>
       
      </ul>
      </div>
      </div>
    </>
)

}
export default Navbar