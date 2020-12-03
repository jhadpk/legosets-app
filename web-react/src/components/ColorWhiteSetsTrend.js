import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'

const GET_DATA_QUERY = gql`
  {
    whiteColorSetsTrend(first: 10) {
      year
      num_sets
    }
  }
`

export default function ColorWhiteSetsTrend() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>White Colored sets</Title>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data.whiteColorSetsTrend}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="year"
            type="category"
            allowDuplicatedCategories={true}
          />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="num_sets" stroke="#000000" />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
