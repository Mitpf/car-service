
import { useEffect } from 'react';

import './App.css';
import { Clientstable } from './Components/OrderListTable/OrderListTable';



function App() {

  useEffect(() => {
    document.title = "Car Service - Reminder";  
  }, []);

  return (
    <div >
      <br />
      <h2 className="App">Admin view Order-CarList</h2>


      <Clientstable />



    </div>
  );
}

export default App;



