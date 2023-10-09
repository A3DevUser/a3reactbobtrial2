import React from 'react'

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <span>
      <input className='column-filter mx-2'
        value={filterValue || ''}
        placeholder='Search'
        onChange={e => setFilter(e.target.value)}
        style={{width:'15vw'}}
      />
    </span>
  )
}