import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import {orderActions} from '../../store/store'
import Footer from '../Footer';




function OrderCart(){

    const [days,setDays]= useState({
        since:'',
        till:'',
        work:0,
        weekend:0,
        week:0,
        month:0,
        total:0,
    })

const stateBasket = useSelector(state=>state.basketOrders.goods)
const dispatch = useDispatch()
console.log(stateBasket)


function startDaysHandler(e){
    console.log(e.target.value)
    setDays({...days,
        since: e.target.value})
}

function endDaysHandler(e){
    console.log(e.target.value)
    setDays({...days,
        till: e.target.value})
}



useEffect(()=>{

let startDate = new Date(days.since);
let endDate = new Date(days.till);

endDate.setDate(endDate.getDate() + 1);

let alldays=[]
let i=0;
while (startDate < endDate) {
    alldays.push(startDate.getDay());
    startDate.setDate(startDate.getDate() + 1);
    i++;
}
console.log(alldays)

let daysDescr={
    work:0,
    weekend:0,
    week:0,
    month:0
}

if (alldays.length%7 == 0){
    console.log('logged', alldays.length/7 )
    daysDescr.week = alldays.length/7
} 

if(alldays.length<7){
    for(let i=0;i<alldays.length;i++){  
        if (alldays[i] == 6 || alldays[i] == 0){
            daysDescr.weekend = daysDescr.weekend+ 1
        } else {
            daysDescr.work = daysDescr.work+ 1
        }
    }
}

if (alldays.length%7 > 0 && alldays.length > 7){
    console.log('logged', alldays.length,alldays.length%7 ,alldays.length/7  )
    daysDescr.week = alldays.length/7 - (alldays.length/7-1)
    alldays = alldays.slice(-(alldays.length - 7*daysDescr.week))
    console.log(alldays)
    for(let i=0;i<alldays.length;i++){  
        if (alldays[i] == 6 || alldays[i] == 0){
            daysDescr.weekend = daysDescr.weekend+ 1
        } else {
            daysDescr.work = daysDescr.work+ 1
        }
    }
}   
    console.log(daysDescr)

    setDays({...days,
        work:daysDescr.work,
        weekend:daysDescr.weekend,
        week:daysDescr.week,
        month:daysDescr.month
    })

console.log(days)
},[days.till])

console.log(days)

function deleteFromBasket(e){
    console.log(JSON.parse(e.currentTarget.name))
    dispatch(orderActions.removeGood(JSON.parse(e.currentTarget.name)))
}


return(
    <>
    <main>
        <div className = 'content-container orders'>
            <h1 className='orders-h1'>КОШИК ТОВАРІВ</h1>
            <div className='period'>
                <div className='from'>
                    <span>З якого числа:</span>
                    <input type='date'  className="calendar-input" onChange={startDaysHandler}/>
                </div>
                <div className='to'>
                    <span>По яке число:</span>
                    <input type='date'  className="calendar-input" onChange={endDaysHandler}/>
                </div>
            </div>

            <div className="goods-wrapper">
                <div className="heading">
                    <span  className="fixedWidth">Фото</span>
                    <span  className="fixedWidth name">Назва</span>
                    <span  className="fixedWidth">Робочих днів</span>
                    <span className="fixedWidth">Вихідних днів</span>
                    <span className="fixedWidth">Тижнів</span>
                    <span className="fixedWidth">Місяців</span>
                    <span className="fixedWidth">Всього вартість</span>
                    <span className="fixedWidth"></span>
                    
                </div>

                {stateBasket.map(item=>{
                    return (
                        <div className='item'>
                            <p className="fixedWidth"><img className="goodIMG" src = {`http://localhost:5000/uploadedIMG/${item.img1[0].filename}`}/></p>
                            <div className="fixedWidth name">
                                <p>{item.brand}</p>
                                <p className="heavy">{item.model}</p>
                            </div>

                            <p className="fixedWidth"><span className="day">{days.work}</span> <span className='pricesmall'>{item.work_price} UAH</span></p>
                            <p className="fixedWidth"><span className="day">{days.weekend}</span><span className='pricesmall'>{item.weekend_price} UAH</span></p>
                            <p className="fixedWidth"><span className="day">{days.week}</span><span className='pricesmall'>{item.week_price} UAH</span></p>
                            <p className="fixedWidth"><span className="day">{days.month}</span> <span className='pricesmall'>{item.month_price} UAH</span></p>
                            <p className="fixedWidth"> <span className='day'>{days.month*item.month_price + days.week*item.week_price + days.weekend*item.weekend_price +days.work*item.work_price} UAH</span></p>
                            <p className="fixedWidth"><img className="basketIMG" src="/imagesHTML/icons/delete.png"/></p>
                        </div>
                    )
                }
                )}  
            
            <button className="confirm-btn total">Всього: 0 UAH </button>
            <Link to='/ordersConfirmation'><button className="confirm-btn">Оформити замовлення</button></Link>
            </div>
        </div>
    </main>
    <Footer></Footer>
    </>
)
}

export default OrderCart