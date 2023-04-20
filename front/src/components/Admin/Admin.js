import {useState,useEffect} from 'react'
import AdminCart from './AdminCart'
import axios from "axios";
import { Link } from 'react-router-dom';


function Admin(){
    const [fetchedData, setFetchedData] = useState([])

    async function getInfo () {
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
        console.log(fetchedData)
    
    },[])

    // async function removeCart(id,item){
    //     console.log(item)
    //     const reducedArray= fetchedData.filter(item=>{
    //         return item._id!=id
    //     })
    //     console.log(reducedArray)
    //     setFetchedData(reducedArray)

    //     const config = {
    //         headers:{
    //             "Content-Type": "application/json"
    //         }
    //     }
    //     const response = await axios.post(`http://localhost:5000/admin/delete/${id}`, item, config )
    // }


    return(
        <div className='content-container-admin'>
            <h1>ПАНЕЛЬ АДМІНІСТРАТОРА</h1>
            <div className='admin'>
                
                <p className='addItem'><Link to='/admin/add'><img src='/imagesHTML/icons/add.png'/>Додати товар </Link></p>
                
                <ol className='goods'>
                <select className='price-selection-admin' > 
                    <option value='down'>Всі товари</option>
                    <option value='up'> Фотокамери </option>
                    <option value='down'>Лінзи</option>
                </select>
                    {fetchedData ? fetchedData.map( item=>{
                        return  <Link to={`/admin/view/${item._id}`}>
                                    <li className='item-list'>
                                        <p>{item.typeGoods}</p>
                                        <p>{item.brand}</p>
                                        <p>{item.model}</p>
                                        <p>{item.type}</p>
                                    </li>
                                </Link>
                    })
                    : <p className='empty'>Товари для редагування відсутні</p>
                    
                    }

                {/* {fetchedData ? fetchedData.map( item=>{
                        return  <AdminCart key= {Math.random()} itemData={item} cartRemover={removeCart}></AdminCart>
                    }) : <p className='empty'>Товари для редагування відсутні</p>
                } */}

                </ol>
            </div>
            
        </div>
    )
}

export default Admin