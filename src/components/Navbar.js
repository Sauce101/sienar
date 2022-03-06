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
            {isMatch ? (
              <>
                <Typography
                  sx={{
                    // fontSize: "1.5rem",
                    fontSize: "2rem",
                    paddingLeft: 2,
                    fontFamily: "Sienarfont",
                    color: "#fff",
                  }}
                >
                  SIENAR
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
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
                        fontFamily: "Sienarfont",
                        textTransform: "uppercase",
                      }}
                    >
                      {page}
                    </Link>
                  ))}
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
