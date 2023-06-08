import { useRoutes,BrowserRouter } from 'react-router-dom'
import { SacProvider } from '../../Context/Index'
import { AuthProvider } from '../../auth/auth'
import Home from '../Home/Index'
import './App.css'
import Ajuste from '../Inventario/Ajuste/Index'
import Traslado from '../Inventario/Traslado/Index'
import Articulo from '../Inventario/Articulo/Index'
import Sucursal from '../Inventario/Sucursal/Index'
import Almacen from '../Inventario/Almacen/Index'
import Procedencia from '../Inventario/Procedencia/Index'
import Pedido from '../Ventas/Pedido/Index'
import FacturaVenta from '../Ventas/FacturaVenta/Index'
import Cotizacion from '../Ventas/Cotizacion/Index'
import Devolucion from '../Ventas/Devolucion/Index'
import NotaDeEntrega from '../Ventas/NotaDeEntrega/Index'
import Despacho from '../Ventas/Despacho/Index'
import Cobro from '../Ventas/Cobro/Index'
import Cliente from '../Ventas/Cliente/Index'
import OrdenDeCompra from '../Compras/OrdenDeCompra/Index'
import FacturaDeCompra from '../Compras/FacturaDeCompra/Index'
import CotizacionCompra from '../Compras/CotizacionCompra/Index'
import NotaDeRecepcion from '../Compras/NotaDeRecepcion/Index'
import Pago from '../Compras/Pago/Index'
import Proveedor from '../Compras/Proveedor/Index'
import {Login} from'../Login/Login/Index'
import {LogoutPage} from'../Login/LogoutPage/Index'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/ajustes', element: <Ajuste /> },
    { path: '/traslados', element: <Traslado /> },
    { path: '/articulos', element: <Articulo /> },
    { path: '/sucursales', element: <Sucursal /> },
    { path: '/almacenes', element: <Almacen /> },
    { path: '/pedidos', element: <Pedido /> },
    { path: '/facturas-de-ventas', element: <FacturaVenta /> },
    { path: '/cotizaciones', element: <Cotizacion /> },
    { path: '/devoluciones', element: <Devolucion /> },
    { path: '/notas-de-entrega', element: <NotaDeEntrega /> },
    { path: '/despachos', element: <Despacho /> },
    { path: '/cobros', element: <Cobro /> },
    { path: '/clientes', element: <Cliente /> },
    { path: '/procedencias', element: <Procedencia /> },
    { path: '/ordenes-de-compra', element: <OrdenDeCompra /> },
    { path: '/facturas-de-compra', element: <FacturaDeCompra /> },
    { path: '/cotizaciones-de-compra', element: <CotizacionCompra /> },
    { path: '/notas-de-recepcion', element: <NotaDeRecepcion /> },
    { path: '/pagos', element: <Pago /> },
    { path: '/Proveedores', element: <Proveedor /> },
    { path: '/login', element: <Login /> },
    { path: '/logout', element: <LogoutPage /> },
  ])

  return routes
}

const  App = () => {


    return (
      <SacProvider>
      <BrowserRouter>
      <AuthProvider>
            <AppRoutes/>
            </AuthProvider>
        </BrowserRouter>
      </SacProvider>
     
      
     
    )
  }
  
  export default App