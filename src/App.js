
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { authServiceRequests } from './services/authServiceRequests';
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






function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);

  const navigateTo = useNavigate();
  const [auth, setAuth] = useState({ accessToken: null });
  const authServTokenReq = authServiceRequests(auth.accessToken);



  const onLoginSubmit = async (data) => {
    try {
      const result = await authServTokenReq.login(data);

      setAuth(result);

      navigateTo('/');
    } catch (error) {
      console.log('There is a problem', error);
    }
  };

  const onLogout = async () => {
    await authServTokenReq.logout();

    setAuth({});
  };




  const onRegisterSubmit = async (values) => {

    const { repassword, ...registerData } = values;
    if (repassword !== registerData.password) {
      return;
    }
    console.log('regdata', registerData);
    try {
      const result = await authServTokenReq.register(registerData);
      setAuth(result);
      console.log("result registri", result);
      navigateTo('/');
    }
    catch (error) {
      console.log('There is a problem', error);
    }

  };



  const loadXdata = async () => {
    const dataArr = loadData();

    dataArr.forEach(async x => {
      try {
        const result = await authServTokenReq.register(x.user);

        setAuth(result);
        const orderServiceToken = orderServiceRequests(result.accessToken);
        await orderServiceToken.create(x.data);

      }
      catch (error) {
        console.log('There is a problem', error);
      }

    })
  }



  const contextValues = {
    onLoginSubmit,
    onLogout,
    onRegisterSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    isAdmin: '60f0cf0b-34b0-4abd-9769-8c42f830dffc' === auth._id,
    userContacts: {
      email: auth.email,
      phoneNumber: auth.phoneNumber,
      flNames: auth.firstLastNames
    },


  };



  return (
    <AuthContext.Provider value={contextValues}>
      <>
        <MainNavigation />


        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/orders/list' element={<OrderListTable {...{ loadXdata }} />} />
          <Route path='/user/auth/*' element={<AuthMainPage />} />
          <Route path='/user/auth/logout' element={<Logout />} />
          <Route path='/user/createorder' element={<CreateOrder />} />

        </Routes>


      </>
    </AuthContext.Provider>


  );
}

export default App;

