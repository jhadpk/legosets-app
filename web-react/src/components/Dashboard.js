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
import ThemesReleasedTrend from './ThemesReleasedTrend'

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

    mediumFixedHeight: {
      height: 350,
    },
    doubleFixedHeight: {
      height: 400,
    },
  }))
  const classes = useStyles(theme)
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  // const doubleFixedHeightPaper = clsx(classes.paper, classes.doubleFixedHeight)
  const mediumFixedHeightPaper = clsx(classes.paper, classes.mediumFixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* ThemePriceTrend Chart */}
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={mediumFixedHeightPaper}>
            <ThemePriceTrendChart />
          </Paper>
        </Grid>
        {/* Set Count */}
        <Grid item xs={12} md={2} lg={4}>
          <Paper className={mediumFixedHeightPaper}>
            <SetCount />
          </Paper>
        </Grid>
        {/* Color Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={mediumFixedHeightPaper}>
            <ColorTrends />
          </Paper>
        </Grid>
        {/* PartsperYear Trends */}
        <Grid item xs={12} md={6} lg={8}>
          <Paper className={mediumFixedHeightPaper}>
            <PartsPerYear />
          </Paper>
        </Grid>

        {/* PartsperYear Trends */}
        <Grid item xs={12} md={6} lg={8}>
          <Paper className={mediumFixedHeightPaper}>
            <ThemesReleasedTrend />
          </Paper>
        </Grid>
        {/* Theme Count */}
        <Grid item xs={12} md={2} lg={4}>
          <Paper className={mediumFixedHeightPaper}>
            <ThemeCount />
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
