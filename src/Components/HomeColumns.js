import {Link} from 'react-router-dom'
import { ColumnFilter } from './ColumnFilter'
import { SelectColumnFilter } from './SelectColumnFilter'
import { NumberRangeColumnFilter}  from './NumberRangeColumnFilter'
import { SliderColumnFilter } from './SliderColumnFilter'
import { filterGreaterThan } from './filterGreaterThan'

export const HOMECOLUMNS = [
    {
        Header: 'Status',
        accessor: 'status',
        sticky: 'left',
    },
    {
        id: 'userId',
        Header: 'User',
        accessor: 'userId',
        sticky: 'left',
    },
    {
        Header: 'Mandatory Account',
        accessor: 'mandatory', 
        sticky: 'left',
        Filter: SelectColumnFilter,
                       
    },
    {
        Header: 'Account Number',
        accessor: 'id',
        sticky: 'left',
        Filter: ColumnFilter,
        
    },
    {
        Header: 'Name',
        accessor: 'customerName',
        sticky: 'left',
          
    },
    {
        Header: 'Sanction Date',
        accessor: 'sanctionDate',               
    },
    {
        Header: 'Audit Date',
        accessor: 'auditDate',              
    },
    {
        Header: 'Outstanding Amount',
        accessor: 'outstandingAmt',
        Filter: NumberRangeColumnFilter,
        filter: 'between'                
    },
    {
        Header: 'Overdue',
        accessor: 'overdue', 
        Filter: NumberRangeColumnFilter,
        filter: 'between'               
    },
    {
        Header: 'Overdue Since',
        accessor: 'overduesSince'         
    },
    {
        Header: 'ROI',
        accessor: 'roi'         
    },
    {
        Header: 'Asset Class',
        accessor: 'assetClass'         
    },
    {
        Header: 'Description Of Activity',
        accessor: 'descOfActivity'         
    },
    {
        Header: 'Zone',
        accessor: 'zone'         
    },
    {
        Header: 'Region',
        accessor: 'region'         
    },
    {
        Header: 'Branch Name',
        accessor: 'branchName'         
    },
    {
        Header: 'Scheme Description',
        accessor: 'schemeDesc'         
    },
    {
        Header: 'Limit',
        accessor: 'limit', 
        Filter: NumberRangeColumnFilter,
        filter: 'between'               
    },
    {
        Header: 'Customer ID',
        accessor: 'customerId',                
    },
    {
        Header: 'Scheme Code',
        accessor: 'schemeCode',                
    },
    {
        Header: 'Sol ID',
        accessor: 'solId',                
    }
]