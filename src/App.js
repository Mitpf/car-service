
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { MainNavigation } from './Components/MainNavigation/MainNavigation';
import { OrderListTable } from './Components/OrdersTable/OrderListTable/OrderListTable';
import { Auth } from './Components/Auth/Auth'




function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);

  return (

    <>
      <MainNavigation />

      
      <Routes>
        <Route path='/' element={<h>Home</h>} />
        <Route path='/orders/list' element={<OrderListTable />} />
        <Route path='/user/auth/*' element={<Auth />} />

      </Routes>


    </>

  );
}

export default App;




