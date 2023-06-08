import React from 'react';
import { useAuth } from '../../../auth/auth';
import Layout from '../../../Components/Layout/Index';
function LogoutPage() {
  const auth = useAuth();
  
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  
  return (
    <>
    <Layout>

    <div className='flex flex-col p-10 m-10 text-center'>

  
      <h1>Salir del sistema </h1>

      <form onSubmit={logout}>
        <label>¿Seguro de que quieras salir?</label>
        <p>
        <button className='bg-red-500 text-white mt-5' type="submit">Salir</button>
        </p>
       
      </form>
      </div>
      </Layout>
    </>
  );
}

export { LogoutPage };