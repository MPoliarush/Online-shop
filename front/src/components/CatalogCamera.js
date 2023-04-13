import { useState,useEffect } from 'react'
import ProductIntro from './ProductIntro'
import Cart from './Cart'
import axios from "axios";


function CatalogCamera(){
    const [rangeVal, setRangeValue]=useState('100')
    const [fetchedData, setFetchedData] = useState([])
    const [initalData, setinitaiData]=useState([])
    const [selectionMode, setSelectionMode] = useState('');
    const [filterList,setFilterList] = useState({
        brand:[],
        type:[],
        imgdepth:[],
        video:[],
        maxPrice:'',
        availability:[]
    })

async function getInfo (props) {
    try{
        const response = await axios("http://localhost:5000/products")
        const sortedUp = response.data.sort((a,b)=>{
            return a.work_price-b.work_price
        })
        setFetchedData(sortedUp)
        setinitaiData(sortedUp)
    }catch(e){
        console.log(e.response)
    }
    }
    
useEffect(()=>{  
    getInfo()

},[])


function rangeValue(event){
    console.log(event.target.value)
    setRangeValue(event.target.value)
}


let uniqueChars = fetchedData.map(item=>{
    return item.imgdepth
})
const single = [...new Set(uniqueChars)]

let uniqueBrands = fetchedData.map(item=>{
    return item.brand
})
const singleBrand = [...new Set(uniqueBrands)]


function selctions(event){
    setSelectionMode(event.target.value)
}

useEffect(()=>{

    if (selectionMode == "up"){
        const sortedUp = [...fetchedData].sort((a,b)=>{
            return a.work_price-b.work_price
        })
        console.log(selectionMode)
        setFetchedData(sortedUp)
        
    } else if (selectionMode == "down"){
        const sortedUp = [...fetchedData].sort((a,b)=>{
            return b.work_price-a.work_price
        })
        console.log(selectionMode)
        setFetchedData(sortedUp)  
    }
},[selectionMode])


function inputHandler(e){
    console.log(e.target.value)
    if (e.target.name =='brand'){
        setFilterList({...filterList,
            brand: filterList.brand.concat([e.target.value])
        })
    }
    if (e.target.name =='type'){
        setFilterList({...filterList,
            type: filterList.type.concat([e.target.value])
        })
    }
    if (e.target.name =='imgdepth'){
        setFilterList({...filterList,
            imgdepth:filterList.imgdepth.concat([e.target.value])
        })
    }
    if (e.target.name =='video'){
        setFilterList({...filterList,
            video:filterList.video.concat([e.target.value])
        })
    }
    if (e.target.name =='maxPrice'){
        setFilterList({...filterList,
            maxPrice:e.target.value
        })
    }
    if (e.target.name =='availability'){
        setFilterList({...filterList,
            availability:filterList.availability.concat([e.target.value])
        })
    }


}

function filterHandler(e){
    e.preventDefault()
    console.log(filterList)

}



    console.log(fetchedData)

    return (
        <>
       
        <main>
        <div className="catalog-content-container">
            <h1 className="catalog-h1">ВСІ ФОТОКАМЕРИ</h1>
            <div>
                <h3>Знайдено 21 товарів </h3>
                <p className="basic-text">В нашому магазині представлений широкий вибір фотокамер для оренди як для професіонального, так і сімейного вискористання. Зафіксуйте найцінніші моменти свого життя у повних барвах</p>
                <select id='price-selection' onChange={selctions} sortValue={selctions}> 
                    <option value='up'> За зростанням ціни</option>
                    <option value='down'> За спаданням ціни</option>
                </select>
                <div className='big-goods-container'>
                    <div className='goods-container'>
                        <ul className='goods-container-ul'>
                           
                            {fetchedData.map(item=>{
                                return (
                                    <Cart key={Math.random()} itemData={item} ></Cart>
                                )
                            })
                            }

                        </ul>
                        
                    </div>
                    <div className='side-bar'>
                        <form className='select'>
                        <div className='select-block' onChange={inputHandler}>
                                <p>Бренд</p>
                                <ul>
                                    {singleBrand.map(item=>{
                                        return (
                                            <div><input type='checkbox' id={item} name='brand' value={item}/><label htmlFor={item}>{item}</label></div>
                                            )
                                        })
                                    }
                                </ul>
                                
                                
                            </div>
                            <div className='select-block' onChange={inputHandler}>
                                <p>Тип</p>
                                <div><input type='checkbox' id='mirr' name='type' value='Дзеркальна'/><label htmlFor='mirr'>Дзеркальна</label></div>
                                <div><input type='checkbox' id='compact' name='type' value='Компактна'/><label htmlFor='compact'>Компактна</label></div>
                            </div>
                            <div className='select-block' onChange={inputHandler}>
                                <p>Глибина зображення</p>
                                <ul>
                                    {single.map(item=>{
                                        
                                        return (
                                            <div><input type='checkbox' id={item} name='imgdepth' value={item}/><label htmlFor={item}>{item}</label></div>
                                            )
                                        })
                                    }
                                </ul>
                                
                                
                            </div>
                            <div className='select-block' onChange={inputHandler}>
                                <p>Відео</p>
                                <div><input type='checkbox' id='3К' name='video' value='3К'/><label htmlFor='3К'>3К</label></div>
                                <div><input type='checkbox' id='4К' name='video' value='4К'/><label htmlFor='4К'>4К</label></div>
                                <div><input type='checkbox' id='FullHD' name='video' value='FullHD'/><label htmlFor='FullHD'>FullHD</label></div>
                            </div>
                            <div className='select-block' onChange={inputHandler}>
                                <p>Ціна за день, грн</p>
                                <div className='range'><input type="range" name='maxPrice' min="1" max="300" id="myRange" value onChange={rangeValue}/><label htmlFor='FullHD'>{rangeVal}</label></div>
                                
                                
                            </div>
                            <div className='select-block' onChange={inputHandler}>
                                <p>Наявність товару</p>
                                <div><input type='checkbox' id='3К' name='availability' value='1'/><label htmlFor='3К'>В наявності</label></div>
                                <div><input type='checkbox' id='4К' name='availability' value='0'/><label htmlFor='4К'>Не в наявності</label></div>
                            </div>
                            <button className='apply-btn' onClick={filterHandler}>Застосувати</button>
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