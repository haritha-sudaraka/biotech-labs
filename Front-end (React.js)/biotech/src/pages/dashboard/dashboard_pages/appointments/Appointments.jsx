import React,{useEffect,useState} from 'react'
import { GridComponent,ColumnsDirective,ColumnDirective,Resize, Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids'
import axios from 'axios'

const Appointments = () => {
  const appointmentGrid = [
    {
      field:"id",
      headerText:"Appointment ID",
      width:175,
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
      width:100,
      textAlign:'Left'
    },
    {
      field:'remarks',
      headerText:'Remarks',
      width:150,
      textAlign:'Left'
    },
    {
      field:'status',
      headerText:'Status',
      editType:'dropdownedit',
      width:100,
      textAlign:'Left'
    }
  ]

  const[appointmentData,setAppointmentData] = useState()

  useEffect(()=>{
    axios.get("http://localhost:8080/getAllAppointments")
    .then((res)=>{setAppointmentData(res.data)})
    .catch((err)=>console.log(err))
  })

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='biotech_dashboard-appointments'>
        <h2 style={{marginBottom:'1rem'}}>All Appointments</h2>
      </div>
      <GridComponent
        id='gridcomp'
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
        <Inject services={[Resize, Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Appointments