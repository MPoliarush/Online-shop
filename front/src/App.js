


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

        <div className='second-page'>
          <div className='content-container-second-page'>
              <h3 className='second-page-header'><span>ПОПУЛЯРНІ </span>ТОВАРИ</h3>
              <img className='arrow-right' src={process.env.PUBLIC_URL + '/imagesHTML/icons/left.png'} alt='user'/>
              <img className='arrow-left' src={process.env.PUBLIC_URL + '/imagesHTML/icons/right.png'} alt='user'/>
              <div className='slider-visible-wrapper'>
                  <ul className='slider-string'>

                    <li className='card-frame'>
                      <div className='product-info'>
                        <div className='product-img-wrapper'><img src={process.env.PUBLIC_URL + '/imagesProducts/Photo/1/1.1.png'} className='product-img' alt='user'/></div>
                        <p className='model'>D5300 Kit</p>
                        <p className='brand'>Canon</p>
                        <div className='card-block-nav'>
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
                        </div>
                      </div>
                      <div className='product-pricing'>
                        <div className='product-pricing-box'>
                            <span className='product-pricing-box-price'>230 UAH</span>
                            <span>Будній</span>
                        </div>
                        <div className='product-pricing-box weekend'>
                            <span className='product-pricing-box-price'>250 UAH</span>
                            <span>Вихідний</span>
                        </div>
                        <div className='product-pricing-box week'>
                            <span className='product-pricing-box-price'>3250 UAH</span>
                            <span>Тиждень</span>
                        </div>
                        <div className='product-pricing-box month'>
                            <span className='product-pricing-box-price'>6250 UAH</span>
                            <span>Місяць</span>
                        </div>
                      </div>
                      <div className='product-options'>
                        <button className='view-details'>Деталі товару</button>
                        <button className='add-to-basket'><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/basket.png'} alt='basket'/> В кошик </button>
                      </div>
                    </li>

                    <li className='card-frame'>
                      <div className='product-info'>
                        <div className='product-img-wrapper'><img src={process.env.PUBLIC_URL + '/imagesProducts/Photo/2/2.1.jpg'} className='product-img' alt='user'/></div>
                        <p className='model'>D5300 Kit</p>
                        <p className='brand'>Canon</p>
                        <div className='card-block-nav'>
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
                        </div>
                      </div>
                      <div className='product-pricing'>
                        <div className='product-pricing-box'>
                            <span className='product-pricing-box-price'>230 UAH</span>
                            <span>Будній</span>
                        </div>
                        <div className='product-pricing-box weekend'>
                            <span className='product-pricing-box-price'>250 UAH</span>
                            <span>Вихідний</span>
                        </div>
                        <div className='product-pricing-box week'>
                            <span className='product-pricing-box-price'>3250 UAH</span>
                            <span>Тиждень</span>
                        </div>
                        <div className='product-pricing-box month'>
                            <span className='product-pricing-box-price'>6250 UAH</span>
                            <span>Місяць</span>
                        </div>
                      </div>
                      <div className='product-options'>
                        <button className='view-details'>Деталі товару</button>
                        <button className='add-to-basket'><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/basket.png'} alt='basket'/> В кошик </button>
                      </div>
                    </li>

                    <li className='card-frame'>
                      <div className='product-info'>
                        <div className='product-img-wrapper'>  <img src={process.env.PUBLIC_URL + '/imagesProducts/Photo/3/3.1.jpg'} className='product-img' alt='user'/></div>
                        <p className='model'>D5300 Kit</p>
                        <p className='brand'>Canon</p>
                        <div className='card-block-nav'>
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
                        </div>
                      </div>
                      <div className='product-pricing'>
                        <div className='product-pricing-box'>
                            <span className='product-pricing-box-price'>230 UAH</span>
                            <span>Будній</span>
                        </div>
                        <div className='product-pricing-box weekend'>
                            <span className='product-pricing-box-price'>250 UAH</span>
                            <span>Вихідний</span>
                        </div>
                        <div className='product-pricing-box week'>
                            <span className='product-pricing-box-price'>3250 UAH</span>
                            <span>Тиждень</span>
                        </div>
                        <div className='product-pricing-box month'>
                            <span className='product-pricing-box-price'>6250 UAH</span>
                            <span>Місяць</span>
                        </div>
                      </div>
                      <div className='product-options'>
                        <button className='view-details'>Деталі товару</button>
                        <button className='add-to-basket'><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/basket.png'} alt='basket'/> В кошик </button>
                      </div>
                    </li>

                    <li className='card-frame'>
                      <div className='product-info'>
                        <div className='product-img-wrapper'><img src={process.env.PUBLIC_URL + '/imagesProducts/Photo/3/3.1.jpg'} className='product-img' alt='user'/></div>
                        <p className='model'>D5300 Kit</p>
                        <p className='brand'>Canon</p>
                        <div className='card-block-nav'>
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
                        </div>
                      </div>
                      <div className='product-pricing'>
                        <div className='product-pricing-box'>
                            <span className='product-pricing-box-price'>230 UAH</span>
                            <span>Будній</span>
                        </div>
                        <div className='product-pricing-box weekend'>
                            <span className='product-pricing-box-price'>250 UAH</span>
                            <span>Вихідний</span>
                        </div>
                        <div className='product-pricing-box week'>
                            <span className='product-pricing-box-price'>3250 UAH</span>
                            <span>Тиждень</span>
                        </div>
                        <div className='product-pricing-box month'>
                            <span className='product-pricing-box-price'>6250 UAH</span>
                            <span>Місяць</span>
                        </div>
                      </div>
                      <div className='product-options'>
                        <button className='view-details'>Деталі товару</button>
                        <button className='add-to-basket'><img src={process.env.PUBLIC_URL + '/imagesHTML/icons/basket.png'} alt='basket'/> В кошик </button>
                      </div>
                    </li>

                  </ul>
                
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
