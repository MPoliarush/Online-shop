


function App() {



  return (
    <div className="App">
      <div className='content-container'>
        <header>
          <a href='#' className='logo'> <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/logo.png'} alt='logo'/> </a>
          <nav>
            <ul className='nav-list'>
              <li className='nav-li'><a href='#'>КАТАЛОГ</a></li>
              <li className='nav-li'><a href='#'>ПРО КОМПАНІЮ </a></li>
              <li className='nav-li'><a href='#'>НОВИНИ</a></li>
              <li className='nav-li'><a href='#'>КОНТАКТИ</a></li>
            </ul>
          </nav>
          <ul className='options-list'>
            <a href='#'> <li><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')} /></li> </a>
            <a href='#'> <li><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} /></li> </a>
            <a href='#'> <li><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/basket1.png'} alt='basket' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/basket1Hovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/basket1.png')}  /></li> </a>
            <a href='#'> <li><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/search.png'} alt='find' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/searchHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/search.png')} /></li> </a>
            <a href='#'> <li><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/user.png'} alt='user' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/userHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/user.png')}  /></li> </a>
          </ul>
        </header>
      </div>
      <main>
        <div className='first-page'>
          <img src={process.env.PUBLIC_URL + '/imagesHTML/girl.jpg'} className='first-page-img' alt='girl'/>
          <div className='content-container'>
            <div className='first-page-text-container'>
              <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/bg.png'} alt='user'/>
              <p><span className='first-page-text-green'>ОРЕНДА</span> ФОТО </p>
              <span>І ВІДЕО</span>
              <span>ОБЛАДНАННЯ</span>
            </div>
          </div>
        </div>
        <div className='first-page-row'>
          <div className='content-container row'>
              <div className='first-page-row-block'>
                <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/list.png'} alt='list'/>
                <p>Найбільший вибір техніки</p>
              </div>
              <div className='first-page-row-block'>
                <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/time.png'} alt='time'/>
                <p>Швидке оформлення замовлення</p>
              </div>
              <div className='first-page-row-block'>
                <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/placeholder.png'} alt='placeholder'/>
                <p>Можливість забрати замовлення в пункті видачі</p>
              </div>
              <div className='first-page-row-block'>
                <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/product.png'} alt='product'/>
                <p>Доставка в будь-яку точку міста</p>
              </div>
              <div className='first-page-row-block'>
                <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/shopping.png'} alt='shopping'/>
                <p>Оплата картою або готівкою</p>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;
