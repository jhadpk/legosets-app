import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import LegosetPriceTrend from './LegosetPriceTrend'
import AveragePartsPerYear from './AveragePartsPerYear'
import SetCount from './SetCount'
import ThemeCount from './ThemeCount'

import TopThemesBasedOnPrice from './TopThemesBasedOnPrice'
import PartsPerSetPerTheme from './PartsPerSetPerTheme'
import UniquePartsPerColor from './UniquePartsPerColor'
import SetsWithMaxColorPerYear from './SetsWithMaxColorPerYear'
import BlackColorSetsTrend from './BlackColorSetsTrend'
import WhiteColorSetsTrend from './WhiteColorSetsTrend'
import RedColorSetsTrend from './RedColorSetsTrend'
import ThemesReleasedTrend from './ThemesReleasedTrend'
import TopThemesBasedOnSetCount from './TopThemesBasedOnSetCount'
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
        {/* LegosetPriceTrend Trends */}
        <Grid item xs={12} md={6} lg={5}>
          <Paper className={doubleFixedHeightPaper}>
            <LegosetPriceTrend />
          </Paper>
        </Grid>
        {/* AveragePartsPerYear Trends */}
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
        {/* PartsPerSetPerTheme Trends */}
        <Grid item xs={12} md={6} lg={5}>
          <Paper className={doubleFixedHeightPaper}>
            <PartsPerSetPerTheme />
          </Paper>
        </Grid>

        {/* TopThemesBasedOnPrice Chart */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={doubleFixedHeightPaper}>
            <TopThemesBasedOnPrice />
          </Paper>
        </Grid>
        {/* TopThemesBasedOnSetCount Chart */}
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={doubleFixedHeightPaper}>
            <TopThemesBasedOnSetCount />
          </Paper>
        </Grid>

        {/* UniquePartsPerColor Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <UniquePartsPerColor />
          </Paper>
        </Grid>
        {/* SetsWithMaxColorPerYear Trends */}
        <Grid item xs={12} md={6} lg={8}>
          <Paper className={doubleFixedHeightPaper}>
            <SetsWithMaxColorPerYear />
          </Paper>
        </Grid>

        {/* BlackColorSetsTrend Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <BlackColorSetsTrend />
          </Paper>
        </Grid>
        {/* WhiteColorSetsTrend Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <WhiteColorSetsTrend />
          </Paper>
        </Grid>
        {/* RedColorSetsTrend Trends */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={doubleFixedHeightPaper}>
            <RedColorSetsTrend />
          </Paper>
        </Grid>

        {/* SetPriceDetailsChart */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SetPriceDetailsChart />
          </Paper>
        </Grid>

        {/* MasterTable */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MasterTable />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
