import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import {clientActions} from '../../../store/store'


function Authorized(){
    const [activeInputs,setActiveInputs] = useState({
        personalData:true,
        ordersHistory:false,
    })

    const [predefinedData, setPredefinedData] = useState({
        name:'',
        surname:'',
        second:'',
        mobile:'',
        email:'',
        password:''
    })
    const [valid,setValid]=useState({
        name:'',
        surname:'',
        second:'',
        mobile:'',
        email:'',
        password:''
    })
    const [success,setSuccess] = useState(null)

    const stateLogin = useSelector(state=>state.client.clientData)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    // console.log(stateLogin)
   


    async function getClientData(){
        // console.log(clientState, '  logged')

        const config = {
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
        }
        
        try{
            const response = await axios.post('http://localhost:5000/getClient', stateLogin, config )
            // console.log(response.data)
            setPredefinedData(response.data)
        } catch(e){
            console.log(e)
        }
        
        
    }

    useEffect(()=>{
        getClientData()
    },[])


    function activeHandler(e){
        e.preventDefault()
        if(e.target.value=='Дані'){
            setActiveInputs({
                personalData:true,
                ordersHistory:false})
        } else {
            setActiveInputs({
                personalData:false,
                ordersHistory:true})
        }

    }


function clientInputHandler(e){
    
    if(e.target.name == 'name'){
        setPredefinedData({...predefinedData,
            name: e.target.value
        })
        setValid({...valid,
            name:null
        })
        
    }
    if(e.target.name == 'surname'){
        setPredefinedData({...predefinedData,
            surname: e.target.value
        })
        setValid({...valid,
            surname:null
        })
    }
    if(e.target.name == 'second'){
        setPredefinedData({...predefinedData,
            second: e.target.value
        })
        setValid({...valid,
            second:null
        })
    }

    if(e.target.name == 'mobile' ){
        setPredefinedData({...predefinedData,
            mobile: e.target.value
        })
        setValid({...valid,
            mobile:null
        })
       
    }
    if(e.target.name == 'email' ){
        setPredefinedData({...predefinedData,
            email: e.target.value
        })
        setValid({...valid,
            email:null
        })
    }
    if(e.target.name == 'password'){
        setPredefinedData({...predefinedData,
            password: e.target.value
        })
        setValid({...valid,
            password:null
        })
    }
    
}


async function updateData(){
  
    if(predefinedData.name.length==0){
        console.log('error')
        setValid({...valid,
            name:"Будь-ласка, введіть ім'я"
        })
        return
    }

    if(!predefinedData.surname.length){
        console.log('error')
        setValid({...valid,
            surname:"Будь-ласка, введіть прізвище"
        })
        return
    }
    if(!predefinedData.second.length){
        console.log('error')
        setValid({...valid,
            second:"Будь-ласка, введіть по батькові"
        })
        return
    }
    if(!predefinedData.mobile.length){
        console.log('error')
        setValid({...valid,
            mobile:"Будь-ласка, введіть номер"
        })
        return
    }
    if(!predefinedData.email.length  || !predefinedData.email.trim().includes('@')){
        console.log('error')
        setValid({...valid,
            email:"Будь-ласка, введіть валідний email"
        })
        return
    }
    if(!predefinedData.password.length|| predefinedData.password.length<8){
        console.log('error')
        setValid({...valid,
            password:"Будь-ласка, введіть мінімум 8 символів"
        })
        return
    }

    console.log('sent')
    setSuccess(true)

    const config = {
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*"
        }
    }

    const updading = await axios.post('http://localhost:5000/clientUpdate', predefinedData ,config)


}


function logOutHandler(){
    dispatch(clientActions.logOut())
    
    let path='/login'
    navigate(path)
}


return(
    <>
    <main>
        <div className = 'content-container personalPage'>
            <h1 className="registration"><span>ОСОБОВИЙ</span> КАБІНЕТ</h1>
            <p>Вітаємо, {predefinedData.name}!</p>
            <button onClick={logOutHandler} >Вийти з кабінету</button>
            <div className='options personal-nav'>
                <button onClick={activeHandler} className={activeInputs.personalData==true ? 'active' : 'passive'} value='Дані'>Мої дані</button>
                <button onClick={activeHandler} className={activeInputs.ordersHistory==true ? 'active' : 'passive'} value='Історія'>Історія замовлень</button>
            </div>
            <div className="personalInfo">
            <div>
                        <div className="form-wrapper">
                        <div className="field-wrap">
                            <div>
                                <p>Ім'я*</p>
                                <span>{valid.name}</span>
                            </div>
                            <input type="text" id= 'name' onChange={clientInputHandler} name='name' value={predefinedData.name}/>
                        </div>
                        <div className="field-wrap">
                            <div>
                                <p>Прізвище*</p>
                                <span>{valid.surname}</span>
                                <input type="text" id= 'surname' onChange={clientInputHandler} name='surname' value={predefinedData.surname}/>
                            </div>
                        </div>
                        <div className="field-wrap">
                            <div>
                                <p>По батькові*</p>
                                <span>{valid.second}</span>
                                <input type="text" id= 'second'onChange={clientInputHandler} name='second' value={predefinedData.second}/>
                            </div>
                        </div>
                        <div className="field-wrap">
                            <div>
                                <p>Телефон</p>
                                <span>{valid.mobile}</span>
                                <input type="text" id= 'mobile'onChange={clientInputHandler} name='mobile' value={predefinedData.mobile} />
                            </div>
                        </div>
                        <div className="field-wrap">
                            <div>
                                <p>E-mail*</p>
                                <span>{valid.email}</span>
                                <input type="text" id= 'email' onChange={clientInputHandler} name='email' value={predefinedData.email}/>
                            </div>
                        </div>
                        <div className="field-wrap">
                            <div>
                                <p>Пароль*</p>
                                <span>{valid.password}</span>
                                <input type="text" id= 'password' onChange={clientInputHandler} name='password' defaultValue={predefinedData.password}/>
                            </div>
                        </div>
                    </div>
                        <button className="auth-btn-reg" onClick={updateData}>ЗБЕРЕГТИ ДАНІ</button>
                    </div>
            </div>
        </div>
    </main>

    </>
)
}

export default Authorized