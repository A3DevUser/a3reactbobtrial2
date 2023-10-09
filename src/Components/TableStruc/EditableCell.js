import axios from "axios"
import React, { useEffect, useState } from "react"
export const EditableCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <div>
      <textarea value={value} className='form-control' style={{width:colObj.width
      // , background : value ? '#28a745' : 'white', color : 'white',
      }} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
      {/* xyz */}
    </div>
  }

  export const EditableDdCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown ,
    colObj:colObj,
    parentId

  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt = dropDown.filter((fil,i)=>{return i==index})[0].dropDown.split(',')

  
    return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i}>{res}</option>
        })

      }
           </select>
  }

  export const EditableNumCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

  
    return <div>
      <input value={value} type={'number'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
      {/* xyz */}
    </div>
  }

  export const EditableDateCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <div>
      <input value={value} type={'date'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
      {/* xyz */}
    </div>
  }

  export const EditableMixCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown,
    rowObj : obj,
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt
if(dropDown.filter((fil,i)=>{return i==index})[0].mixVal){
  opt= dropDown.filter((fil,i)=>{return i==index})[0].mixVal.split(',')
}
  
    if(obj.original.inputType==='text'){
      return <div>
      <textarea value={value} className='form-control' style={{width:colObj.width
      }} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
    </div>
    }else if(obj.original.inputType==='number'){
      return <div>
      <input value={value} type={'number'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
    </div>
    }else if(obj.original.inputType==='date'){
      return <div>
      <input value={value} type={'date'} className='form-control' style={{width:colObj.width}} onChange={onChange} onBlur={onBlur} placeholder='Enter Remark...' />
    </div>
    }else if(obj.original.inputType==='dropDown'){
      return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i}>{res}</option>
        })

      }
           </select>
    }
  }

  export const EditableAttachCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData, 
    colObj:colObj,
    parentId
  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      let date =  Date.now()
      const modifiedFile = new File([e.target.files[0]],e.target.files[0].name.replace('.',date+'.'))
      
      setValue(modifiedFile.name )
      // const formData = new FormData()
      // formData.append('file',modifiedFile)
      updateMyData(index, id,modifiedFile.name,modifiedFile,parentId.column.parent.id.id)
    }

    const handleDownload = (downTxt) =>{
      alert(downTxt)
    }

  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    const handleRemove = ()=>{
      setValue(null)
    }



    return <div>
      { value==='' || value===null || value === undefined ?
        <input type={'file'}  className='form-control' style={{width:colObj.width}} onChange={onChange}  placeholder='Enter Remark...' /> :
        <div ><span onClick={(e)=>{handleDownload(value)}} className='fileName'>{value}</span><br/><button className="btn btn-danger btn-sm"  onClick={handleRemove}>Remove</button></div>
      }
    </div>
  }


  export const EditableLogicCell = ({
    value: initialValue,
    row:  index ,
    column:  id ,
    updateMyData,
    dropDown ,
    colObj:colObj,
    parentId

  }) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
      setValue(e.target.value)
    }
  
    const onBlur = () => {
      updateMyData(index, id, value,null,parentId.column.parent.id.id,true)
    }
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    let opt = dropDown.filter((fil,i)=>{return i==index})[0].logicDd.split(',').map((res)=>{ return res.split('-')}).map((res)=>{ return {title :res[0], value : res[1]}})
  
    return <select value={value} onChange={onChange} onBlur={onBlur} className='form-control' style={{width:colObj.width,height:'7vh'}}>
      <option>Select One</option>
      {
        opt.map((res,i)=>{
            return <option key={i} value={res.value}>{res.title}</option>
        })

      }
           </select>
  }

  export const EditableMksCell = ({
    value: initialValue,
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }

  export const EditableAnaCell = ({
    value: initialValue,
    rowObj : obj,
  }) => {
    const [value, setValue] = React.useState(initialValue)

    useEffect(()=>{
      setValue()
    },[])
  
  
    React.useEffect(() => {
      if(initialValue==0){
        setValue(0)
      }else{
        setValue(obj.original[
          Object.keys(obj.original).filter((fil)=>{return fil.includes('$#')}).filter((fil)=>{return fil.includes('max')})[0]])
      }
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }


  export const EditableStaticCell = ({
    value: initialValue,
  }) => {
    const [value, setValue] = React.useState(initialValue)
  
  
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <h3 align='center'>{value}</h3>
  }