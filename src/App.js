
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { authServiceRequests } from './services/authServiceRequests';
import { AuthContext } from './contexts/AuthContext';

import './App.css';
import { MainNavigation } from './Components/MainNavigation/MainNavigation';
import { OrderListTable } from './Components/OrdersTable/OrderListTable/OrderListTable';
import { AuthMainPage } from './Components/Auth/AuthMainPage';
import { Logout } from './Components/Auth/Logout/Logout';
import { CreateOrder } from './Components/CreateOrder/CreateOrder';






function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);

  const navigateTo = useNavigate();
  const [auth, setAuth] = useState({});
  const authServTokenReq = authServiceRequests(auth.accessToken);

  console.log('acc token', auth.accessToken);
  console.log('auth', auth);

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
    console.log('clickreg values', values);
    const { repassword, ...registerData } = values;
    if (repassword !== registerData.password) {
      return;
    }

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


  const contextValues = {
    onLoginSubmit,
    onLogout,
    onRegisterSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    userContacts: {
      email: auth.email,
      phoneNumber: auth.phoneNumber,
      flNames: auth.firstLastNames
    }
  };


  return (
    <AuthContext.Provider value={contextValues}>
      <>
        <MainNavigation />


        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/orders/list' element={<OrderListTable />} />
          <Route path='/user/auth/*' element={<AuthMainPage />} />
          <Route path='/user/auth/logout' element={<Logout />} />
          <Route path='/user/createorder' element={<CreateOrder />} />

        </Routes>


      </>
    </AuthContext.Provider>


  );
}

export default App;

