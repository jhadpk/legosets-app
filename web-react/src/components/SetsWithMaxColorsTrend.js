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
    setsWithMaxColorPerYear {
      year
      set_name
      num_colors
    }
  }
`

export default function SetsWithMaxColorsTrend() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Sets With Max Colors</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Num of Colors</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.setsWithMaxColorPerYear.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.set_name}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.num_colors}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
