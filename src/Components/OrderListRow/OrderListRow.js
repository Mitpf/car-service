

export const OrderListRow = ({ id, toggleShowInfoPlus, showInfoPlus
}) => {
    return (
        
                <>

                    <tr id={id} onClick={(e) => toggleShowInfoPlus(e)} className="trbtn">
                        <td data-th="OWNER CAR NAME">
                            UPS5005
                        </td>
                        <td data-th="CAR MODEL">
                            UPS
                        </td>
                        <td data-th="CAR INFO">
                            ASDF19218
                        </td>
                        <td data-th="STATUS/LAST REPAIR">
                            06/25/2016
                        </td>
                        <td data-th="PHOTO">
                            12/25/2016
                        </td>
                        <td data-th="Net Amount">
                            $8,322.12
                        </td>
                    </tr>

                    
                </>


    );
};


