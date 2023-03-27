
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { MainNavigation } from './Components/MainNavigation/MainNavigation';
import { Login } from './Components/LoginRegister/Login/Login';
import { OrderListTable } from './Components/OrdersTable/OrderListTable/OrderListTable';
import { Register } from './Components/LoginRegister/Register/Register';



function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);

  return (

    <>
      <MainNavigation />

      <Routes>
        <Route path='/' element={<h>Home</h>} />
        <Route path='/orders/list' element={<OrderListTable/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>


    </>

  );
}

export default App;



