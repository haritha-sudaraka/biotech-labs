import React,{useState} from 'react'
import banner from '../../assets/header_banner.png'
import './header.css'
import axios from 'axios'

const Header = () => {
  const[ref_no,setRef_no] = useState('')

  const handleNavigate = () =>{
    
    if(ref_no!==''){
      axios.get("http://localhost:8080/getReportByRef/"+ref_no)
      .then((res)=>{
        if(res.data.length === 0){
          document.getElementById('helper_text').style.color = '#f70000'
          document.getElementById('helper_text').innerHTML = "Invalid Reference Number"
        }
        else{
          document.getElementById('helper_text').style.color = '#878788'
          document.getElementById('helper_text').innerHTML = "*Enter the reference number on the invoice to check your test report."
          console.log("link match")
          window.open(res.data[0].link,'_blank')
        }
      })
      .catch((err)=>console.log(err))
    }
    else{
      document.getElementById('helper_text').style.color = '#f70000'
      document.getElementById('helper_text').innerHTML = "Please provide the Report Reference Number"
    }
  }

  return (
    <div className='biotech__header section__padding'>
      <div className='biotech__header-content'>
        <div className='biotech__header-content_heading'>
          <h1>Check Your Medical Reports From Anywhere</h1>
          <p>Accurate diagnostics delivered efficiently, with a commitment to patient care and quality results.</p>
        </div>
        <div className='biotech__header-content_input_section'>
          <div className='biotech__header-content_input'>
            <input type='text' placeholder='Your Medical Test ID' onChange={(e)=>setRef_no(e.target.value)}/>
            <button onClick={()=>handleNavigate()} type='button'>Find</button>
          </div>
          <p id='helper_text'>*Enter the reference number on the invoice to check your test report.</p>
        </div>
      </div>

      <div className='biotech__header-banner'>
        <img src={banner} alt='Hero'/>
      </div>
    </div>
  )
}

export default Header