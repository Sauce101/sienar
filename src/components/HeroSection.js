import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import useMediaQuery from "@mui/material/useMediaQuery"
import useTheme from "@mui/material/styles/useTheme"
import Ships from "./Ships"

export default function HeroSection() {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      {isMatch ? (
        <>
          <StaticImage
            src="../assets/images/mobile/pilot-iphone.jpg"
            alt="tie pilot"
            layout="fullWidth"
            // placeholder="tracedSVG"
          />
        </>
      ) : (
        <>
          <StaticImage
            src="../assets/images/tp-hero.jpg"
            alt="tie pilot"
            layout="fullWidth"
            // placeholder="tracedSVG"
          />
        </>
      )}
      <Ships />
    </>
  )
}
