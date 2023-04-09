
function FirstPage(){
    return (
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

        <div className='third-page content-container'>
          <div className='third-page-box'>
            <h3>ВИ <span>ШУКАЄТЕ</span> ЩОСЬ КОНКРЕТНЕ?</h3>
            <p>Проект Fotoprokat24 є агрегатором пропозицій всіх фотопрокатів міста та служить для Вашої зручності. Виберіть потрібну категорію, або почніть пошук за назвою. Оформивши замовлення, Ви зможете забрати його з Пункту Видачі або замовити доставку в будь-яку точку міста.</p>
            <div className='third-page-btns'>
              <button className='thirt-page-button'>ПЕРЕЙТИ В КАТАЛОГ</button>
              <button className='thirt-page-button'>ПОШУК</button>
            </div>
          </div>
        </div>

        <div className='images-page content-container'>
          <div className='image-box'>
            <img src={process.env.PUBLIC_URL + '/imagesHTML/1.jpg'} alt='user'/>
            <p>Фотокамери Canon від 200 UAH</p>
          </div>
          <div className='image-box'>
            <img src={process.env.PUBLIC_URL + '/imagesHTML/2.jpg'} alt='user'/>
            <p>Об'єктиви від 200 UAH</p>
          </div>
          <div className='image-box'>
            <img src={process.env.PUBLIC_URL + '/imagesHTML/3.jpg'} alt='user'/>
            <p>Товар тижня від 200 UAH</p>
          </div>
          <div className='image-box'>
            <img src={process.env.PUBLIC_URL + '/imagesHTML/4.jpg'} alt='user'/>
            <p>Товар тижня від 200 UAH</p>
          </div>
          <div className='image-box'>
            <img src={process.env.PUBLIC_URL + '/imagesHTML/5.jpg'} alt='user'/>
            <p>Фотокамери тижня від 200 UAH</p>
          </div>
        </div>

        <div className='last-page'>
          <img src={process.env.PUBLIC_URL + '/imagesHTML/map.png'}/>
          <div className='content-container'>
            <div className='last-page-content'>
              <div className='stote-data'>
                <p>Фотопрокат Зум</p>
                <span>вул.О.Теліги,6</span>
                <a href=''>www.google.com</a>
              </div>
              <div className='stote-data'>
                <p>Фотопрокат Зум</p>
                <span>вул.О.Теліги,6</span>
                <a href=''>www.google.com</a>
              </div>
              <div className='stote-data'>
                <p>Фотопрокат Зум</p>
                <span>вул.О.Теліги,6</span>
                <a href=''>www.google.com</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default FirstPage