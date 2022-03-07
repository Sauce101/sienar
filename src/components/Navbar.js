import React from "react"
import logo from "../assets/images/logoWhite.png"

import DrawerComp from "./DrawerComp"
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
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
  return (
    <>
      <Box>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Link href="/">
              <IconButton>
                <img src={logo} alt="company logo" height="60px" width="40px" />
              </IconButton>
            </Link>
            <>
              <Typography
                className="hamburger"
                sx={{
                  fontSize: "1.5rem",
                  paddingLeft: 2,
                  color: "#fff",
                }}
              >
                SIENAR
              </Typography>
              <Box className="hamburger" sx={{ marginLeft: "auto" }}>
                <DrawerComp className="hamburger" />
              </Box>
            </>
            <Box className="noHamburger " sx={{ marginLeft: "auto" }}>
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
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
