import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {orderActions} from '../../store/store'
import Footer from '../Footer';
import axios from "axios";

function Confirmation(){

    const [postPoints, setPostPoints]= useState([])

    const stateBasket = useSelector(state=>state.basketOrders.goods)
    const dispatch = useDispatch() 


async function getWarehouses(){
    
    try{
        const params = {
            "apiKey": "6954dc5c4df388e9361fa0812f491bcd",
            "modelName": "Address",
            "calledMethod": "getWarehouses",
            "methodProperties": {
            "CityName" : "Київ",
            "Page" : "1",
            "Limit" : "430",
            "Language" : "UA",
            }
         }
        const response = await axios.post(`https://api.novaposhta.ua/v2.0/json/`, params)
        console.log(response.data)
        setPostPoints(response.data.data)
    }catch(e){
        console.log(e)
    }
}

useEffect(()=>{
    getWarehouses()
    return
},[])

console.log(postPoints)


return(
        <>
            <main>
                <div className = 'content-container confirm'>
                    <h1 className="registration"><span>ОФОРМЛЕННЯ</span> ЗАМОВЛЕННЯ</h1>

                    <div className="goods-wrapper ">
                        <h3>Товари:</h3>
                        <div className="heading-confirm">
                            <span  className="">Фото</span>
                            <span  className="">Назва</span>
                            <span  className="">Днів</span>
                            <span className="">Всього вартість</span>
                        </div>

                        {stateBasket.map(item=>{
                                return (
                                    <div className='item'>
                                        <p className=''><img className="goodIMG" src = {`http://localhost:5000/uploadedIMG/${item.img1[0].filename}`}/></p>
                                        <div className="">
                                            <p>{item.brand}</p>
                                            <p className="heavy">{item.model}</p>
                                        </div>

                                        <p className=""><span className="day"></span> <span className='pricesmall'>{0} UAH</span></p>
                                        <p className=""><span className="day"></span> <span className='pricesmall'>0</span></p>
                                       
                                    </div>
                                )
                            }
                        )}

                        <div class='post-point'>
                            <label>Вибір відділення Нової Пошти</label>
                            <select className="postSelect">
                                {postPoints.map(point=>{
                                    return <option className="option">{point.Description}</option>
                                })}
                            </select>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default Confirmation

// 6954dc5c4df388e9361fa0812f491bcd