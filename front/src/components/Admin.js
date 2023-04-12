import {useState,useEffect} from 'react'
import axios from "axios";


function Admin(){
    const [input,setInput]=useState({
        typeGoods:'',
        brand:'',
        model:'',
        imgdepth:'',
        type:'',
        matrix:'',
        mpx:'',
        video:'',
        exposition:'',
        width:0,
        height:0,
        depth:0,
        weight:0,
        work_price:0,
        weekend_price:0,
        week_price:0,
        month_price:0,
        availability:1,
    })

    const [isSubmitted, setSubmitted] = useState(false)
    const [uploadedIMG, setUploadedIMG] = useState(null)
 
function inputHandler(event){
    // console.log(event.target.name)
    // console.log(event.target.value)
    if (event.target.name==='typeGoods'){
        setInput({...input,
            typeGoods:event.target.value
        })
    } 

    if (event.target.name==='brand'){
        setInput({...input,
            brand:event.target.value
        })
    } 

    if (event.target.name==='model'){
        setInput({...input,
            model:event.target.value
        })
    } 

    if (event.target.name==='imgdepth'){
        setInput({...input,
            imgdepth:event.target.value
        })
    } 

    if (event.target.name==='type'){
        setInput({...input,
            type:event.target.value
        })
    } 

    if (event.target.name==='matrix'){
        setInput({...input,
            matrix:event.target.value
        })
    } 

    if (event.target.name==='mpx'){
        setInput({...input,
            mpx:event.target.value
        })
    } 

    if (event.target.name==='video'){
        setInput({...input,
            video:event.target.value
        })
    }

    if (event.target.name==='exposition'){
        setInput({...input,
            exposition:event.target.value
        })
    }

    if (event.target.name==='width'){
        setInput({...input,
            width:+event.target.value
        })
    }

    if (event.target.name==='height'){
        setInput({...input,
            height:+event.target.value
        })
    }

    if (event.target.name==='depth'){
        setInput({...input,
            depth:+event.target.value
        })
    }

    if (event.target.name==='weight'){
        setInput({...input,
            weight:+event.target.value
        })
    }

    if (event.target.name==='work_price'){
        setInput({...input,
            work_price:+event.target.value
        })
    }

    if (event.target.name==='weekend_price'){
        setInput({...input,
            weekend_price:+event.target.value
        })
    }

    if (event.target.name==='week_price'){
        setInput({...input,
            week_price:+event.target.value
        })
    }

    if (event.target.name==='month_price'){
        setInput({...input,
            month_price:+event.target.value
        })
    }


    if (event.target.name==='availability'){
        setInput({...input,
            availability:Number(event.target.value)
        })
    } 
   
}

// console.log(input)



async function submitHandler(event){
    event.preventDefault()
    console.log('submitted')
    setSubmitted(true)

    
    let formData = new FormData()
    
    for (let i=0; i<uploadedIMG.length;i++){
        formData.append('imgS', uploadedIMG[i])
    }
    
    formData.append('input', JSON.stringify(input))
    const config = {
        headers:{
            "Content-Type": "multipart/form-data"
        }
    }
    const response = await axios.post('http://localhost:5000/admin', formData, config )
    console.log(response)

   
    let inputData = input
    fetch('http://localhost:5000/admin',{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*"
        },
        body:JSON.stringify(inputData)
        }
    ).then(res=>res.json()).then(data=>{
        console.log(data)
    })

    
}
    
function handleChange(e){
    setUploadedIMG(e.target.files)
}



    return(
        <div className='content-container-admin'>
            <h1>ПАНЕЛЬ АДМІНІСТРАТОРА</h1>
            <div>
                <h3>Форма додавання товару на сайт</h3>
                <form className='admin-block' onSubmit={(e)=>e.preventDefault()}>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Вид товару</p>
                        <div className='input-div'><input type='radio' id='3К' name='typeGoods' value='Фотокамера' /><label htmlFor='3К'>Фотокамера</label></div>
                        <div className='input-div'><input type='radio' id='4К' name='typeGoods' value='Лінза'/><label htmlFor='4К'>Лінза</label></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Марка</p>
                        <div className='input-div'><input type='text' size='20' name='brand' /></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Модель</p>
                        <div className='input-div'><input type='text'  name='model'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Глибина зображення</p>
                        <div className='input-div'><input type='text'  name='imgdepth'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Тип зображення</p>
                        <div className='input-div'><input type='radio' id='type1' name='type' value='Дзеркальна'/><label htmlFor='type1'>Дзеркальна</label></div>
                        <div className='input-div'><input type='radio' id='type2' name='type' value='Компактна'/><label htmlFor='type2'>Компактна</label></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Матриця</p>
                        <div className='input-div'><input type='text'  name='matrix'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Роздільна здатність, Mpx</p>
                        <div className='input-div'><input type='text'  name='mpx'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Якість відео</p>
                        <div className='input-div'><input type='text'  name='video'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Експокорекція</p>
                        <div className='input-div'><input type='text'  name='exposition'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Ширина, мм</p>
                        <div className='input-div'><input type='number'  min='1' name='width'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Висота, мм</p>
                        <div className='input-div'><input type='number' min='1' name='height'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Глибина, мм</p>
                        <div className='input-div'><input type='number' min='1' name='depth'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Вага, г</p>
                        <div className='input-div'> <input type='number'  min='1' name='weight'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Ціна будній день, грн</p>
                        <div className='input-div'><input type='number'  min='1' name='work_price'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Ціна вихідний день, грн</p>
                        <div className='input-div'><input type='number'  min='1' name='weekend_price'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Ціна за тиждень день, грн</p>
                        <div className='input-div'><input type='number' i min='1' name='week_price'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Ціна за місяць день, грн</p>
                        <div className='input-div'><input type='number'  min='1' name='month_price'/></div>
                    </div>
                    <div className='admin-block-option' onChange={inputHandler}>
                        <p>Наявність</p>
                        <div className='input-div'> <input type='radio' id='available1' name='availability' value='1'/><label htmlFor='available1'>Так</label></div>
                        <div className='input-div'><input type='radio' id='available2' name='availability' value='0'/><label htmlFor='available2'>Ні</label></div>
                    </div>
                    <div className='admin-block-option photo'>
                        <p>Фото</p>
                        <div className='photo-cont'>
                            <div className='input-div'><input type='file' name='imgS' onChange={handleChange} multiple/></div>
                            
                        </div>
                        
                    </div>
                    <button className='button-admin' onClick={submitHandler}>Додати</button>
                </form>
            </div>
        </div>
    )
}

export default Admin