import ProductIntro from './ProductIntro'
import Header from './Header'


function CatalogCamera(){
    return (
        <>
       <div className='content-container'>
                    <Header></Header>
        </div>
        <main>
        <div className="catalog-content-container">
            <h1 className="catalog-h1">ВСІ ФОТОКАМЕРИ</h1>
            <div>
                <h3>Знайдено 21 товарів </h3>
                <p className="basic-text">В нашому магазині представлений широкий вибір фотокамер для оренди як для професіонального, так і сімейного вискористання. Зафіксуйте найцінніші моменти свого життя у повних барвах</p>
                <select id='price-selection'> 
                    <option>За зростанням ціни</option>
                    <option>За спаданням ціни</option>
                </select>
                <div className='big-goods-container'>
                    <div className='goods-container'>
                        <ProductIntro></ProductIntro>
                        <ProductIntro></ProductIntro>
                        <ProductIntro></ProductIntro>  
                    </div>
                    <div className='side-bar'>
                        <form className='select'>
                            <div className='select-block'>
                                <p>Бренд</p>
                                <div><input type='checkbox' id='canon' name='brand'/><label htmlFor='canon'>Canon</label></div>
                                <div><input type='checkbox' id='nikon' name='brand'/><label htmlFor='nikon'>Nikon</label></div>
                                <div><input type='checkbox' id='sony' name='brand'/><label htmlFor='sony'>Nikon</label></div>
                            </div>
                            <div className='select-block'>
                                <p>Тип</p>
                                <div><input type='checkbox' id='mirr' name='brand'/><label htmlFor='mirr'>Дзеркальна</label></div>
                                <div><input type='checkbox' id='compact' name='brand'/><label htmlFor='compact'>Компактна</label></div>
                            </div>
                            <div className='select-block'>
                                <p>Відео</p>
                                <div><input type='checkbox' id='3К' name='brand'/><label htmlFor='3К'>3К</label></div>
                                <div><input type='checkbox' id='4К' name='brand'/><label htmlFor='4К'>4К</label></div>
                                <div><input type='checkbox' id='FullHD' name='brand'/><label htmlFor='FullHD'>FullHD</label></div>
                            </div>
                            <div className='select-block'>
                                <p>Ціна за день, грн</p>
                                <div><input type="range" min="1" max="300" id="myRange"/><label htmlFor='FullHD'>300</label></div>
                                
                                
                            </div>
                            <div className='select-block'>
                                <p>Наявність товару</p>
                                <div><input type='checkbox' id='3К' name='brand'/><label htmlFor='3К'>3К</label></div>
                                <div><input type='checkbox' id='4К' name='brand'/><label htmlFor='4К'>4К</label></div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        </main>
        </>
    )
}

export default CatalogCamera