
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { authServiceRequests } from './services/authServiceRequests';
import { AuthProvider } from './contexts/AuthContext';
import { AuthContext } from './contexts/AuthContext';
import { loadData } from './loadData/loadData';
import { orderServiceRequests } from './services/orderService';

import './App.css';
import { MainNavigation } from './Components/MainNavigation/MainNavigation';
import { OrderListTable } from './Components/OrdersTable/OrderListTable/OrderListTable';
import { AuthMainPage } from './Components/Auth/AuthMainPage';
import { Logout } from './Components/Auth/Logout/Logout';
import { CreateOrder } from './Components/CreateOrder/CreateOrder';
import { Home } from './Components/HOME/Home';
import { MyOrders } from './Components/MyOrders/MyOrders';
import { ErrorServerDisconnected } from './Components/Errors/ErrorServerDisconnected';






function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);

  /* -- */
 


  return (
    <AuthProvider >
      <>
        <MainNavigation />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders/list' element={<OrderListTable  />} />
          <Route path='/user/auth/*' element={<AuthMainPage />} />
          <Route path='/user/auth/logout' element={<Logout />} />
          <Route path='/user/createorder' element={<CreateOrder />} />
          <Route path='/user/:userID/orders/*' element={<MyOrders />} />
          <Route path='/errors/serverdisconnected' element={<ErrorServerDisconnected />} />

        </Routes>


      </>
    </AuthProvider>


  );
}

export default App;

