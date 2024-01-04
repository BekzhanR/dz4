import React,{useState} from "react";
import './login.css'

const Login = () =>{
    const [name,setName] = useState('')
    const [last,setLast] = useState('')
    const [city,setCity] = useState('')
    const [number,setNumber] = useState('')

    return (
        <div className="login">
            <div className="block">
                <span className="title">Login</span>
            </div>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={({target})=>setName(target.value)}
                    className="name"
                    placeholder="Введите имя"
                />
                <input
                    type="text"
                    value={last}
                    onChange={({target})=>setLast(target.value)}
                    className="last"
                    placeholder="Введите фамилию"
                />
                <input
                    type="text"
                    value={city}
                    onChange={({target})=>setCity(target.value)}
                    className="city"
                    placeholder="Введите страну"
                />
                <input
                    type="number"
                    value={number}
                    onChange={({target})=>setNumber(target.value)}
                    className="numbe"
                    placeholder="Введите номер"
                />
            </form>
            <div className="real">
                <span>Имя: {name}</span>
                <span>Фамилия: {last}</span>
                <span>Страна: {city}</span>
                <span>Номер: {number}</span>
            </div>
        </div>

    )
}
export default Login