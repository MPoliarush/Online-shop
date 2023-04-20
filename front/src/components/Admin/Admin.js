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

    async function removeCart(id,item){
        console.log(item)
        const reducedArray= fetchedData.filter(item=>{
            return item._id!=id
        })
        console.log(reducedArray)
        setFetchedData(reducedArray)

        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        const response = await axios.post(`http://localhost:5000/admin/delete/${id}`, item, config )
    }


    return(
        <div className='content-container-admin'>
            <h1>ПАНЕЛЬ АДМІНІСТРАТОРА</h1>
            <div className='admin'>
                <ul className='admin-navigation'>
                    <li><Link to='/admin/add'>Додати товар</Link></li>
                </ul>
                <ul className='goods'>
                {fetchedData.map( item=>{
                   
                    return  <AdminCart key= {Math.random()} itemData={item} cartRemover={removeCart}></AdminCart>
                    })
                }
                </ul>
            </div>
            
        </div>
    )
}

export default Admin