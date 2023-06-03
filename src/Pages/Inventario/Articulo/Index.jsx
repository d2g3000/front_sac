import {useContext } from 'react'
import Layout from '../../../Components/Layout/Index'
import { UseArticulo } from '../../../Hooks/UseArticulo/Index'

function Articulo(){
    const {articulo}=UseArticulo();

    return(
       <Layout>
           <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4' >
            <h2 className='text-2xl text-center'> Articulos </h2> 
            </div>
            <div >
                <table className='flex flex-col col-5  text-sm text-center text-gray-500 dark:text-gray-400 ' >
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400' >
                        <tr>
                        <td scope="col" className="px-3 py-3">Codigo</td>
                        <td scope="col" className="px-3 py-3">descripcion</td>
                        <td scope="col" className="px-3 py-3">unidad</td>
                    
                        </tr>
                    </thead>
            <tbody>
             
        {
          articulo?.data.map((i,index)=>{

            return(
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"key={index}>
                    <td scope="col" className="px-3 py-3">{i.coarticulo}</td>
                    <td scope="col" className="px-3 py-3">{i.desarticulo}</td>
                    <td scope="col" className="px-3 py-3">{i.unidad}</td>
                
           
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

export default Articulo