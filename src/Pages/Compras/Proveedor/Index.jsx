import {useContext } from 'react'
import Layout from '../../../Components/Layout/Index'
import { UseProveedor } from '../../../Hooks/UseProveedor/Index'

function Proveedor(){
    const {proveedor}=UseProveedor();

    return(
       <Layout>
                   <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4' >
            <h2 className='text-2xl text-center'> Proveedores </h2> 
            </div>
            <div >
                <table className='flex flex-col col-5  text-sm text-center text-gray-500 dark:text-gray-400 ' >
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400' >
                        <tr>
                        <td scope="col" className="px-6 py-3">Codigo</td>
                        <td scope="col" className="px-6 py-3">Nombre</td>
                        <td scope="col" className="px-6 py-3">RIF</td>
                        <td scope="col" className="px-6 py-3">Direccion</td>
                        <td scope="col" className="px-6 py-3">Telefono</td>
                        </tr>
                    </thead>
            <tbody>
             
        {
          proveedor?.data.map((i,index)=>{

            return(
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"key={index}>
                    <td scope="col" className="px-6 py-3">{i.coproveedor}</td>
                    <td scope="col" className="px-6 py-3">{i.descripcionproveedor}</td>
                    <td scope="col" className="px-6 py-3">{i.rif}</td>
                    <td scope="col" className="px-6 py-3">{i.direccion}</td>
                    <td scope="col" className="px-6 py-3">{i.telefono}</td>
           
                </tr>
            )
          }
          
            )
          
        }
        </tbody>
               </table>

            </div>
       </Layout>
       
   
    )
}

export default Proveedor