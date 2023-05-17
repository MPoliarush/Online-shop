import {Link,useNavigate} from 'react-router-dom'



function BurgerModal(props){



function burgerClickHandler(e){
    console.log('clicked burger')
    props.closing()
    
}

return (
    <div className='nav-list-burger'>
        <ul>
            <li>КАТАЛОГ
                <ul className='nested-list-burger'>
                    <li> <Link to={'/cameras'}>Фотокамери</Link></li>
                    <li><Link to={'/linses'}>Об'єктиви</Link> </li>
                </ul>
            </li>
            <li className='nav-li-burger'><Link to='/about'>ПРО КОМПАНІЮ </Link></li>
            <li className='nav-li-burger'><Link to='/news'> НОВИНИ </Link></li>
            <li className='nav-li-burger'><a href='#'>КОНТАКТИ</a></li>
            
        </ul>
        <img className='burger-close' src='imagesHTML/icons/burgerback.png' onClick={burgerClickHandler}/>
    </div>
)
}

export default BurgerModal