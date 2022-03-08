import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Box } from "@mui/material"
import Ships from "./Ships"

export default function HeroSection() {
  return (
    <>
      <Box className="pilotMobile">
        <StaticImage
          src="../assets/images/mobile/pilot1920.jpg"
          alt="tie pilot"
          placeholder="blurred"
          layout="fullWidth"
          style={{ height: "100vh" }}
        />
        <Ships />
      </Box>
      <Box className="pilotDesk">
        <StaticImage
          src="../assets/images/tp-hero.jpg"
          alt="tie pilot"
          layout="fullWidth"
        />
        <Ships />
      </Box>
    </>
  )
}
