import { EditableAnaCell, EditableAttachCell, EditableCell, EditableDateCell, EditableDdCell, EditableLogicCell, EditableMixCell, EditableMksCell, EditableNumCell, EditableStaticCell } from "./EditableCell"

export const ColumnHeader = (col,parentHeader,updateMyData,dropDown,newArr) =>{
    return [...parentHeader.map((res,i)=>{
        if(i===0){
          return {
            Header : res.title,
            columns : [...col.filter((fil)=>{return fil.parentCell===res.storeVal})].map((ares)=>{
              return {
                Header : ares.fieldName,
                accessor : ares.accessor,
                sticky :'left'

              }
            }),
            sticky :'left'
          }
        }else if(i===1){
           return newArr.map((accres)=>{
            return {
              Header : res.title+' :'+accres.id,
              id : accres,
              columns : [...col.filter((fil)=>{return fil.parentCell===res.storeVal})].map((ares)=>{
                if(ares.cellType==='textArea'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} />},
                    width : ares.width,
                  }
                }else if(ares.cellType==='dropDown'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableDdCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDown}  rowObj={cell.row} colObj={cell.column} parentId={cell} />},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='date'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableDateCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} />},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='number'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableNumCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDown} colObj={cell.column} parentId={cell} />},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='mix'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableMixCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} rowObj={cell.row} colObj={cell.column} dropDown={dropDown} parentId={cell}/>},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='attach'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableAttachCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} colObj={cell.column} parentId={cell} />},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='logic'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableLogicCell column={cell.column.id} row={cell.row.id} updateMyData={updateMyData} value={cell.value} dropDown={dropDown}  rowObj={cell.row} colObj={cell.column} parentId={cell} />},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='calc'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableMksCell value={cell.value}/>},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='ana'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableAnaCell value={cell.value}  rowObj={cell.row} />},
                    width : ares.width
    
                  }
                }else if(ares.cellType==='static'){
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor+'$#'+accres.id,
                    Cell: ({cell})=>{return <EditableStaticCell value={cell.value}/>},
                    width : ares.width
    
                  }
                }else{
                  return {
                    Header : ares.fieldName,
                    accessor : ares.accessor,
                    width : ares.width
    
                  }
                }
              })
            }
          })


        }
        
      })].flat()

}