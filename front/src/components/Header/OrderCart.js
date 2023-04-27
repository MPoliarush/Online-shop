import { useEffect, useState } from "react"
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import {orderActions} from '../../store/store'
import Footer from '../Footer';
=======
import { useSelector,useDispatch } from "react-redux"
import {orderActions} from '../../store/store'

>>>>>>> e2905e54036bdb1679ffbdd5cb4be6d7df0248f2


function OrderCart(){

    const [days,setDays]= useState({
        since:'',
        till:'',
        work:0,
        weekend:0,
        week:0,
<<<<<<< HEAD
        month:0,
        total:0,
=======
        month:0
>>>>>>> e2905e54036bdb1679ffbdd5cb4be6d7df0248f2
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

<<<<<<< HEAD
=======
const weekdays = [1,2,3,4,5]
>>>>>>> e2905e54036bdb1679ffbdd5cb4be6d7df0248f2
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
<<<<<<< HEAD
    <main>
=======
>>>>>>> e2905e54036bdb1679ffbdd5cb4be6d7df0248f2
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
                            <img className="fixedWidth basketIMG" src = {`http://localhost:5000/uploadedIMG/${item.img1[0].filename}`}/>
                            <div className="fixedWidth name">
                                <p>{item.brand}</p>
                                <p className="heavy">{item.model}</p>
                            </div>
<<<<<<< HEAD
                            <p className="fixedWidth"><span className="day">{days.work}</span> <span className='pricesmall'>{item.work_price} UAH</span></p>
                            <p className="fixedWidth"><span className="day">{days.weekend}</span><span className='pricesmall'>{item.weekend_price} UAH</span></p>
                            <p className="fixedWidth"><span className="day">{days.week}</span><span className='pricesmall'>{item.week_price} UAH</span></p>
                            <p className="fixedWidth"><span className="day">{days.month}</span> <span className='pricesmall'>{item.month_price} UAH</span></p>
=======
                            <p className="fixedWidth">{days.work} * {item.work_price} UAH</p>
                            <p className="fixedWidth">{days.weekend} * {item.weekend_price} UAH</p>
                            <p className="fixedWidth">{days.week} * {item.week_price} UAH</p>
                            <p className="fixedWidth">{days.month}* {item.month_price} UAH</p>
>>>>>>> e2905e54036bdb1679ffbdd5cb4be6d7df0248f2
                            <p className="fixedWidth heavy highlight">{days.work*item.work_price + days.weekend*item.weekend_price + days.week*item.week_price + days.month*item.month_price} UAH</p>
                            <span className="fixedWidth"><img className="delete" src = '/imagesHTML/icons/delete.png' onClick={deleteFromBasket} name={JSON.stringify(item)} /></span>
                        </div>
                    )
<<<<<<< HEAD
                })}  
            </div>
            <button className="confirm-btn total">Всього: 0 UAH </button>
            <Link to='/orders/confirmation'><button className="confirm-btn">Оформити замовлення</button></Link>
        </div>
    </main>
    <Footer></Footer>
=======
                })}
                
                    
                
            </div>
        </div>
>>>>>>> e2905e54036bdb1679ffbdd5cb4be6d7df0248f2
    </>
)
}

export default OrderCart