import React,{useState} from 'react'
import logo from '../../assets/logo_black.png'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();

  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')

  const handleShowPassword = () =>{
    var x = document.getElementById('password')
    if(x.type==='password'){
      x.type='text'
    }else{
      x.type='password'
    }
  }

  const handleLogin = () => {
    if(username!=="" && password!==""){
      const obj = {
        username:username,
        password:password
      }

      document.getElementById('display_help').innerHTML = ""

      axios.post("http://localhost:8080/loginapi/login",obj)
      .then((res) => {
          if(res.data.status){
            navigate("/dashboard");
          }
          else{
            document.getElementById('display_help').style.color = '#f70000'
            document.getElementById('display_help').innerHTML = `${res.data.message}`
          }
      })
      .catch(err => console.log(err))
    }
    else{
      document.getElementById('display_help').style.color = '#f70000'
      document.getElementById('display_help').innerHTML = "Please enter the Username and Password"
    }
  }

  return (
    <div className='biotech__login section__padding'>
      <div className='biotech__login-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='biotech__login-form'>
        <h3>Login</h3>
        <input type='text' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
        <input id='password' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <div className="biotech__login-form_showpw">
          <input type='checkbox' onClick={handleShowPassword}/>
          <p>Show Password</p>
        </div>
        <button type='button' onClick={handleLogin}>Login</button>
        <p id='display_help'></p>
      </div>
    </div>
  )
}

export default Login