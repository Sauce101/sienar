import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Grid, Paper } from "@mui/material"

const Bomber = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-2.jpg"
            alt="tie bomber"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-1.jpg"
            alt="bomber"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-3.jpg"
            alt="bomber"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-4.jpg"
            alt="bomber"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-layout.jpg"
            alt="bomber"
            layout="fullWidth"
            // aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-5.jpg"
            alt="bomber"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/bomber/tb-6.jpg"
            alt="bomber"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Bomber
