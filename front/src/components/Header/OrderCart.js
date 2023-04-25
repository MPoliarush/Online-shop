

function OrderCart(){


return(
    <>
        <div className = 'content-container orders'>
            <h1 className='orders-h1'>КОШИК ТОВАРІВ</h1>
            <div className='period'>
                <div className='from'>
                    <span>З якого числа:</span>
                    <input type='date'  className="calendar-input"/>
                </div>
                <div className='to'>
                    <span>По яке число:</span>
                    <input type='date'  className="calendar-input"/>
                </div>
            </div>

            <div className="goods-wrapper">
                <div className="heading">
                    <span  className="fixedWidth">Фото</span>
                    <span  className="fixedWidth">Назва</span>
                    <span  className="fixedWidth">Робочих днів</span>
                    <span className="fixedWidth">Вихідних днів</span>
                    <span className="fixedWidth">Тижнів</span>
                    <span className="fixedWidth">Місяців</span>
                    <span className="fixedWidth">Всього вартість</span>
                    <span className="fixedWidth"></span>
                    
                </div>
                <div className='item'>
                    <img  className="fixedWidth"/>
                    <div className="fixedWidth">
                        <p>Model</p>
                        <p>Brand</p>
                    </div>
                    <p className="fixedWidth">6 * 250$</p>
                    <p className="fixedWidth">3 * 350$</p>
                    <p className="fixedWidth">0 * 1500$</p>
                    <p className="fixedWidth">0 * 3600$</p>
                    <p className="fixedWidth">1200 $</p>
                    <span className="fixedWidth"><img /></span>
                </div>
                    
                
            </div>
        </div>
    </>
)
}

export default OrderCart