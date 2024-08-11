import React, { useEffect, useState } from 'react';
import axios from '../axios/auth';
import '../styles/Auth.css'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
export const createUser = async (user) => {
    const { data } = await axios.post("users/", user);
    const loginData = await axios.post("auth/login", { email: data.email, password: data.password });
    return {...data, token: loginData.token};
};
const Auth = () => {
    let [userData, setUserData] = useState({
        name: "",
        email: "",
        avatar: "",
        password: "",
    });

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    const setUser = (user) => {
        if(user) {
            localStorage.setItem("user", JSON.stringify(user))
        }
    }
    const sendForm = (e) => {
        e.preventDefault();
        console.log(userData);
        createUser(userData);
        setUser(userData)
    };
    const getFromLS = () => {
        const user = localStorage.getItem("user");
        if (user) {
            userData = JSON.parse(user)
        }
    }
    let userAvatar = userData.avatar
    useEffect(()=>{
        getFromLS()
    
    }, [])
    return (
        <div className='auth'>
            <Avatar className='user-avatar' size={64} src={userAvatar ? userAvatar : <UserOutlined />} />          
            <form onSubmit={sendForm} >
                <input onChange={changeInput} type="text" placeholder='Name' name='name' />
                <input onChange={changeInput} type="email" placeholder='Email' name='email' />
                <input onChange={changeInput} type="password" placeholder='Password' name='password' />
                <input onChange={changeInput} type="text" placeholder='Avatar' name='avatar' />
                <button className='create' value={"Create an account"}>Create an account</button>
            </form>
        </div>
    );
};

export default Auth;