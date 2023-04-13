import { useState,useEffect } from 'react'
import ProductIntro from './ProductIntro'
import Cart from './Cart'
import axios from "axios";


function CatalogCamera(){
    const [rangeVal, setRangeValue]=useState('100')
    const [fetchedData, setFetchedData] = useState([])

async function getInfo (props) {
    try{
        const response = await axios("http://localhost:5000/products")
        console.log(response.data)
        setFetchedData(response.data)
    }catch(e){
        console.log(e.response)
    }
    }
    
useEffect(()=>{  
    getInfo()
    console.log('runned')
    console.log(fetchedData)

},[])

    function rangeValue(event){
        console.log(event.target.value)
        setRangeValue(event.target.value)
    }


let uniqueChars = fetchedData.map(item=>{
    return item.imgdepth
})

const single = [...new Set(uniqueChars)]




    return (
        <>
       
        <main>
        <div className="catalog-content-container">
            <h1 className="catalog-h1">ВСІ ФОТОКАМЕРИ</h1>
            <div>
                <h3>Знайдено 21 товарів </h3>
                <p className="basic-text">В нашому магазині представлений широкий вибір фотокамер для оренди як для професіонального, так і сімейного вискористання. Зафіксуйте найцінніші моменти свого життя у повних барвах</p>
                <select id='price-selection'> 
                    <option>Сортувати</option>
                    <option>За зростанням ціни</option>
                    <option>За спаданням ціни</option>
                </select>
                <div className='big-goods-container'>
                    <div className='goods-container'>
                        <ul className='goods-container-ul'>
                            {fetchedData.map(item=>{
                                return (
                                    <Cart key={Math.random()} itemData={item} ></Cart>
                                )
                            })}

                        </ul>
                        
                    </div>
                    <div className='side-bar'>
                        <form className='select'>
                            <div className='select-block'>
                                <p>Бренд</p>
                                <ul>
                                    {fetchedData.map(item=>{
                                        return (
                                            <div><input type='checkbox' id={item.brand} name='brand'/><label htmlFor={item.brand}>{item.brand}</label></div>
                                        )
                                        })
                                    }
                                </ul>
                                
                            </div>
                            <div className='select-block'>
                                <p>Тип</p>
                                <div><input type='checkbox' id='mirr' name='brand'/><label htmlFor='mirr'>Дзеркальна</label></div>
                                <div><input type='checkbox' id='compact' name='brand'/><label htmlFor='compact'>Компактна</label></div>
                            </div>
                            <div className='select-block'>
                                <p>Глибина зображення</p>
                                <ul>
                                    {single.map(item=>{
                                        
                                        return (
                                            <div><input type='checkbox' id={item.imgdepth} name='imgdepth'/><label htmlFor={item.imgdepth}>{item}</label></div>
                                            )
                                        })
                                    }
                                </ul>
                                
                                
                            </div>
                            <div className='select-block'>
                                <p>Відео</p>
                                <div><input type='checkbox' id='3К' name='brand'/><label htmlFor='3К'>3К</label></div>
                                <div><input type='checkbox' id='4К' name='brand'/><label htmlFor='4К'>4К</label></div>
                                <div><input type='checkbox' id='FullHD' name='brand'/><label htmlFor='FullHD'>FullHD</label></div>
                            </div>
                            <div className='select-block'>
                                <p>Ціна за день, грн</p>
                                <div className='range'><input type="range" min="1" max="300" id="myRange" value='100' onChange={rangeValue}/><label htmlFor='FullHD'>{rangeVal}</label></div>
                                
                                
                            </div>
                            <div className='select-block'>
                                <p>Наявність товару</p>
                                <div><input type='checkbox' id='3К' name='brand'/><label htmlFor='3К'>В наявності</label></div>
                                <div><input type='checkbox' id='4К' name='brand'/><label htmlFor='4К'>Не в наявності</label></div>
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