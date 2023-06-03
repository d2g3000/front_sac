import { useState,useEffect } from 'react'



export const UseCliente =()=>{
   
    const [cliente, setCliente] = useState(null)
   
    useEffect(() => {
        fetch('https://d2g3000.000webhostapp.com/api/v1/clientes')
          .then(response => response.json())
          .then(data => setCliente(data))
         
      }, [])
    
    return {
        cliente,
    }
}