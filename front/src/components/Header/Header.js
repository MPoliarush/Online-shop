import  { useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"

function Header(){
const [mouseOvered, setMouseOvered]=useState(false)
const stateBasket = useSelector(state=>state.basketOrders.goods)
const stateCompare = useSelector(state=>state.comparison.items)

function catalogHover(event){
  setMouseOvered(true)
}

function catalogUnhover(event){
  setMouseOvered(false)
}


    return (
        <header>
          <Link to='/' className='logo'> <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/logo.png'} alt='logo'/> </Link>
          <nav>
            <ul className='nav-list'>
              <li className='nav-li' onMouseOver={catalogHover} onMouseOut={catalogUnhover}>
                <a href='#'>КАТАЛОГ</a>
                <ul className={!mouseOvered ? 'nested-list': 'nested-list visible'} >
                  <li> <Link to={'/cameras'}>Фотокамери</Link></li>
                  <li><Link to={'/linses'}>Об'єктиви</Link> </li>
                </ul>
              </li>
              <li className='nav-li'><a href='#'>ПРО КОМПАНІЮ </a></li>
              <li className='nav-li'><a href='#'>НОВИНИ</a></li>
              <li className='nav-li'><a href='#'>КОНТАКТИ</a></li>
            </ul>
          </nav>
          <ul className='options-list'>
            <Link to='#'> <li><img src='/imagesHTML/icons/star.png' alt='star' onMouseOver={e => (e.currentTarget.src = '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src =  '/imagesHTML/icons/star.png')} /></li> </Link>
            <Link to='#'> <li><img src='/imagesHTML/icons/compare.png' alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} /> <span className={stateCompare.length !=0 ? 'iconNumber' : ''}>{stateCompare.length==0 ? '' : stateCompare.length}</span>  </li> </Link>
            <Link to='/orders'> <li><img src='/imagesHTML/icons/basket1.png' alt='basket' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/basket1Hovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/basket1.png')}/> <span className={stateBasket.length !=0 ? 'iconNumber' : ''}> {stateBasket.length==0 ? '' : stateBasket.length}</span> </li> </Link>
            <Link to='#'> <li><img src= '/imagesHTML/icons/search.png' alt='find' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/searchHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/search.png')} /></li> </Link>
            <Link to='/login'> <li><img src='/imagesHTML/icons/user.png' alt='user' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/userHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/user.png')}  /></li> </Link>

          </ul>
        </header>
    )
}

export default Header