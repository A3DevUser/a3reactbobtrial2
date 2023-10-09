import React from 'react'
import { Spinner } from 'react-bootstrap'

const SpinnerLoader = () => {
  return (
    <div style={{marginLeft:'50vw',marginTop:'40vh'}}>
      <Spinner variant='dark' animation='border'/>
    </div>
  )
}

export default SpinnerLoader
