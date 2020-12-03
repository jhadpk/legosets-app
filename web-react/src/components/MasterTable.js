import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'

const GET_DATA_QUERY = gql`
  {
    Master(first: 5, orderBy: usd_price_desc) {
      setname
      theme
      parentTheme
      year
      inventoryId
      num_parts
      distinct_parts
      colors
      part_categories
      usd_price
    }
  }
`

export default function MasterTable() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Master Node Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>SetName</TableCell>
            <TableCell>Theme</TableCell>
            <TableCell>Parent Theme</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>InventoryId</TableCell>
            <TableCell>#Num Parts</TableCell>
            <TableCell>#Distinct Parts</TableCell>
            <TableCell>Colors Avlbl</TableCell>
            {/* <TableCell>Part Categories</TableCell> */}
            <TableCell>USD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.Master.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.setname}</TableCell>
              <TableCell>{row.theme}</TableCell>
              <TableCell>{row.parentTheme}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.inventoryId}</TableCell>
              <TableCell>{row.num_parts}</TableCell>
              <TableCell>{row.distinct_parts}</TableCell>
              <TableCell>{row.colors}</TableCell>
              {/* <TableCell>{row.part_categories}</TableCell> */}
              <TableCell>{row.usd_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
