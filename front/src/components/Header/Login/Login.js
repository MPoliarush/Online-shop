import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import {orderActions} from '../../../store/store'
import Footer from '../../Footer';

function Login(){

    return (
        <>
            <main>
                <div className = 'content-container orders'>
                <h1></h1>
                    <div className="wrapp">
                        <form className="credentials-form">
                            <div className="credentials">
                                <label htmlFor="login">E-mail</label>
                                <input type='text' id='login'/>
                            </div>
                            <div className="credentials">
                                <label htmlFor="password">Пароль</label>
                                <input type='text' id='password'/>
                            </div>
                            <Link to=''><div className="auth-btn">УВІЙТИ</div></Link>
                        </form>
                        <div className="registr">
                            <p>Вперше на сайті?</p>
                            <Link to='/login/registration'><div className="auth-btn">РЕЄСТРАЦІЯ</div></Link>
                        </div>
                        
                    </div>
                   
                </div>
            </main>
        </>
       
    )
}

export default Login