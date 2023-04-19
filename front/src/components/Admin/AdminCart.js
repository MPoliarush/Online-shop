import { useState,useEffect } from "react"


function AdminCart(props){
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
    })
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
                width:event.target.value
            })
        }
    
        if (event.target.name==='height'){
            setInput({...input,
                height:event.target.value
            })
        }
    
        if (event.target.name==='depth'){
            setInput({...input,
                depth:event.target.value
            })
        }
    
        if (event.target.name==='weight'){
            setInput({...input,
                weight:event.target.value
            })
        }
    
        if (event.target.name==='work_price'){
            setInput({...input,
                work_price:event.target.value
            })
        }
    
        if (event.target.name==='weekend_price'){
            setInput({...input,
                weekend_price:event.target.value
            })
        }
    
        if (event.target.name==='week_price'){
            setInput({...input,
                week_price:event.target.value
            })
        }
    
        if (event.target.name==='month_price'){
            setInput({...input,
                month_price:event.target.value
            })
        }
    
        if (event.target.name==='min_focus_length'){
            setInput({...input,
                min_focus_length:event.target.value
            })
        }
    
        if (event.target.name==='diametr'){
            setInput({...input,
                diametr:event.target.value
            })
        }
    
        if (event.target.name==='linseType'){
            setInput({...input,
                linseType:event.target.value
            })
        }
    
        if (event.target.name==='linceLength'){
            setInput({...input,
                linceLength:event.target.value
            })
        }
    
    
        if (event.target.name==='availability'){
            setInput({...input,
                availability:event.target.value.toString()
            })
        } 
       
    }

// console.log(props.itemData.img1)

    return (
        <form  onSubmit={(e)=>e.preventDefault()}>
                    <div onChange={inputHandler}>
                        <p>Вид товару</p>
                        <div className='input-div'><input type='radio' id='3К' name='typeGoods' value='Фотокамера' /><label htmlFor='3К'>Фотокамера</label></div>
                        <div className='input-div'><input type='radio' id='4К' name='typeGoods' value='Лінза'/><label htmlFor='4К'>Лінза</label></div>
                    </div>
                    <div  onChange={inputHandler}>
                        <p>Марка</p>
                        <div className='input-div'><input type='text' size='20' name='brand' defaultValue={props.itemData.brand}/></div>
                    </div>
                    <div  onChange={inputHandler}>
                        <p>Модель</p>
                        <div className='input-div'><input type='text'  name='model' defaultValue={props.itemData.model}/></div>
                    </div>
                    <div  onChange={inputHandler}>
                        <p>Глибина зображення</p>
                        <div className='input-div'><input type='text'  name='imgdepth' defaultValue={props.itemData.imgdepth}/></div>
                    </div>
                    <div onChange={inputHandler}>
                        <p>Тип зображення</p>
                        <div className='input-div'><input type='radio' id='type1' name='type' defaultValue='Дзеркальна'/><label htmlFor='type1'>Дзеркальна</label></div>
                        <div className='input-div'><input type='radio' id='type2' name='type' defaultValue='Компактна'/><label htmlFor='type2'>Компактна</label></div>
                    </div>
                    <div onChange={inputHandler}>
                        <p>Матриця</p>
                        <div className='input-div'><input type='text'  name='matrix' defaultValue={props.itemData.matrix}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Роздільна здатність, Mpx</p>
                        <div className='input-div'><input type='text'  name='mpx' defaultValue={props.itemData.mpx}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Якість відео</p>
                        <div className='input-div'><input type='text'  name='video' defaultValue={props.itemData.video}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Експокорекція</p>
                        <div className='input-div'><input type='text'  name='exposition' defaultValue={props.itemData.exposition}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Ширина, мм</p>
                        <div className='input-div'><input type='number'  min='1' name='width' defaultValue={props.itemData.width}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Висота, мм</p>
                        <div className='input-div'><input type='number' min='1' name='height' defaultValue={props.itemData.height}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Глибина, мм</p>
                        <div className='input-div'><input type='number' min='1' name='depth' defaultValue={props.itemData.depth}/></div>
                    </div>
                    <div className={''}onChange={inputHandler}>
                        <p>Вага, г</p>
                        <div className='input-div'> <input type='number'  min='1' name='weight' defaultValue={props.itemData.weight}/></div>
                    </div>
                    <div onChange={inputHandler}>
                        <p>Ціна будній день, грн</p>
                        <div className='input-div'><input type='number'  min='1' name='work_price' defaultValue={props.itemData.work_price}/></div>
                    </div>
                    <div  onChange={inputHandler}>
                        <p>Ціна вихідний день, грн</p>
                        <div className='input-div'><input type='number'  min='1' name='weekend_price' defaultValue={props.itemData.weekend_price}/></div>
                    </div>
                    <div onChange={inputHandler}>
                        <p>Ціна за тиждень день, грн</p>
                        <div className='input-div'><input type='number' i min='1' name='week_price' defaultValue={props.itemData.week_price}/></div>
                    </div>
                    <div  onChange={inputHandler}>
                        <p>Ціна за місяць день, грн</p>
                        <div className='input-div'><input type='number'  min='1' name='month_price' defaultValue={props.itemData.month_price}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Найменша фокусна відстань, мм</p>
                        <div className='input-div'><input type='number'  min='1' name='min_focus_length' defaultValue={props.itemData.min_focus_length}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Діаметр, мм</p>
                        <div className='input-div'><input type='number'  min='1' name='diametr' defaultValue={props.itemData.diametr}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Довжина,мм</p>
                        <div className='input-div'><input type='number'  min='1' name='linceLength' defaultValue={props.itemData.linceLength}/></div>
                    </div>
                    <div className={''} onChange={inputHandler}>
                        <p>Тип об'єктива</p>
                        <div className='input-div'><input type='text'  min='1' name='linseType' defaultValue={props.itemData.linseType}/></div>
                    </div>

                    <div onChange={inputHandler}>
                        <p>Наявність</p>
                        <div className='input-div'> <input type='radio' id='available1' name='availability' value='true'/><label htmlFor='available1'>Так</label></div>
                        <div className='input-div'><input type='radio' id='available2' name='availability' value='false'/><label htmlFor='available2'>Ні</label></div>
                    </div>
                    <div >
                        <p>Фото</p>
                        <div className=''>
                            {props.itemData.img1.map(img=>{
                                return (
                                    <img className="adminGoodsIMG" src={`http://localhost:5000/uploadedIMG/${img.filename}`} />
                                )
                            })}
                         
                        </div>
                    </div>
                    <button >Редагувати</button>
        </form>
    )
}

export default AdminCart