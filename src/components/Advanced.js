import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Grid, Paper } from "@mui/material"

const Advanced = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/advanced-x1/advX1-1.jpg"
            alt="tie advanced x-1"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/advanced-x1/advX1-2.jpg"
            alt="tie advanced x-1"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/advanced-x1/advX1-cross.jpg"
            alt="tie advanced x-1"
            layout="fullWidth"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/advanced-x1/advX1-3.jpg"
            alt="tie advanced x-1"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/advanced-x1/advX1-4.jpg"
            alt="tie advanced x-1"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/advanced-x1/advX1-8.jpg"
            alt="tie advanced vader rides"
            layout="fullWidth"
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Advanced
