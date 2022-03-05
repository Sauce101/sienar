import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Grid, Paper } from "@mui/material"

const Interceptor = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-1.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-2.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-3.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-4.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-5.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-6.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-8.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/interceptor/in-9.jpg"
            alt="developer"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Interceptor
