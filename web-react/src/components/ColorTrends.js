import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'

const GET_DATA_QUERY = gql`
  {
    uniquePartsPerColor(first: 10) {
      color
      num_parts
    }
  }
`

export default function ColorTrends() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>Unique parts per Color</Title>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="num_parts"
            nameKey="color"
            isAnimationActive={false}
            data={data.uniquePartsPerColor}
            outerRadius={120}
            fill="#3f51b5"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
