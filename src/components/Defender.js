import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Defendervid from "../assets/videos/Defender.mp4"
import Posterboy from "../assets/images/defender/defcover.webp"

import { Grid, Paper } from "@mui/material"

const Defender = () => {
  return (
    <Grid container>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/defender/def-1.jpg"
            alt="tie defender"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/defender/def-2.jpg"
            alt="tie defender"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 4 }}>
          <video
            controls
            poster={Posterboy}
            disablePictureInPicture
            controlsList="nodownload"
          >
            <source src={Defendervid} type="video/mp4" />
            <track kind="captions" srcLang="en" />
          </video>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/defender/def-9.jpg"
            alt="tie defender"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper sx={{ p: 2 }}>
          <StaticImage
            src="../assets/images/defender/def-10.jpg"
            alt="tie defender"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Defender
