export const OrderListInfoPlus = ({
    _id,
    userId,
    type,
    status,
    carInfo,
    calcPrice,
    problemDescript,
    serviceInfo

}) => {
    return (
        <tr >
            <td className='tdinfo'>
                
                <img src="arrow_r.svg" className="arrow"/>

            </td>


            <td colSpan="2" className='tdinfo'>
                <div>car info:</div>
                <div>{carInfo.carBrand} {carInfo.carModel}, {carInfo.productDate}</div>
                <div>engine: {carInfo.engine} </div>
                <div>km: {carInfo.km} </div>
            </td>

            <td colSpan="2" className='tdinfo'>
                <div>Problem: {problemDescript.title} </div>
                <div>description: {problemDescript.text} </div>
                <div>diagnostic: {serviceInfo.diagnostic} </div>
                <div>repair: {serviceInfo.resolveBrief} </div>
                
            </td>

            <td className='tdinfo'>
            <img src={carInfo.imageUrl} alt="" />
            </td>

        </tr>
    );
}


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
