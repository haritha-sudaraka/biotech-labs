import React,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo_black.png'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Menu = () =>(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About Us</a></p>
    <p><a href='#services'>Our Services</a></p>
    <p><a href='#testimonials'>Testimonials</a></p>
    <p><a href='#blog'>Blog</a></p>
  </>
)

const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='biotech__navbar'>
      <div className='biotech__navbar-links'>
        <div className='biotech__navbar-links_logo'>
          <img src={logo} alt='Logo'/>
        </div>
      </div>

      <div className='biotech__navbar-appointment'>
        <div className='biotech__navbar-links_container'>
          <Menu/>
        </div>
        <button type='button' onClick={()=>{
          navigate('/appointment')
        }}><span></span></button>
        <div className='biotech__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#000' size={27} onClick={()=>setToggleMenu(false)}/>
            : <RiMenu3Line color='#000' size={27} onClick={()=>setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='biotech__navbar-menu_container scale-up-center'>
              <div className='biotech__navbar-menu_container-links'>
                <Menu/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar