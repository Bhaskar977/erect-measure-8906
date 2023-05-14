import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../Redux/authReducer/action';
import "./Login.css"

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {auth}= useSelector((store)=>store.authReducer);
  // console.log(state)

  const dispatch = useDispatch();

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
    <div className='login'>
      <h2>User LogIn</h2>
      <h3>{auth?"Login Successful":"Login To continue"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <button className='submit' type='submit'>Log In</button>
      </form>
    </div>
  );
}

export default Login;
