import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Grid, Paper, Card, CardMedia } from "@mui/material"

import tb1 from "../assets/images/bomber/tb1.jpg"
import tb2 from "../assets/images/bomber/tb2.jpg"
import tb3 from "../assets/images/bomber/tb3.jpg"
import tb4 from "../assets/images/bomber/tb4.jpg"
import tb5 from "../assets/images/bomber/tb5.jpg"
import tb6 from "../assets/images/bomber/tb6.jpg"

const PAGES = [tb1, tb2, tb3, tb4, tb5, tb6]

const Bomber = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-layout.jpg"
            alt="bomber"
            layout="fullWidth"
          />
        </Paper>
      </Grid>

      {PAGES.map((page, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Paper sx={{ p: 2 }}>
            <Card>
              <CardMedia component="img" src={page} alt="tie bomber" />
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default Bomber
