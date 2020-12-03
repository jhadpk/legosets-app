import React from 'react'
// import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

const GET_COUNT_QUERY = gql`
  {
    themeCount
  }
`

export default function ThemeCount() {
  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Total Themes</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.themeCount}
      </Typography>
      <div></div>
    </React.Fragment>
  )
}
