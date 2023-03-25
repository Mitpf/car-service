

export const OrderListRow = ({
    _id,
    userId,
    type,
    status,
    carInfo,
    calcPrice,
    toggleShowInfoPlus,
    showInfoPlus
}) => {
    return (
        <tr id={_id} onClick={(e) => toggleShowInfoPlus(e)} className="trbtn">

            <td data-th="Service-Order No" >
                {_id}
            </td>
            <td data-th="Type service" >
                {type}
            </td>
            <td data-th="Owner car" >
                {userId}
            </td>
            <td data-th="Car model" >
                {carInfo.carBrand}
                {carInfo.carModel}

            </td>
            <td data-th="Calc Price" >
                {calcPrice}
            </td>
            <td data-th="Status" >
                {status}
            </td>

        </tr>
    );
};


/* 

addNote
: 
""
calcPrice
: 
370
carInfo
: 
{carBrand: 'Toytoa', carModel: 'Corolla', productDate: '2017 February', engine: 'gasoline', km: 176355, …}
problemDescript
: 
{title: 'Belt noise', text: 'There is some noise from belts'}
serviceInfo
: 
{diagnostic: 'broken cylinder', resolveBrief: 'changed with new cylinder'}
status
: 
"working in progress"
type
: 
"Problem"
userId
: 
"asd04566"
_id
: 
"order_001"


*/