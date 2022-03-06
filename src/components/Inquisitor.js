import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Grid, Paper } from "@mui/material"

const Inquisitor = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/inquisitor/inquisitor-front.png"
            alt="tie inquisitor"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/inquisitor/inquisitor-back.png"
            alt="tie inquisitor"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/inquisitor/av1-guarded.webp"
            alt="tie inquisitor hangar"
            layout="fullWidth"
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Inquisitor
