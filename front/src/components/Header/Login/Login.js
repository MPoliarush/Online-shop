import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import {useNavigate } from 'react-router-dom'
import {clientActions} from '../../../store/store'
import Footer from '../../Footer';
import axios from "axios";



function Login(){

    const [clientCreds,setClientCreds] = useState({
        login:'',
        password:''
    })
    const [valid,setValid]=useState(
        {
            login:'',
            password:''
        }
    )
    const dispatch = useDispatch()
    let navigate = useNavigate();

    function credsHandler(e){
        if(e.target.name=='login'){
            setClientCreds({...clientCreds,
                login:e.target.value
            })
            setValid({...valid,
                login:''
            })
        }
        if(e.target.name=='password'){
            setClientCreds({...clientCreds,
                password:e.target.value
            })
            setValid({...valid,
                password:''
            })
        }
    }

    console.log(clientCreds)


    function loginHandler(){
        console.log(valid)
        if (!clientCreds.login.trim().includes('@')){
            console.log()
            setValid({...valid,
                login:"Логін має містити символ @"
            })
            console.log('errrr 1')
            return
        }
        if (clientCreds.password.length<8){
            console.log('errrr 2')
            setValid({...valid,
                password:"Пароль має містити мініму 8 символів"
            })
            return
        }

        let path = `/login/authorized`; 
        navigate(path);

        dispatch(clientActions.loginIn(clientCreds))
    }



return (
        <>
            <main>
                <div className = 'content-container login'>
                <h2>Для більш зручного користуванням сайтом необхідно авторизуватись</h2>
                    <div className="wrapp">
                        <form className="credentials-form">
                            <span className="err">{!valid.login ? '': valid.login}</span>
                            <div className="credentials">
                                <label htmlFor="login">E-mail</label>
                                <input type='text' id='login' onChange={credsHandler} name='login'/>
                            </div>
                            <span className="err">{!valid.password ? '': valid.password}</span>
                            <div className="credentials">
                                <label htmlFor="password">Пароль</label>
                                <input type='password' id='password' onChange={credsHandler} name='password'/>
                            </div>
                            <div className="auth-btn" onClick={loginHandler}>УВІЙТИ</div>
                        </form>
                        <div className="registr">
                            <p>Вперше на сайті?</p>
                            <Link to='/login/registration'><div className="auth-btn">РЕЄСТРАЦІЯ</div></Link>
                        </div>
                        
                    </div>
                   
                </div>
            </main>
            <Footer></Footer>
        </>
       
    )
}

export default Login