import React from 'react'
// import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

const GET_COUNT_QUERY = gql`
  {
    setCount
  }
`

export default function SetCount() {
  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Total Sets</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.setCount}
      </Typography>
      {/* <div>
        <Link to="/sets" className={classes.navLink}>
          View sets
        </Link>
      </div> */}
    </React.Fragment>
  )
}
