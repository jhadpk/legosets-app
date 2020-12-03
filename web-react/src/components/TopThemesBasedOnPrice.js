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
    topThemesBasedOnPrice(first: 10) {
      theme
      USD_average
    }
  }
`

export default function TopThemesBasedOnPrice() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Top Themes Based on Average USD Price</Title>
      <ResponsiveContainer>
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data.topThemesBasedOnPrice}
          margin={{
            top: 10,
            right: 20,
            bottom: 10,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="USD_average" />
          <YAxis dataKey="theme" type="category" />
          <Tooltip />
          <Legend />
          {/* <Area dataKey="USD_average" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="USD_average" barSize={20} fill="#413ea0" />
          {/* <Line dataKey="USD_average" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
