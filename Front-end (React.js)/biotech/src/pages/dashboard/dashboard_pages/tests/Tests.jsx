import React,{useEffect,useState} from 'react'
import { GridComponent,ColumnsDirective,ColumnDirective,Resize, Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids'
import axios from 'axios'

const Tests = () => {
  const testGrid = [
    {
      field:"id",
      headerText:"ID",
      width:30,
      textAlign:'Left'
    },
    {
      field:'test_name',
      headerText:'Test Name',
      width:150,
      textAlign:'Left'
    },
    {
      field:'specimen',
      headerText:'Specimen',
      width:150,
      textAlign:'Left'
    },
    {
      field:'fee',
      headerText:'Fee',
      width:100,
      textAlign:'Left'
    }
  ]

  const[testData,setTestData] = useState()

  useEffect(()=>{
    axios.get("http://localhost:8080/getAllMedicalTests")
    .then((res)=>{setTestData(res.data)})
    .catch((err)=>console.log(err))
  })

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='biotech_dashboard-tests'>
        <h2 style={{marginBottom:'1rem'}}>All Medical Tests</h2>
      </div>
      <GridComponent
        id='gridcomp'
        dataSource={testData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {
            testGrid.map((item,index)=>(
              <ColumnDirective key={index} {...item}/>
            ))
          }
        </ColumnsDirective>
        <Inject services={[Resize, Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit]}/>
      </GridComponent>
    </div>
  )
}

export default Tests