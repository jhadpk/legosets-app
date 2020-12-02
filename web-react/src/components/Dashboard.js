import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import ThemePriceTrendChart from './ThemePriceTrendChart'
import SetCount from './SetCount'
import ThemeCount from './ThemeCount'
import ColorTrends from './ColorTrends'
import SetsWithMaxColorsTrend from './SetsWithMaxColorsTrend'
import PartsPerYear from './PartsPerYear'
import ThemesReleasedTrend from './ThemesReleasedTrend'
import TopThemes from './TopThemes'
import SetPriceDetailsChart from './SetPriceDetailsChart'
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
      height: 300,
    },
    doubleFixedHeight: {
      height: 350,
    },
  }))
  const classes = useStyles(theme)
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const doubleFixedHeightPaper = clsx(classes.paper, classes.doubleFixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* ThemesReleasedTrend Trends */}
        <Grid item xs={12} md={6} lg={8}>
          <Paper className={doubleFixedHeightPaper}>
            <ThemesReleasedTrend />
          </Paper>
        </Grid>
        {/* Theme Count */}
        <Grid item xs={12} md={2} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <ThemeCount />
          </Paper>
        </Grid>

        {/* Color Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <ColorTrends />
          </Paper>
        </Grid>
        {/* SetsPerColorPerYear Trends */}
        <Grid item xs={12} md={6} lg={8}>
          <Paper className={doubleFixedHeightPaper}>
            <SetsWithMaxColorsTrend />
          </Paper>
        </Grid>

        {/* PartsPerSetperYear Trends */}
        <Grid item xs={12} md={6} lg={8}>
          <Paper className={doubleFixedHeightPaper}>
            <PartsPerYear />
          </Paper>
        </Grid>
        {/* Set Count */}
        <Grid item xs={12} md={2} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <SetCount />
          </Paper>
        </Grid>

        {/* ThemePriceTrend Chart */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={doubleFixedHeightPaper}>
            <ThemePriceTrendChart />
          </Paper>
        </Grid>
        {/* TopThemes Chart */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={doubleFixedHeightPaper}>
            <TopThemes />
          </Paper>
        </Grid>

        {/* SetPriceDetailsChart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SetPriceDetailsChart />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
