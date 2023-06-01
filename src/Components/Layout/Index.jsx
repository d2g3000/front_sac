import PropTypes from 'prop-types'
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Navbar from '../../Components/NavBar/Index'

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  return (
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
    </Box>
  )
} 
export default Layout