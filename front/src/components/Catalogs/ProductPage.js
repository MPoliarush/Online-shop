import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

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
   
    const params = useParams()
   

    async function getCartData(){
        console.log(params.id)
        try{
            const response = await axios(`http://localhost:5000/products/${params.id}`)
            console.log(response.data)
            console.log(response.data.img1)
            setInput(response.data)
            setImgArray(response.data.img1)
            setImg(response.data.img1[0])
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=> {
        getCartData()
        console.log('logged')
    }, [])



    function activeHandler(e){
        e.preventDefault()
        console.log(e.target.value)
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


// console.log(input.img1[1].filename)


function replacePhoto() {

}



    return (
        <div className="content-container-admin">
            <h1 className='main-header'>ФОТОКАМЕРА</h1>
            <div className="single">

            
            <div className='cart-block'>
                <div className='card-frame-single'>
                    <div>
                        {imgArray.map(img=>{
                            return <img className='small' onClick={replacePhoto} src={`http://localhost:5000/uploadedIMG/${img.filename}`} />
                            })
                        }
                    </div>
                    <div className='product-info'>
                        <div className='product-img-wrapper-single'>
                       
                         <img className='product-img' src={`http://localhost:5000/uploadedIMG/${img.filename}`} />
                        
                      
                        </div>
                        <div className='block-nav'>
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png'} alt='compare' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compareHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/compare.png')} />
                            <img src={process.env.PUBLIC_URL + '/imagesHTML/icons/star.png'} alt='star' onMouseOver={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/starHovered.png')} onMouseOut={e => (e.currentTarget.src = process.env.PUBLIC_URL + '/imagesHTML/icons/star.png')}  />
                        </div>
                    </div>
                </div>
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
                    <div>{activeInputs.descr==true && input.typeGoods=='Фотокамера' ? <p>{input.description} </p>: 
                        (<>
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
                                <span>Висота,мм</span><span>{input.height}</span>
                            </div>
                            <div className='details-block'>
                                <span>Вага,г</span><span>{input.weight}</span>
                            </div>
                        </>
                        )
                    }</div>
                </div>
            </div>
            
            </div>
            </div>
            
        </div>
        
    )
}

export default ProductPage