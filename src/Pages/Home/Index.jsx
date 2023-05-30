import  { useState } from "react";
import {BsArrowLeftShort,BsChevronDown,BsFillGridFill } from "react-icons/bs"
import {BsFillBuildingsFill} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"
import Layout from '../../Components/Layout/Index'



function Home() {
  const [open,setOpen]=useState(true);
  const [menuInventario,setMenuInventario]=useState(false);
  const [menuVentas,setMenuVentas]=useState(false);
  const [menuCompras,setMenuCompras]=useState(false);
  const inventario =   {
    title:"Inventario",
    menuInventario:true,
  subMenuItems:[
    {title:"Ajuste"},
    {title:"Traslado"},
    {title:"Artículo"},
    {title:"Sucursal"},
    {title:"Almacen"},
    {title:"Procedencia"},
  ],}

  const Ventas =   {
    title:"Ventas",
    menuVentas:true,
  subMenuItems:[
    {title:"Pedido"},
    {title:"Factura venta"},
    {title:"Cotizacion"},
    {title:"Devolucion"},
    {title:"Nota de entrega"},
    {title:"Despacho"},
    {title:"Cobro"},
    {title:"Cliente"},
  ],}

  const Compras =   {
    title:"Compras",
    menuCompras:true,
  subMenuItems:[
    {title:"Orden de Compra"},
    {title:"Factura compra"},
    {title:"Cotizacion"},
    {title:"Nota de recepcion"},
    {title:"Pago"},
    {title:"Proveedores"},
  ],}

  return (
   
  <Layout>

    <div className="flex">
      <div className={`h-screen p-5 pt-8 ${open ? "w-72":"w-20"} bg-gray-500 relative`}>
      <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute 
      -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
      <div className="inline-flex">
      <BsFillBuildingsFill className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
        <h3 className={` duration-100 ${!open && "scale-0"}`}>
        SISTEMA ADMINISTRATIVO CENTRALIZADO(SAC)
        </h3>
        
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
                <BsChevronDown onClick={()=>setMenuInventario(!menuInventario)}/>
               )}     
                  </li> 
               {inventario.menuInventario && menuInventario && (
                <ul>
                  {inventario.subMenuItems.map((x,i)=>(
                    <li key={i}>
                     
                      {x.title}

                    </li>
                  ))}
                </ul>
               )}
             
             <li className={`text-gray-200 text-sm
               flex gap-x-4 cursor-pointer p-2
               hover:bg-gray-600 rounded-md mt-2 `} > <BsFillGridFill/><span className={`${!open && "hidden"}`} >{Ventas.title}</span>
               { Ventas.menuVentas &&(
                <BsChevronDown onClick={()=>setMenuVentas(!menuVentas)}/>
               )}     
                  </li> 
               {Ventas.menuVentas && menuVentas && (
                <ul>
                  {Ventas.subMenuItems.map((x,i)=>(
                    <li key={i}>
                     
                      {x.title}

                    </li>
                  ))}
                </ul>
               )}

<li className={`text-gray-200 text-sm
               flex gap-x-4 cursor-pointer p-2
               hover:bg-gray-600 rounded-md mt-2 `} > <BsFillGridFill/><span className={`${!open && "hidden"}`} >{Compras.title}</span>
               { Compras.menuCompras &&(
                <BsChevronDown onClick={()=>setMenuCompras(!menuCompras)}/>
               )}     
                  </li> 
               {Compras.menuCompras && menuCompras && (
                <ul>
                  {Compras.subMenuItems.map((x,i)=>(
                    <li key={i}>
                     
                      {x.title}

                    </li>
                  ))}
                </ul>
               )}
             </>
       
      </ul>
      </div>
      <div className="p-7 justify-center"><h1 className="text-2xl">  SISTEMA ADMINISTRATIVO CENTRALIZADO(SAC) </h1></div>
    </div>
  </Layout>
 
  )
}

export default Home