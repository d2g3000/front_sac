import React from 'react';
import { useAuth } from '../../../auth/auth';
import Layout from '../../../Components/Layout/Index';
import { Navigate } from 'react-router-dom'

function Login() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  const [pass, setPass] = React.useState('');


  const login = (e) => {
    e.preventDefault();
    auth.login({ username, pass});
  };
  
  if(auth.user){
    return  <Navigate to="/"/>
}


  return (

    <>
    <Layout>
     
      <div style={{marginLeft:"150px",marginTop:"50px"}}>
      <form onSubmit={login} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
        />
        </div>
        <div className="mb-6">
         <label className="block text-gray-700 text-sm font-bold mb-2" >Escribe tu password:</label>
          <input
          value={pass}
          onChange={e => setPass(e.target.value)}
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
        />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Entrar</button>
      </form>
      </div>
      </Layout>
    </>
  );
}

export { Login };