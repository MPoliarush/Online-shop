import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {orderActions} from '../../store/store'
import Footer from '../Footer';


function Confirmation(){
    const stateBasket = useSelector(state=>state.basketOrders.goods)
    const dispatch = useDispatch() 


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

                    </div>
                </div>
            </main>
        </>
    )
}

export default Confirmation