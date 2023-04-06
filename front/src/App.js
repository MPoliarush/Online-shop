


function App() {



  return (
    <div className="App">
      <div className='most-main-container'>
        <header>
          <a href='#' className='logo'> <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/logo.png'} alt='girl'/> </a>
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
    </div>
  );
}

export default App;
