import React,{useState} from 'react'
import './appointment_form.css'
import './appointment_confirm.css'
import appointment_conf from '../../assets/appointment-confirm-banner.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {MenuItem} from '@mui/material/';
import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import { DemoContainer,DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs';
import { useNavigate,useLocation } from "react-router-dom";
import axios from 'axios';

function pad(num) {
    while (num.length < 2) num = "0" + num;
    return num;
}

const AppointmentForm = ({page}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [bday,setBday] = useState()
    const [gender,setGender] = useState('')
    const [serviceType,setServiceType] = useState('')
    const [dateTime,setDateTime] = useState()
    const [remarks,setRemarks] = useState('')

    const navigate = useNavigate()
    const location = useLocation()

    var toObject = require('dayjs/plugin/toObject')
    dayjs.extend(toObject)

    const handleConfirm = (e) => {
        // e.PreventDefault()
        if(name!=='' && email!=='' && phone!=='' && bday!==undefined && gender!=='' && serviceType!=='' && dateTime!==undefined){
            console.log(dateTime.toObject())
            var jsonValues = {
                service_type:serviceType,
                date:(String(dateTime.toObject().years)+'-'+pad(String(dateTime.toObject().months+1))+'-'+pad(String(dateTime.toObject().date))),
                time:(pad(String(dateTime.toObject().hours))+':'+pad(String(dateTime.toObject().minutes))),
                remarks:remarks,
                status:"Pending",
                patient_id:{
                    name:name,
                    email:email,
                    phone:phone,
                    birthday:(bday.toObject().years+'-'+(bday.toObject().months+1)+'-'+bday.toObject().date),
                    gender:gender,
                }
            }
    
            axios.post("http://localhost:8080/newAppointment",jsonValues)
            .then((res) => {
                document.getElementById('errorText').innerHTML = ""
                setName('')
                setEmail('')
                setPhone('')
                setBday()
                setGender('')
                setServiceType('')
                setDateTime()
                setRemarks('')
                const responseData = res.data
                navigate('/appointment-confirm',{state:{responseData}})
            })
            .catch(err => console.log(err))

            
        }
        else{
            document.getElementById('errorText').innerHTML = "* Asterik marked fields are compulsory"
        }
        
    }

    const handleCancel = () => {
        navigate('/')
    }
    if(page==='confirm'){
        return (
            <div className="biotech__appointment_confirm">
                <h3>Appointment Details</h3>
                <div className="biotech__appointment_confirm-content">
                    <div className="biotech__appointment_confirm-content-details">
                        <h4>Patient Name</h4>
                        <h2>{location.state.responseData.patient_id.name}</h2>
                        <h4>Date & Time</h4>
                        <h2>{location.state.responseData.date} / {location.state.responseData.time}</h2>
                        <h4>Service Type</h4>
                        <h2>{location.state.responseData.service_type}</h2>
                    </div>
                    <div className="biotech__appointment_confirm-content-image">
                        <img src={appointment_conf} alt='appointment-confirm'/>
                    </div>
                </div>
                <div className='biotech__appointment_confirm-content-details'>
                    <h3>Your Appointment ID</h3>
                    <h1>{location.state.responseData.id}</h1>
                </div>
                
                <p>Please wear a mask when visiting us</p>
                <div className="biotech__appointment_confirm-buttonsect">
                    <button className='back' type='button' onClick={()=>{navigate('/')}}>Back to Home</button>
                    <button className='pdf' type='button' onClick={()=>{window.print()}}>Download as PDF</button>
                </div>
                
            </div>
        )
    }
    else{
        return (
            <div className='biotech__appointment_form'>
                <div className="biotech__appointment_form-heading"><h3>Your Information</h3></div>
                <div className="biotech__appointment_form-info_area">
                    <Box component="form" className='form-box' noValidate autoComplete="on">
                        <TextField type={"Email"} placeholder='example@gmail.com' required id="filled-basic" label="Email" variant="filled" className='biotech__appointment_form-textarea_half' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField required id="filled-basic" label="Name" variant="filled" className='biotech__appointment_form-textarea_half' value={name} onChange={(e)=>setName(e.target.value)}/>
                        <TextField required id="filled-basic" label="Phone Number" variant="filled" className='biotech__appointment_form-textarea_half' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        <TextField
                            id="gender"
                            required
                            select
                            label="Gender"
                            defaultValue="Male"
                            helperText="Please select your gender"
                            variant="filled"
                            className='biotech__appointment_form-textarea_half'
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}
                        >
                            <MenuItem value='Male'>Male</MenuItem>
                            <MenuItem value='Female'>Female</MenuItem>
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    required
                                    label="Birthday"
                                    inputFormat="MM/DD/YYYY"
                                    value={bday}
                                    onChange={setBday}
                                    variant="filled"
                                    className='biotech__appointment_form-textarea_half'
                                    disableFuture={true}
                                />
                                </DemoContainer>
                        </LocalizationProvider>
                        <TextField
                            required
                            id="service"
                            select
                            label="Service Type"
                            defaultValue="Blood Test"
                            helperText="What kind of service you wish to take?"
                            variant="filled"
                            className='biotech__appointment_form-textarea_half'
                            value={serviceType}
                            onChange={(e)=>setServiceType(e.target.value)}
                        >
                            <MenuItem value='Blood Test'>Blood Test</MenuItem>
                            <MenuItem value='Urine Test'>Urine Test</MenuItem>
                            <MenuItem value='Vital Checkup'>Vital Checkup</MenuItem>
                            <MenuItem value='Medical Consultation'>Medical Consultation</MenuItem>
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoItem>
                                <MobileDateTimePicker
                                    required
                                    label="Date and Time"
                                    value={dateTime}
                                    onChange={setDateTime}
                                    variant="filled"
                                    showTodayButton={true}
                                    disablePast={true}
                                    className='biotech__appointment_form-textarea_half'
                                />
                            </DemoItem>
                        </LocalizationProvider>
                        <TextField
                            id="filled-multiline-static"
                            label="Remarks"
                            required
                            multiline
                            rows={4}
                            variant="filled"
                            className='biotech__appointment_form-textarea_half'
                            value={remarks}
                            onChange={(e)=>setRemarks(e.target.value)}
                        />
                    </Box>
                </div>
                <div className="biotech__appointment_form-buttonsect">
                    <button className='biotech__appointment_form-buttonsect_cancel' onClick={handleCancel}>Cancel</button>
                    <button className='biotech__appointment_form-buttonsect_confirm' onClick={handleConfirm}>Book Appointment</button>
                </div>
                <p id='errorText'></p>
            </div>
        )
    }
}

export default AppointmentForm