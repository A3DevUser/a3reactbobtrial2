import React from 'react'

export const filterGreaterThan = (rows, id, filterValue) => {
    return rows.filter(row => {
        const rowValue = row.values[id]
        return rowValue >= filterValue
      })
}
