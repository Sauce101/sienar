import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Inquisitors from "../assets/videos/inquiz.mp4"
import Posterboy from "../assets/images/inquisitor/av1-guarded.webp"

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
        <Paper sx={{ p: 4 }}>
          <video
            controls
            poster={Posterboy}
            disablePictureInPicture
            controlsList="nodownload"
          >
            <source src={Inquisitors} type="video/mp4" />
            <track kind="captions" srcLang="en" />
          </video>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Inquisitor
