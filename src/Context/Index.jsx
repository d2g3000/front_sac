import { data } from 'autoprefixer'
import { createContext,useState,useEffect } from 'react'

export const SacContext = createContext()


export const SacProvider = ({children}) => {

    const [isMenuVentasOpen,setMenuVentasOpen] = useState(false)
    const [isMenuInventarioOpen,setMenuInventarioOpen] = useState(false)
    const [isMenuComprasOpen,setMenuComprasOpen] = useState(false)


    const [ubicaciones, setUbicaciones] = useState(null)
   
    useEffect(() => {
        fetch('https://d2g3000.000webhostapp.com/api/v1/ubicaciones')
          .then(response => response.json())
          .then(data => setUbicaciones(data))
         
      }, [])
    
    return(
        <SacContext.Provider value={{
            isMenuInventarioOpen,
            setMenuInventarioOpen,
            isMenuVentasOpen,
            setMenuVentasOpen,
            isMenuComprasOpen,
            setMenuComprasOpen,
            ubicaciones,
            setUbicaciones
          


        }}> 
         {children}

        </SacContext.Provider>

    )
}