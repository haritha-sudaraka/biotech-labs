import React,{useEffect,useState} from 'react'
import { GridComponent,ColumnsDirective,ColumnDirective,Resize, Sort,ContextMenu,Filter,Page,Inject} from '@syncfusion/ej2-react-grids'
import axios from 'axios';
import './manage-appointments.css'

const ManageAppointments = () => {
  const[appointmentData,setAppointmentData] = useState([])
  const[aid_del,setAid_del] = useState("")
  const[aid_updt,setAid_updt] = useState("")

  const appointmentGrid = [
    {
      field:"id",
      headerText:"Appointment ID",
      width:220,
      textAlign:'Left'
    },
    {
      field:'patient_id.name',
      headerText:'Patient Name',
      width:150,
      textAlign:'Left'
    },
    {
      field:'service_type',
      headerText:'Service Type',
      width:150,
      textAlign:'Left'
    },
    {
      field:'date',
      headerText:'Date',
      width:100,
      textAlign:'Left'
    },
    {
      field:'time',
      headerText:'Time',
      width:70,
      textAlign:'Left'
    },
    {
      field:'status',
      headerText:'Status',
      editType:'dropdownedit',
      width:70,
      textAlign:'Left'
    }
  ]

  useEffect(()=>{
    axios.get("http://localhost:8080/getAllAppointments")
    .then((res)=>{setAppointmentData(res.data)})
    .catch((err)=>console.log(err))
  })

  const handleUpdate = () => {
    if(aid_updt!==""){
      const obj = {
        id:aid_updt,
        status:'Visited'
      }

      axios.put("http://localhost:8080/updateAppointment",obj)
      .then((res)=>{
        window.alert("Status Changed to Visited")
        document.getElementById('text').value = ""
        setAid_updt("")
      })
      .catch((err)=>{
        window.alert("Error",err)
        document.getElementById('text').value = ""
      }
      )
    }
    else{
      window.alert("Please enter the Appointment ID")
    }
  }
  
  const handleDelete = () => {
    if(window.confirm("Are you sure you want to delete this appointment?")){
      if(aid_del!==""){
        axios.delete(`http://localhost:8080/deleteAppointment/${aid_del}`)
        .then((res)=>{
          window.alert(res.data)
          document.getElementById('text').value = ""
          setAid_del("")
        })
        .catch((err)=>{
          window.alert("Error")
          document.getElementById('text').value = ""
      })
      }
      else{
        window.alert("Please enter the Appointment ID")
      }
    }
  }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <h2 style={{marginBottom:'1rem'}}>Manage Appointments</h2>
      <div className='biotech_dashboard-manage_appointments'>
        <div className='update_sect'>
          <input id='text' type='text' placeholder='Enter Appointment ID' onChange={(e)=>setAid_updt(e.target.value)}/>
          <button type='button' onClick={handleUpdate}>Mark as Visited</button>
        </div>

        <div className='delete_sect'>
          <input id='text' type='text' placeholder='Enter Appointment ID' onChange={(e)=>setAid_del(e.target.value)}/>
          <button type='button' onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <GridComponent
        id='gridcomp_search'
        dataSource={appointmentData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {
            appointmentGrid.map((item,index)=>(
              <ColumnDirective key={index} {...item}/>
            ))
          }
        </ColumnsDirective>
        <Inject services={[Resize, Sort,ContextMenu,Filter,Page]}/>
      </GridComponent>
    </div>
  )
}

export default ManageAppointments