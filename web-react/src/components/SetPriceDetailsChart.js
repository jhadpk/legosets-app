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
    Set(
      first: 10
      orderBy: USD_MSRP_desc
      filter: {
        derived_theme_not: null
        derived_subtheme_not: ""
        USD_MSRP_not: null
        EUR_MSRP_not: null
        GBP_MSRP_not: null
        CAD_MSRP_not: null
      }
    ) {
      name
      set_num
      year
      derived_theme
      derived_subtheme
      num_parts
      USD_MSRP
      EUR_MSRP
      GBP_MSRP
      CAD_MSRP
    }
  }
`

export default function SetPriceDetailsChart() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Set Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Theme</TableCell>
            <TableCell>Subtheme</TableCell>
            <TableCell>Num_Parts</TableCell>
            <TableCell>USD</TableCell>
            <TableCell>EUR</TableCell>
            <TableCell>GBP</TableCell>
            <TableCell>CAD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.Set.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.derived_theme}</TableCell>
              <TableCell>{row.derived_subtheme}</TableCell>
              <TableCell>{row.num_parts}</TableCell>
              <TableCell>{row.USD_MSRP}</TableCell>
              <TableCell>{row.EUR_MSRP}</TableCell>
              <TableCell>{row.GBP_MSRP}</TableCell>
              <TableCell>{row.CAD_MSRP}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
