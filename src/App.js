
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import { AuthProvider } from './contexts/AuthContext';
import { StateProvider } from './contexts/StatesContext';
import { IsNotAuthentGuard } from './Components/RouteGuards/IsNotAuthentGuard';
import { IsAuthentGuard } from './Components/RouteGuards/IsAuthentGuard';
import { AdminGuard } from './Components/RouteGuards/AdminGurad';


import './App.css';
import { MainNavigation } from './Components/MainNavigation/MainNavigation';
import { OrderListTable } from './Components/OrdersTable/OrderListTable/OrderListTable';
import { AuthMainPage } from './Components/Auth/AuthMainPage';
import { Logout } from './Components/Auth/Logout/Logout';
import { CreateOrder } from './Components/CreateOrder/CreateOrder';
import { Home } from './Components/HOME/Home';
import { MyOrders } from './Components/MyOrders/MyOrders';
import { ErrorServerDisconnected } from './Components/Errors/ErrorServerDisconnected';
import { OwnerOrder } from './Components/RouteGuards/OwnerOrder';
import { DetailsOrder } from './Components/MyOrders/Details/DetailsClientOrder';
import { RepairStories } from './Components/Auth/RepairStories/RepairStories';








function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);



  return (
    <StateProvider>
      <AuthProvider >
        <>
          <MainNavigation />


          <Routes>

            <Route path='/repstories' element={<RepairStories />} />

            <Route element={<IsAuthentGuard />}>

              <Route path='/user/auth/*' element={<AuthMainPage />} />

            </Route>

            <Route path='/' element={<Home />} />



            <Route element={<IsNotAuthentGuard />}>

              <Route path='/user/createorder' element={<CreateOrder isEdit={false} />} />

              <Route path='/orders/list' element={
                <AdminGuard>
                  <OrderListTable />
                </AdminGuard>
              } />

              <Route path='/user/:userID/orders/*' element={
                <OwnerOrder>
                  <MyOrders />
                </OwnerOrder>

              } />

              <Route path='/user/:userID/orders/:orderID/details/*' element={
                <OwnerOrder>
                  <DetailsOrder />
                </OwnerOrder>

              } />

              <Route path='/user/:userID/orders/:orderID/edit/*' element={
                <OwnerOrder>
                  <CreateOrder isEdit />
                </OwnerOrder>

              } />



              <Route path='/user/auth/logout' element={<Logout />} />

            </Route>


            <Route path='/errors/serverdisconnected' element={<ErrorServerDisconnected />} />

          </Routes>


        </>
      </AuthProvider>
    </StateProvider>


  );
}

export default App;

