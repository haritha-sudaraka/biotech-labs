import React,{useState} from 'react';
import DropboxChooser from 'react-dropbox-chooser';
import './add-report.css'
import axios from 'axios';

const AddReport = () => {
    const APP_KEY="ni4cwnn1fo3q5k1";
    const [url,setUrl] = useState("");
    const [refNumber,setRefNumber] = useState("");

    function handleSuccess(files){
        setUrl(files[0].link)
        console.log(files[0])
    }

    const handleSubmission = () =>{
        document.getElementById("err_msg").innerHTML = " "
        if(refNumber!=="" && url!=="" ){
            
            const obj = {
                ref_no:refNumber,
                link:url
            }

            axios.get("http://localhost:8080/getReportByRef/"+refNumber)
            .then((res)=>{
                if(res.data.length !== 0){
                    document.getElementById('err_msg').style.color = '#f70000'
                    document.getElementById('err_msg').innerHTML = "Report Reference Already Exists"
                }
                else{
                    axios.post("http://localhost:8080/newReport",obj)
                    .then((res) => {
                        const responseData = res.data
                        document.getElementById("err_msg").style.color = "#03b800"
                        document.getElementById("err_msg").innerHTML = "Report "+ responseData.ref_no +" is Successfully Added"
                    })
                    .catch(err => console.log(err))
                }
            })
        }
        else{
            document.getElementById("err_msg").style.color = "#f70000"
            document.getElementById("err_msg").innerHTML = "Please enter the Report Reference Number"
        }
        
    }

    

    return (
        <div className='biotech__add_report section__padding'>
            <h1>Add Report</h1>
            <div className='biotech__add_report-fields'>
                <input style={{margin:'2rem 0.5rem',background:'transparent',padding:'0.5rem 2rem',fontSize:'18px',width:'500px',border:'1px solid #C8C8C8',borderRadius:'5px'}} type='text' placeholder='Reference Number' onChange={(e)=>setRefNumber(e.target.value)}/>
                <DropboxChooser appKey={APP_KEY}
                            success={handleSuccess}
                            cancel={() => console.log('closed')}
                            multiselect={true}
                            >
                    <button type='button' style={{margin:'2rem 0',padding:'0.5rem 2rem',fontSize:'18px'}}>Upload or Choose Files</button>
                </DropboxChooser>
            </div>
            <button style={{padding:'0.5rem 2rem',fontSize:'18px'}} type='button' onClick={handleSubmission}>Submit</button>
            <p id='err_msg'> </p>
        </div>
    )
}

export default AddReport