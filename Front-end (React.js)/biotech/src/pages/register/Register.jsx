import React,{useState} from 'react'
import logo from '../../assets/logo_black.png'
import './register.css'
import axios from 'axios'

const Register = () => {

  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const[confPassword,setConfPassword] = useState('')

  const handleShowPassword = () =>{
    var x = document.getElementById('password')
    var y = document.getElementById('passwordConf')
    if(x.type==='password' && y.type==='password'){
      x.type='text'
      y.type='text'
    }else{
      x.type='password'
      y.type='password'
    }
  }

  const handleRegister = () => {
    if(username!=="" && password!=="" && confPassword!==""){
      if(password === confPassword){
        const obj = {
          username:username,
          password:password
        }

        axios.post("http://localhost:8080/loginapi/newUser",obj)
        .then((res) => {
            if(res.data===username){
              document.getElementById('display_help').style.color = '#03b800'
              document.getElementById('display_help').innerHTML = "Registration Success"
              document.getElementById('password').value=""
              document.getElementById('passwordConf').value=""
              document.getElementById('text').value=""
              setUsername("")
              setPassword("")
              setConfPassword("")
            }
            else{
              document.getElementById('display_help').style.color = '#f70000'
              document.getElementById('display_help').innerHTML = `${res.data}`
            }
        })
        .catch(err => console.log(err))
      }
      else{
        document.getElementById('display_help').style.color = '#f70000'
        document.getElementById('display_help').innerHTML = "Passwords does not match!"
      }
      
    }
    else{
      document.getElementById('display_help').style.color = '#f70000'
      document.getElementById('display_help').innerHTML = "Please enter a Username and Password and Confirm"
    }
  }

  return (
    <div className='biotech__register section__padding'>
      <div className='biotech__register-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='biotech__register-form'>
        <h3>Register</h3>
        <input type='text' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
        <input id='password' type='password' placeholder='Create Password' onChange={(e)=>setPassword(e.target.value)}/>
        <input id='passwordConf' type='password' placeholder='Confirm Password' onChange={(e)=>setConfPassword(e.target.value)}/>
        <div className="biotech__register-form_showpw">
          <input type='checkbox' onClick={handleShowPassword}/>
          <p>Show Password</p>
        </div>
        <a href='/dashboard-login'>Login</a>
        <button type='button' onClick={handleRegister}>Register</button>
        <p id='display_help'></p>
      </div>
    </div>
  )
}

export default Register