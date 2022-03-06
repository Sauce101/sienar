import React from "react"
import logo from "../assets/images/logoWhite.png"

import DrawerComp from "./DrawerComp"
import useTheme from "@mui/material/styles/useTheme"
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material"

const PAGES = [
  "fighter",
  "bomber",
  "interceptor",
  "advanced",
  "inquisitor",
  "defender",
]

const Navbar = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  let tbWide
  if (isMatch) {
    tbWide = (
      <>
        <Typography
          sx={{
            fontSize: "1.5rem",
            paddingLeft: 2,
            color: "#fff",
          }}
        >
          SIENAR
        </Typography>
        <DrawerComp />
      </>
    )
  } else {
    tbWide = (
      <Box sx={{ marginLeft: "auto" }}>
        {PAGES.map((page, index) => (
          <Link
            variant="h6"
            href={`/${page}`}
            key={index}
            underline="hover"
            sx={{
              marginLeft: "20px",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            {page}
          </Link>
        ))}
      </Box>
    )
  }

  return (
    <>
      <Box>
        <AppBar position="relative" color="secondary">
          <Toolbar>
            <Link href="/">
              <IconButton>
                <img src={logo} alt="company logo" height="60px" width="40px" />
              </IconButton>
            </Link>
            {tbWide}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
