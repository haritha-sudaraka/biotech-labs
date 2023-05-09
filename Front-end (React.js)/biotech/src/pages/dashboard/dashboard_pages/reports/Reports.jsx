import React,{useEffect,useState} from 'react'
import { GridComponent,ColumnsDirective,ColumnDirective,Resize, Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids'
import axios from 'axios'


const Reports = () => {
  

  const reportsGrid = [
    {
      field:'ref_no',
      headerText:'Reference Number',
      width:70,
      textAlign:'Left'
    },
    {
      field:'link',
      headerText:'Document Link',
      width:500,
      textAlign:'Left'
    }
  ]

  const[reportData,setReportData] = useState()

  useEffect(()=>{
    axios.get("http://localhost:8080/getAllReports")
    .then((res)=>{setReportData(res.data)})
    .catch((err)=>console.log(err))
  })
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='biotech_dashboard-reports'>
        <h2 style={{marginBottom:'1rem'}}>All Reports</h2>
      </div>
      <GridComponent
        id='gridcomp'
        dataSource={reportData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {
            reportsGrid.map((item,index)=>(
              <ColumnDirective key={index} {...item}/>
            ))
          }
        </ColumnsDirective>
        <Inject services={[Resize, Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Reports