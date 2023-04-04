import { useEffect } from "react";


export const useCheckForUpdates = (httpService, setStateLength, stateLength, setData, depedencyArray) => {

  useEffect(() => {




    const intervalId = setInterval(async () => {


      try {

        const result = await httpService();

        if (result.length !== stateLength) {
          setStateLength(result.length);
          setData(result);
        }


      } catch (error) {
        console.error(error);
      }
    }, 2000); // Poll every 2 seconds

    return () => {
      clearInterval(intervalId);
    };


  }, depedencyArray);






}

/* usage usecheckforupdates httpService,setStateLength, stateLength, setData,[additional depedencys] */


/* useEffect(() => {
       const intervalId = setInterval(async () => {
         try {
           const result = await orderServiceReqtoken.getAll();
           
           if (result.length !== ordersLength) {
             setOrdersLength(result.length);
             setOrders(result);
           }
         } catch (error) {
           console.error(error);
         }
       }, 3000); // Poll every 1 seconds
   
       return () => {
         clearInterval(intervalId);
       };
     }, [ordersLength]);
   
*/