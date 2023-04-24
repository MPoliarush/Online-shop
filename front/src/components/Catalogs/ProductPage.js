import {useState, useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Cart from '../Cart';
import Footer from '../Footer';

function ProductPage(){
    const [input,setInput]=useState({
        typeGoods:null,
        brand:null,
        model:null,
        imgdepth:null,
        type:null,
        matrix:null,
        mpx:null,
        video:null,
        exposition:null,
        width:null,
        height:null,
        depth:null,
        weight:null,
        work_price:null,
        weekend_price:null,
        week_price:null,
        month_price:null,
        min_focus_length:null,
        diametr:null,
        linseType:null,
        linceLength:null,
        availability:'false',
        description:null
})
    const [imgArray,setImgArray] = useState([])
    const [img,setImg] = useState([])
    const [activeInputs,setActiveInputs] = useState({
        descr:true,
        details:false
    })
    const [fetchedData, setFetchedData] = useState([])
    const params = useParams()



async function getInfo () {
    try{
        const response = await axios("http://localhost:5000/products")
        
        setFetchedData(response.data)
    }catch(e){
        console.log(e.response)
    }
    }
    
useEffect(()=>{  
    getInfo()
    
},[])




    async function getCartData(){
        console.log(params.id)
        try{
            const response = await axios(`http://localhost:5000/products/${params.id}`)
           
           
            setInput(response.data)
            setImgArray(response.data.img1)
            setImg(response.data.img1[0].filename)
        }catch(e){
            console.log(e)
        }
    }


    useEffect(()=> {
        getCartData()
        console.log('logged')
        window.scrollTo(0, 0)
    }, [params.id])



    function activeHandler(e){
        e.preventDefault()
        if(e.target.value=='Опис'){
            setActiveInputs({
                descr:true,
                details:false})
        } else {
            setActiveInputs({
                descr:false,
                details:true})
        }

    }


function replacePhoto(e) {
    console.log(img)
    console.log(e.currentTarget.name)
setImg(e.currentTarget.name)
}


let camera = (<>
    <div className='details-block'>
        <span>Глибина</span><span>{input.imgdepth}</span>
    </div>
    <div className='details-block'>
        <span>Тип</span><span>{input.type}</span>
    </div>
    <div className='details-block'>
        <span>Матриця</span><span>{input.matrix}</span>
    </div>
    <div className='details-block'>
        <span>Мпкс</span><span>{input.mpx}</span>
    </div>
    <div className='details-block'>
        <span>Відео</span><span>{input.video}</span>
    </div>
    <div className='details-block'>
        <span>Експокорекція</span><span>{input.exposition}</span>
    </div>
    <div className='details-block'>
        <span>Ширина, мм</span><span>{input.width}</span>
    </div>
    <div className='details-block'>
        <span>Висота, мм</span><span>{input.height}</span>
    </div>
    <div className='details-block'>
        <span>Вага, г</span><span>{input.weight}</span>
    </div>
</>
)

let linsa=(<>
    <div className='details-block'>
        <span>Найменша фокусна відстань, мм</span><span>{input.min_focus_length}</span>
    </div>
    <div className='details-block'>
        <span>Діаметр, мм</span><span>{input.diametr}</span>
    </div>
    <div className='details-block'>
        <span>Тип</span><span>{input.linceLength}</span>
    </div>
    <div className='details-block'>
        <span>Довжина</span><span>{input.linceLength}</span>
    </div>
</>
)


    return (
        <>
        <div>
            <div className="content-container-admin">
                {input.typeGoods=="Фотокамера"? <h1 className='main-header'>ФОТОКАМЕРИ</h1> : input.typeGoods=="Лінза"? <h1 className='main-header'>ЛІНЗИ </h1>:'' }
                <div className="single">
                    <div className='cart-block'>
                        <div className='card-frame-single'>
                            <div>
                                {imgArray.map(img=>{
                                    return <div className='small-cont'><img className='small' onClick={replacePhoto} src={`http://localhost:5000/uploadedIMG/${img.filename}`} name={img.filename} /></div> 
                                    })
                                }
                            </div>
                            <div className='product-info'>
                                <div className='product-img-wrapper-single'>
                            
                                <img className='product-img' src={`http://localhost:5000/uploadedIMG/${img}`} />
                                
                            
                                </div>
                                <div className='block-nav'>
                                    <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
                                    <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
                                </div>
                            </div>
                        </div>
                        <button className='add-to-basket big'><img src= '/imagesHTML/icons/basket.png' alt='basket'/> В кошик </button>
                    </div>
                    <div className='product-description'>
                        <div className='product-header'>
                            <h2>{input.brand}</h2>
                            <p>{input.model}</p>
                        </div>
                        <div className='availability'>{input.availability=='true'? <span className='greenStyle'>В навності</span> : <span className='gray'>Немає в навності</span>}</div>
                        <div className='content-wrapp'>
                        <div className='options'>
                            <button onClick={activeHandler} className={activeInputs.descr==true ? 'active' : 'passive'} value='Опис'>Опис</button>
                            <button onClick={activeHandler} className={activeInputs.details==true ? 'active' : 'passive'} value='Характеристики'>Характеристики</button>
                        </div>
                        <div className='content'>
                            <div>
                            
                            { activeInputs.descr==true && input.typeGoods=='Лінза'?
                                <p>{input.description} Опис відсутній</p>
                                : activeInputs.details==true && input.typeGoods=='Лінза' ? linsa  :''      
                            }
                            { activeInputs.descr==true && input.typeGoods=='Фотокамера'?
                                <p>{input.description}</p>
                                : activeInputs.details==true && input.typeGoods=='Фотокамера' ? camera  :''      
                            }
                            
                            </div>
                        </div>
                    </div>
                
                    </div>
                </div>

                <div className='recommended'>
                    <div>
                        <h3 className='second-page-header'><span>ПОПУЛЯРНІ </span>ТОВАРИ</h3>
                        <img className='arrow-right' src={process.env.PUBLIC_URL + '/imagesHTML/icons/left.png'} alt='user'/>
                        <img className='arrow-left' src={process.env.PUBLIC_URL + '/imagesHTML/icons/right.png'} alt='user'/>
                        <div className='slider-visible-wrapper'>
                            <ul className='slider-string'>
                                {fetchedData.map( item=>{
                                    return  <Cart key= {Math.random()} itemData={item}></Cart>
                                    })
                                }
                            </ul>
            
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}

export default ProductPage