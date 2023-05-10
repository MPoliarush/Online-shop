import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {orderActions,compareActions} from '../../store/store'
import Footer from '../Footer';
import axios from "axios";



function Comparison(){

    const stateComparison = useSelector(state=> state.comparison.items)
    console.log(stateComparison)
    const dispatch =useDispatch()

    const [goodsSet,setGoodsSet] = useState([])
    const [goodsQuantity,setGoodsQuantity] = useState({})

    const[active,setActive] = useState({
        cameras:true,
        linses:false
    })

    useEffect(()=>{

        let goodsSet=[]
        goodsSet = stateComparison.map(item=>{
            return item.typeGoods
        })
        const types = [...new Set(goodsSet)]
        console.log(types)
        setGoodsSet(types)

        let typesNumber = {}

        for (const item of types){
            typesNumber[item] = 0
            for (const good of stateComparison){
                if(good.typeGoods==item){
                    typesNumber[item]++
                }
            }
        }
        setGoodsQuantity(typesNumber)
        console.log(typesNumber)

    },[])


    function deletefromCompare(e){
        dispatch(compareActions.removeFromCompare(JSON.parse(e.currentTarget.name)))
    }


    function activeHandler(e){
       

    }


    return <>
         <main>
            <div className="catalog-content-container">
            <h1 className="registration"><span>ПОРІВНЯННЯ</span> ТОВАРІВ</h1>
                <div className="compare-goods">
                    {
                        goodsSet.map(good=>{
                            return <span className= {active ? "compare-goods-span active" : "compare-goods-span"} name={good} onClick={activeHandler}>{good} ({goodsQuantity[good]})</span>
                        })
                    }
                </div>

                <div className="cameras-compare">
                    
                    <div className='sticky'>
                        <div className="block-separator">
                            <ul className="ul-container">
                                <li className="head">Фото</li>
                                    <div className="content-line"> 
                                        {stateComparison.map(item=>{
                                            return (
                                                <li><img className="compareImgs" src = {`http://localhost:5000/uploadedIMG/${item.img1[0].filename}`} /> <img className="compare-delete" src="/imagesHTML/icons/delete.png" onClick={deletefromCompare} name={JSON.stringify(item)} /></li>
                                            )
                                        })}
                                    </div>
                            </ul>
                        </div>
                        <div className="block-separator">
                        
                            <ul className="ul-container">
                            <li className="head">Бренд</li>
                                <div className="content-line"> 
                                    {stateComparison.map(item=>{
                                        return (
                                            <li>{item.brand}</li>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                        <div className="block-separator">
                            
                            <ul className="ul-container">
                            <li className="head">Модель</li>
                                <div className="content-line"> 
                                    {stateComparison.map(item=>{
                                        return (
                                            <li>{item.model}</li>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Глибина зображення</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.imgdepth}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Тип</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.type}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Матриця</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.matrix}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Роздільна здатність</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.matrix}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Відео</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.video}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Експокорекція</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.exposition}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Ширина, мм</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.width}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Висота, мм</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.height}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Глибина, мм</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.depth}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вага, г</li>
                            <div className="content-line">  
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.weight}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість будній день, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.work_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість вихідний день, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.weekend_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість тиждень, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.week_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість місяць, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.month_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head"></li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li className="add-to-basket">Замовити</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="linsas-compare">
                    <div className='sticky'>
                        <div className="block-separator">
                            <ul className="ul-container">
                                <li className="head">Фото</li>
                                    <div className="content-line"> 
                                        {stateComparison.map(item=>{
                                            return (
                                                <li><img className="compareImgs" src = {`http://localhost:5000/uploadedIMG/${item.img1[0].filename}`} /> <img className="compare-delete" src="/imagesHTML/icons/delete.png" onClick={deletefromCompare} name={JSON.stringify(item)} /></li>
                                            )
                                        })}
                                    </div>
                            </ul>
                        </div>
                        <div className="block-separator">
                        
                            <ul className="ul-container">
                            <li className="head">Бренд</li>
                                <div className="content-line"> 
                                    {stateComparison.map(item=>{
                                        return (
                                            <li>{item.brand}</li>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                        <div className="block-separator">
                            
                            <ul className="ul-container">
                            <li className="head">Модель</li>
                                <div className="content-line"> 
                                    {stateComparison.map(item=>{
                                        return (
                                            <li>{item.model}</li>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Глибина зображення</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.imgdepth}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Тип</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.type}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Матриця</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.matrix}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Роздільна здатність</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.matrix}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Відео</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.video}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Експокорекція</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.exposition}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Ширина, мм</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.width}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Висота, мм</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.height}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Глибина, мм</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.depth}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вага, г</li>
                            <div className="content-line">  
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.weight}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість будній день, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.work_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість вихідний день, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.weekend_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість тиждень, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.week_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head">Вартість місяць, грн</li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li>{item.month_price}</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <div className="block-separator">
                        
                        <ul className="ul-container">
                        <li className="head"></li>
                            <div className="content-line"> 
                                {stateComparison.map(item=>{
                                    return (
                                        <li className="add-to-basket">Замовити</li>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                </div>

            </div>

        </main>
        <Footer></Footer>
    </>
}

export default Comparison