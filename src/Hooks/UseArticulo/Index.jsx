import { useState,useEffect } from 'react'



export const UseArticulo =()=>{
   
    const [articulo, setArticulo] = useState(null)
   
    useEffect(() => {
        fetch('https://d2g3000.000webhostapp.com/api/v1/articulos')
          .then(response => response.json())
          .then(data => setArticulo(data))
         
      }, [])
    
    return {
        articulo,
    }
}