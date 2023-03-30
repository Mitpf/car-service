
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { authServiceRequests } from './services/authServiceRequests';
import { AuthContext } from './contexts/AuthContext';

import './App.css';
import { MainNavigation } from './Components/MainNavigation/MainNavigation';
import { OrderListTable } from './Components/OrdersTable/OrderListTable/OrderListTable';
import { AuthMainPage } from './Components/Auth/AuthMainPage';
import { Logout } from './Components/Auth/Logout/Logout';






function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);

  const navigateTo = useNavigate();
  const [auth, setAuth] = useState({});
  const authServiceHttpReq = authServiceRequests(auth.accessToken);

  console.log('acc token', auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authServiceHttpReq.login(data);
      console.log(result);
      console.log('token', auth.accessToken);
      setAuth(result);

      navigateTo('/');
    } catch (error) {
      console.log('There is a problem', error);
    }
  };

  const onLogout = async () => {
    await authServiceHttpReq.logout();

    setAuth({});
  };

  const onRegisterSubmit = async (values) => {
    console.log('clickreg values', values);
    const { repassword, ...registerData } = values;
    if (repassword !== registerData.password) {
      return;
    }

    try {
      const result = await authServiceHttpReq.register(registerData);
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
    isAuthenticated: !!auth.accessToken

  };


  return (
    <AuthContext.Provider value={contextValues}>
      <>
        <MainNavigation />


        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/orders/list' element={<OrderListTable />} />
          <Route path='/user/auth/*' element={<AuthMainPage />} />
          <Route path='user/auth/logout' element={<Logout />} />

        </Routes>


      </>
    </AuthContext.Provider>


  );
}

export default App;


/* 



"order_012": {
        "_id": "order_012",
        "userId": "asd04576",
        "typeOrder": "Problem", //or Consumabale
        "description":{
            "title":"Belt noise",
            "text":"There is some noise from belts"},
        "carInfo": {
            "carBrand": "Toyta",
            "carModel": "Corolla",
            "productDate": "2017 February",
            "engine": "gasoline",
            "km": 176355
        },

        
        "status":"working in progress",
        "serviceInfo":{
            "diagnostic":"broken cylinder",
            "resolveBrief":"changed with new cylinder"
        },
        "calcPrice":350


*/



