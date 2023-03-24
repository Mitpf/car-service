import { useState } from 'react';
import { OrderListRow } from '../OrderListRow/OrderListRow';
import {OrderListInfoPlus} from '../OrderListRowInfoPlus/OderListInfoPlus'



export const Clientstable = () => {

    const cars = [{ id: 123 }, { id: 456 }, { id: 789 }];

    const [showInfoPlus, setInfo] = useState({});

    const toggleShowInfoPlus = (e) => {

        const id = e.currentTarget.id

        /* setInfo(state => ({ ...state, [id]: !state[id] })) */
        setInfo(state => ({ [id]: !state[id] }))

    }
    return (



        <div >
            <table className="rwd-table">
                <tbody>

                    <tr>
                        <th>Service-Order No</th>
                        <th>Type service</th>
                        <th>Status</th>
                        <th>Owner car</th>
                        <th>Car model</th>
                        <th>Calc Price</th>
                    </tr>

                    {cars.map(x => (

                        <>
                            <OrderListRow
                                id={x.id}
                                key={x.id}
                                toggleShowInfoPlus={toggleShowInfoPlus}
                                showInfoPlus={showInfoPlus}
                            />
                            {showInfoPlus[x.id]  && <OrderListInfoPlus id={x.id} key={x.id}/>}
                        </>



                    ))};


                </tbody>
            </table>


        </div>

    );
}


/* 
left 3 years or change after 1200 km
oil change - after 2000 km
timing belt - 3 years left, or change after 23 000 km
car insurance vignette
Car Inspection
pads
accumaltor
winter tires
summer tires */