import PropTypes from 'prop-types'
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Navbar from '../../Components/NavBar/Index'

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  return (

    <div className='fixed h-screen  ss:overflow-x-scroll  '  >
  


    
    <div className='fixed top-0 ' ><Navbar/></div>
    <div className='flex flex-col ' style={{marginLeft:"80px",marginTop:"70px",maxWidth: "80vw" }}>{children}</div>

  </div>/*
    <Box sx={{ display: "flex" }}>
    
      <Box
        component="nav"
        sx={{
         
          flexShrink: 0
        }}
      >
        <Navbar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
       
          minHeight: "100vh",
        
        }}
      >
          {children}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>*/
  )
} 
export default Layout