import { useState } from "react";
import Layout from '../../../Components/Layout/Index'
//import { UseCliente } from '../../../Hooks/UseCliente/Index'
import UseFetch from '../../../Hooks/UseFetch/Index'
import { useAuth } from '../../../auth/auth'
import { Navigate } from 'react-router-dom'

function Cliente(){

  const auth=useAuth()
  const [showModal, setShowModal] = useState(false)
    if(!auth.user){
        return  <Navigate to='/login'/>
    }

    const [cliente] = UseFetch("https://d2g3000.000webhostapp.com/api/v1/clientes");
   // const {cliente}=UseCliente();


    return(
       <Layout>

<div className="w-21">
      <button
        className="bg-gray-200 text-black text-sm active:bg-gray-500 w-30 
      font-bold px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Crear cliente
      </button>
      </div>

                   <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4' >
            <h2 className='text-2xl text-center'> Clientes </h2> 
            </div>
            <div >
                <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400 ' >
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400' >
                        <tr>
                        <td scope="col" className="px-6 py-3">Codigo</td>
                        <td scope="col" className="px-6 py-3">Nombre</td>
                        <td scope="col" className="px-6 py-3">RIF</td>
                        <td scope="col" className="px-6 py-3">Direccion</td>
                        <td scope="col" className="px-6 py-3">Telefono</td>
                        <td>Detalles</td>
                        <td>Modificar</td>
                        <td>Eliminar</td>
                        </tr>
                    </thead>
            <tbody>
             
        {
          cliente?.data.map((i,index)=>{

            return(
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"key={index}>
                    <td scope="col" className="px-6 py-3">{i.cocliente}</td>
                    <td scope="col" className="px-6 py-3">{i.descripcioncliente}</td>
                    <td scope="col" className="px-6 py-3">{i.rif}</td>
                    <td scope="col" className="px-6 py-3">{i.direccion}</td>
                    <td scope="col" className="px-6 py-3">{i.telefono}</td>
                    <td><button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
                         Detalles
                        </button>
                    </td>
                    <td><button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
                         Modificar
                        </button>
                    </td>
                    <td><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                         Eliminar
                        </button>
                    </td>
                </tr>
            )
          }
          
            )
          
        }
        </tbody>
               </table>

            </div>

            {
      showModal ? (
      
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Crear cliente</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                    Código
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                    Nombre
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                     Rif
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Dirección
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                    Teléfono
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      ) : <div>{null}</div>
      }
    
       </Layout>
       
   
    )
}

export default Cliente