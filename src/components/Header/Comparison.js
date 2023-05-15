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

    const[active,setActive] = useState('')

    useEffect(()=>{

        let goodsSet=[]
        goodsSet = stateComparison.map(item=>{
            return item.typeGoods
        })
        const types = [...new Set(goodsSet)]
        // console.log(types)
        setGoodsSet(types)

        let typesNumber = {}

        for (const item of types){
            typesNumber[item] = []
            for (const good of stateComparison){
                if(good.typeGoods==item){
                    typesNumber[item].push(good)
                }
            }
        }

        setGoodsQuantity(typesNumber)
        // console.log(typesNumber)

       if (stateComparison.length==0){
        return
       }
        

    },[active,stateComparison])


    function deletefromCompare(e){
        // if(stateComparison.length==1){
        //     return 
        // }
        dispatch(compareActions.removeFromCompare(JSON.parse(e.currentTarget.name)))
    }


    function activeHandler(e){
       
        // console.log(e)
        if(e.target.outerText=='Фотокамера'){
            setActive(e.target.innerText)
        } else {
            setActive(e.target.innerText)
        }

    }

    console.log(goodsQuantity)
    console.log(active)
    console.log(goodsSet)

    return <>
         <main>
            <div className="catalog-content-container">
            <h1 className="registration"><span>ПОРІВНЯННЯ</span> ТОВАРІВ</h1>
                <div className="compare-goods">
                
                {goodsSet.length==0 ? <p>Немає товарів для порівняння</p>  : ''}
                    {
                        goodsSet.map(good=>{
                            {/* console.log(active, good) */}
                            return <> <span className= {active === good ? "compare-goods-span active" : "compare-goods-span"} onClick={activeHandler}>{good}</span> <span className="num">( {goodsQuantity[good].length} )</span> </>
                        })
                    }
                </div>

            { 
                active == 'Фотокамера' && stateComparison.length>0 ?
                    <div className="cameras-compare">
                        
                        <div className='sticky'>
                            <div className="block-separator">
                                <ul className="ul-container">
                                    <li className="head">Фото</li>
                                        <div className="content-line"> 
                                            {goodsQuantity.Фотокамера.map(item=>{
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
                                        {goodsQuantity.Фотокамера.map(item=>{
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
                                        {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
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
                                    {goodsQuantity.Фотокамера.map(item=>{
                                        return (
                                            <li className="add-to-basket">Замовити</li>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                : active == 'Лінза' && stateComparison.length>0 ?
                    <div className="linsas-compare">
                        <div className='sticky'>
                            <div className="block-separator">
                                <ul className="ul-container">
                                    <li className="head">Фото</li>
                                        <div className="content-line"> 
                                            {goodsQuantity.Лінза.map(item=>{
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
                                        {goodsQuantity.Лінза.map(item=>{
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
                                        {goodsQuantity.Лінза.map(item=>{
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
                                <li className="head">Діаметр</li>
                                    <div className="content-line"> 
                                        {goodsQuantity.Лінза.map(item=>{
                                            return (
                                                <li>{item.diametr}</li>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </div>
                            <div className="block-separator">
                                
                                <ul className="ul-container">
                                <li className="head">Мінамальна фокусна відстань, мм</li>
                                    <div className="content-line"> 
                                        {goodsQuantity.Лінза.map(item=>{
                                            return (
                                                <li>{item.min_focus_length}</li>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </div>
                            <div className="block-separator">
                                
                                <ul className="ul-container">
                                <li className="head">Тип лінзи</li>
                                    <div className="content-line"> 
                                        {goodsQuantity.Лінза.map(item=>{
                                            return (
                                                <li>{item.linseType}</li>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </div>
                        
                        <div className="block-separator">
                            
                            <ul className="ul-container">
                            <li className="head">Вартість будній день, грн</li>
                                <div className="content-line"> 
                                    {goodsQuantity.Лінза.map(item=>{
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
                                    {goodsQuantity.Лінза.map(item=>{
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
                                    {goodsQuantity.Лінза.map(item=>{
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
                                    {goodsQuantity.Лінза.map(item=>{
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
                                    {goodsQuantity.Лінза.map(item=>{
                                        return (
                                            <li className="add-to-basket">Замовити</li>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                : ''
            }
            </div>

        </main>
        <Footer></Footer>
    </>
}

export default Comparison