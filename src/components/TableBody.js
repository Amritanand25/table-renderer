import React from 'react'

const TableBody = ({rawData}) => {
    
  return (
    <tbody className='table-row-group'>
        {
            rawData.map((row) => (<tr key={row.id} className='table-row border even:bg-gray-100'>
               <td className='table-cell p-4 border'>{row.firstName + " " + row.lastName}</td>
               <td className='table-cell p-4 border'>{row.position}</td>
               <td className='table-cell p-4 border'>{row.office}</td>
               <td className='table-cell p-4 border'>{row.age}</td>
               <td className='table-cell p-4 border'>{row.startDate}</td>
               <td className='table-cell p-4 border'>$ {row.salary}</td>
            </tr>))
        }
    </tbody>
  )
}

export default TableBody