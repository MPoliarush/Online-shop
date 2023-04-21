import { useState,useEffect } from "react"
import {Link, useParams} from 'react-router-dom'


function Cart(props){
// const params = useParams()
// console.log(params.id)
console.log(props.itemData)

let cartPath=''
    if (props.itemData.typeGoods=='Фотокамера'){
        cartPath = `/cameras/view/${props.itemData._id}`
    } else if (props.itemData.typeGoods=='Лінза'){
        cartPath = `/linses/view/${props.itemData._id}`
    }


    return (
        
    <li className='card-frame'>
        <div className='product-info'>
          <div className='product-img-wrapper'><img src={`http://localhost:5000/uploadedIMG/${props.itemData.img1[0].filename}`} className='product-img' alt='user'/></div>
          <p className='model'>{props.itemData.model}</p>
          <p className='brand'>{props.itemData.brand}</p>
          <div className='card-block-nav'>.
              <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
              <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
          </div>
        </div>
        <div className='product-pricing'>
          <div className='product-pricing-box'>
              <span className='product-pricing-box-price'>{props.itemData.work_price} UAH</span>
              <span>Будній</span>
          </div>
          <div className='product-pricing-box weekend'>
              <span className='product-pricing-box-price'>{props.itemData.weekend_price} UAH</span>
              <span>Вихідний</span>
          </div>
          <div className='product-pricing-box week'>
              <span className='product-pricing-box-price'>{props.itemData.week_price} UAH</span>
              <span>Тиждень</span>
          </div>
          <div className='product-pricing-box month'>
              <span className='product-pricing-box-price'>{props.itemData.month_price} UAH</span>
              <span>Місяць</span>
          </div>
        </div>
        <div className='product-options'>
          <button className='view-details'><Link to={cartPath}>Деталі товару</Link></button>
          <button className='add-to-basket'><img src= '/imagesHTML/icons/basket.png' alt='basket'/> В кошик </button>
        </div>
    </li>
    )
}

export default Cart