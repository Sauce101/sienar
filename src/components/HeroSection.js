import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import useMediaQuery from "@mui/material/useMediaQuery"
import useTheme from "@mui/material/styles/useTheme"
import { Box } from "@mui/material"
import Ships from "./Ships"

export default function HeroSection() {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      {isMatch ? (
        <Box>
          <StaticImage
            src="../assets/images/mobile/pilot1920.jpg"
            alt="tie pilot"
            layout="fullWidth"
            style={{ height: "100vh" }}
          />
          <Ships />
        </Box>
      ) : (
        <Box>
          <StaticImage
            src="../assets/images/tp-hero.jpg"
            alt="tie pilot"
            layout="fullWidth"
          />
          <Ships />
        </Box>
      )}
    </>
  )
}
