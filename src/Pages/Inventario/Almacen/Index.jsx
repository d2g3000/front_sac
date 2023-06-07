import {useContext } from 'react'
import Layout from '../../../Components/Layout/Index'
import { useAuth } from '../../../auth/auth'
import { Navigate } from 'react-router-dom'

function Almacen(){

    const auth=useAuth()

    if(!auth.user){
        return  <Navigate to='/login'/>
    }

    return(
       <Layout>
        Almacen
       </Layout>
       
   
    )
}

export default Almacen