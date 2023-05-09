import React,{useState} from 'react'
import './add-test.css'
import axios from 'axios';


const AddTest = () => {
  const[testName,setTestName] = useState("");
  const[specimen,setSpecimen] = useState("");
  const[fee,setFee] = useState(0);

  const handleSubmission=()=>{
    if(testName!=="" && specimen!=="" && fee!==0){
      const obj = {
        test_name:testName,
        specimen:specimen,
        fee:fee
      }

      axios.post("http://localhost:8080/newMedicalTest",obj)
            .then((res) => {
                const responseData = res.data
                document.getElementById("message").style.color = "#03b800"
                document.getElementById("message").innerHTML = "Test "+ responseData.test_name +" is Successfully Added"
                
            })
            .catch(err => console.log(err))

            setTestName("")
            setSpecimen("")
            setFee(0)
    }
    else{
      document.getElementById("message").style.color = "#f70000"
      document.getElementById("message").innerHTML = "Please fill all the entries"
    }
  }
  return (
    <div className='biotech__addtest section__padding'>
      <h1>Add New Test</h1>
      <input style={{margin:'0.5rem 0rem',background:'transparent',padding:'0.5rem 2rem',fontSize:'18px',width:'500px',border:'1px solid #C8C8C8',borderRadius:'5px'}} type='text' placeholder='Test Name' onChange={(e)=>setTestName(e.target.value)}/>
      <input style={{margin:'0.5rem 0rem',background:'transparent',padding:'0.5rem 2rem',fontSize:'18px',width:'500px',border:'1px solid #C8C8C8',borderRadius:'5px'}} type='text' placeholder='Specimen' onChange={(e)=>setSpecimen(e.target.value)}/>
      <input style={{margin:'0.5rem 0rem',background:'transparent',padding:'0.5rem 2rem',fontSize:'18px',width:'500px',border:'1px solid #C8C8C8',borderRadius:'5px'}} type='number' placeholder='Fee' onChange={(e)=>setFee(e.target.value)}/>
      <button style={{margin:'0.5rem 0rem',padding:'0.5rem 2rem',fontSize:'18px'}} type='button' onClick={handleSubmission}>Submit</button>
      <p id='message'></p>
    </div>
  )
}

export default AddTest