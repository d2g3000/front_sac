import {useContext } from 'react'
import Layout from '../../../Components/Layout/Index'
import { useAuth } from '../../../auth/auth'
import { Navigate } from 'react-router-dom'

function Ajuste(){
    const auth=useAuth()

    if(!auth.user){
        return  <Navigate to='/login'/>
    }


    return(
       <Layout>
        Ajuste
       </Layout>
       
   
    )
}

export default Ajuste