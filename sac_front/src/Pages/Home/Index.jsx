import  { useState } from "react";
import {BsArrowLeftShort,BsChevronDown,BsFillGridFill } from "react-icons/bs"
import {BsFillBuildingsFill} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"
BsSearch
import Layout from '../../Components/Layout'



function Home() {
  const [open,setOpen]=useState(true);
  const [subMenu,setSubMenu]=useState(false);
  const Menus = [
{title:"Ventas",
subMenu:true,
subMenuItems:[
  {title:"Clientes"},
  {title:"Factura de ventas"},
  {title:"Notas de credito"},
],},
{title:"Compras"},
{title:"Bancos"},
{title:"Dashboard"},
{title:"Calendarios"},


  ];
  return (
   
  <Layout>

    <div className="flex">
      <div className={`h-screen p-5 pt-8 ${open ? "w-72":"w-20"} bg-gray-500 relative`}>
      <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute 
      -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
      <div className="inline-flex">
      <BsFillBuildingsFill className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
        <h3 className={` duration-100 ${!open && "scale-0"}`}>
        SISTEMA ADMINISTRATIVO CENTRALIZADO
        </h3>
        
      </div>
      <div className="flex items-center rounded-md bg-stone-400 mt-6 px-4 py-2">
      <BsSearch className="text-white"/>
      <input type={"search"} placeholder="Search" className="text-base bg-transparent w-full text-white focus:outline-none" />
      </div>
      <ul className="pt-2">
     
        {Menus.map((menu,index)=>(
          <>
          
  
              <li className={`text-gray-200 text-sm
               flex gap-x-4 cursor-pointer p-2
               hover:bg-gray-600 rounded-md mt-2 `} key={index}> <BsFillGridFill/><span className={`${!open && "hidden"}`} >{menu.title}</span>
               { menu.subMenu &&(
                <BsChevronDown onClick={()=>setSubMenu(!subMenu)}/>
               )}
               
               </li>
               {menu.subMenu && subMenu && (
                <ul>
                  {menu.subMenuItems.map((x,i)=>(
                    <li key={i}>
                     
                      {x.title}

                    </li>
                  ))}
                </ul>
               )}
              </>
        ))}
        
      </ul>
      </div>
      <div className="p-7"><h1 className="text-2xl ">Inico SAC </h1></div>
    </div>
  </Layout>
 
  )
}

export default Home