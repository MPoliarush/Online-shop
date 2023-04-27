import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux"
import {orderActions} from '../../../store/store'
import Footer from '../../Footer';

function Registration(){

    return (
        <>
            <main>
                <div className = 'content-container registration'>
                    <h1>РЕЄСТРАЦІЯ КОРИСТУВАЧА</h1>
                    <div className="form-wrapper">
                        <div className="field-wrap">
                            <p>Ім'я*</p>
                            <label htmlFor="name"></label>
                            <input type="text" id= 'name' />
                        </div>
                        <div className="field-wrap">
                            <p>Прізвище*</p>
                            <label htmlFor="surname"></label>
                            <input type="text" id= 'surname' />
                        </div>
                        <div className="field-wrap">
                            <p>По батькові*</p>
                            <label htmlFor="second"></label>
                            <input type="text" id= 'second' />
                        </div>
                        <div className="field-wrap">
                            <p>Телефон</p>
                            <label htmlFor="mobile"></label>
                            <input type="text" id= 'mobile' />
                        </div>
                        <div className="field-wrap">
                            <p>E-mail*</p>
                            <label htmlFor="email"></label>
                            <input type="text" id= 'email' />
                        </div>
                        <div className="field-wrap">
                            <p>Пароль*</p>
                            <label htmlFor="password"></label>
                            <input type="text" id= 'password' />
                        </div>
                       
                    </div>
                    <button className="auth-btn-reg">ЗАВЕРШИТИ РЕЄСТРАЦІЮ</button>
                </div>
            </main>
            <Footer></Footer>
        </>
       
    )
}

export default Registration