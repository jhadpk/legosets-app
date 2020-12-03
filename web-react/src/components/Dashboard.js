import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import LegosetPriceTrend from './LegosetPriceTrend'
import AveragePartsPerYear from './AveragePartsPerYear'
import SetCount from './SetCount'
import ThemeCount from './ThemeCount'

import ThemePriceTrendChart from './ThemePriceTrendChart'
import PartsPerSetPerTheme from './PartsPerSetPerTheme'
import ColorTrends from './ColorTrends'
import SetsWithMaxColorsTrend from './SetsWithMaxColorsTrend'
import ColorBlackSetsTrend from './ColorBlackSetsTrend'
import ColorWhiteSetsTrend from './ColorWhiteSetsTrend'
import ColorRedSetsTrend from './ColorRedSetsTrend'
import ThemesReleasedTrend from './ThemesReleasedTrend'
import TopThemes from './TopThemes'
import SetPriceDetailsChart from './SetPriceDetailsChart'
import MasterTable from './MasterTable'
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
        {/* PartsPerSetperYear Trends */}
        <Grid item xs={12} md={6} lg={5}>
          <Paper className={doubleFixedHeightPaper}>
            <LegosetPriceTrend />
          </Paper>
        </Grid>
        {/* PartsPerSetperYear Trends */}
        <Grid item xs={12} md={6} lg={5}>
          <Paper className={doubleFixedHeightPaper}>
            <AveragePartsPerYear />
          </Paper>
        </Grid>
        {/* Set Count */}
        <Grid item xs={12} md={2} lg={2}>
          <Paper className={doubleFixedHeightPaper}>
            <SetCount />
          </Paper>
        </Grid>

        {/* Theme Count */}
        <Grid item xs={12} md={2} lg={2}>
          <Paper className={doubleFixedHeightPaper}>
            <ThemeCount />
          </Paper>
        </Grid>
        {/* ThemesReleasedTrend Trends */}
        <Grid item xs={12} md={6} lg={5}>
          <Paper className={doubleFixedHeightPaper}>
            <ThemesReleasedTrend />
          </Paper>
        </Grid>
        {/* ThemesReleasedTrend Trends */}
        <Grid item xs={12} md={6} lg={5}>
          <Paper className={doubleFixedHeightPaper}>
            <PartsPerSetPerTheme />
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

        {/* ColorWiseSetsTrend Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <ColorBlackSetsTrend />
          </Paper>
        </Grid>
        {/* ColorWiseSetsTrend Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <ColorWhiteSetsTrend />
          </Paper>
        </Grid>
        {/* ColorWiseSetsTrend Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <ColorRedSetsTrend />
          </Paper>
        </Grid>

        {/* SetPriceDetailsChart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SetPriceDetailsChart />
          </Paper>
        </Grid>

        {/* SetPriceDetailsChart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MasterTable />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
