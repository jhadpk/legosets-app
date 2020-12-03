import React from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  // Line,
  Bar,
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
    topThemesBasedOnSetCount {
      name
      count
    }
  }
`

export default function TopThemesBasedOnSetCount() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Top Themes Based On Set Count</Title>
      <ResponsiveContainer>
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data.topThemesBasedOnSetCount}
          margin={{
            top: 20,
            right: 10,
            bottom: 20,
            left: 35,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="count" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          {/* <Area dataKey="USD_average" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
          {/* <Line dataKey="USD_average" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
