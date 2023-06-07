import {useContext } from 'react'
import Layout from '../../../Components/Layout/Index'

import { useAuth } from '../../../auth/auth'
import { Navigate } from 'react-router-dom'

function CotizacionCompra(){
    const auth=useAuth()

    if(!auth.user){
        return  <Navigate to='/login'/>
    }


    return(
       <Layout>
        CotizacionCompra
       </Layout>
       
   
    )
}

export default CotizacionCompra