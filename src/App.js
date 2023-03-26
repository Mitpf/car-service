
import {
  useEffect,
  Routes,
  Route,
} from 'react';

import './App.css';
import { MainNavigation } from './Components/MainNavigation/MainNavigation';
import { Clientstable } from './Components/OrderListTable/OrderListTable';



function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";
  }, []);

  return (
    <div >

      <MainNavigation />

      <h2 className="header">Admin view Order-CarList</h2>


      <Clientstable />



    </div>
  );
}

export default App;



