import { useState,useEffect } from 'react'



export const UseProveedor =()=>{
   
    const [proveedor, setProveedor] = useState(null)
   
    useEffect(() => {
        fetch('https://d2g3000.000webhostapp.com/api/v1/proveedors')
          .then(response => response.json())
          .then(data => setProveedor(data))
         
      }, [])
    
    return {
        proveedor,
    }
}