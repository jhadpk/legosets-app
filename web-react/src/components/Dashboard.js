import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import ThemePriceTrendChart from './ThemePriceTrendChart'
import SetCount from './SetCount'
import ThemeCount from './ThemeCount'
import PartsPerYear from './PartsPerYear'
import ColorTrends from './ColorTrends'

import RecentReviews from './RecentReviews'
export default function Dashboard() {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* ThemePriceTrend Chart */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={fixedHeightPaper}>
            <ThemePriceTrendChart />
          </Paper>
        </Grid>
        {/* Set Count */}
        <Grid item xs={12} md={2} lg={3}>
          <Paper className={fixedHeightPaper}>
            <SetCount />
          </Paper>
        </Grid>
        {/* Theme Count */}
        <Grid item xs={12} md={2} lg={3}>
          <Paper className={fixedHeightPaper}>
            <ThemeCount />
          </Paper>
        </Grid>
        {/* PartsperYear Trends */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={fixedHeightPaper}>
            <PartsPerYear />
          </Paper>
        </Grid>
        {/* Color Trends */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={fixedHeightPaper}>
            <ColorTrends />
          </Paper>
        </Grid>

        {/* Recent Reviews */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RecentReviews />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
