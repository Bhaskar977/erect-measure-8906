import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../Redux/authReducer/action';
import {useLocation, useNavigate} from "react-router-dom";
import "./Login.css"
import styled from '@emotion/styled';

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();

  const {auth}= useSelector((store)=>store.authReducer);
  // console.log(location)


  const handleSubmit = (e) =>{
    e.preventDefault();
    const userData = {
      email,password
    }
    dispatch(login(userData))
    setEmail("")
    setPassword("")

  }
  
  return (
    <DIV>
    <div className='login'>
      <h2>User LogIn</h2>
      <h3>{auth?"Login Successful":"Login To continue"}</h3>
      <form onSubmit={handleSubmit}>
        <input className='email' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <input className='pass' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <button className='submit' type='submit'>Log In</button>
      </form>
    </div>
    </DIV>
  );
}

const DIV = styled.div`
@media (min-width: 0px) and (max-width: 600px) {
  .submit{
    width:25%
  }
  .email,.pass{
    width:60%
  }
}
`

export default Login;
