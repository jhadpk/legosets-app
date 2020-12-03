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
    partsPerSetPerTheme(first: 15) {
      setname
      theme
      num_parts
    }
  }
`

export default function PartsPerSetPerTheme() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Sets With Max Parts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Theme</TableCell>
            <TableCell>Num_Parts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.partsPerSetPerTheme.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.setname}</TableCell>
              <TableCell>{row.theme}</TableCell>
              <TableCell>{row.num_parts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
