import React from "react"
// import { Link } from "gatsby"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
// import Tabs from "@mui/material/Tabs"
// import Tab from "@mui/material/Tab"
import DrawerComp from "./DrawerComp"
import useMediaQuery from "@mui/material/useMediaQuery"
import useTheme from "@mui/material/styles/useTheme"
import { Box, Typography } from "@mui/material"

import IconButton from "@mui/material/IconButton"
import logo from "../assets/images/logoWhite.png"
import Link from "@mui/material/Link"

// const PAGES = ["advanced", "bomber", "interceptor", "fighter"]

const Navbar = () => {
  // const [value, setValue] = useState(false)
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
                <Link
                  variant="h6"
                  href="/fighter"
                  underline="hover"
                  sx={{
                    marginLeft: "auto",
                    color: "white",
                    fontFamily: "Sienarfont",
                  }}
                >
                  FIGHTER
                </Link>
                <Link
                  // component="button"
                  variant="h6"
                  href="/bomber"
                  underline="hover"
                  sx={{
                    marginLeft: "20px",
                    color: "white",
                    fontFamily: "Sienarfont",
                  }}
                >
                  BOMBER
                </Link>
                <Link
                  // component="button"
                  variant="h6"
                  href="/interceptor"
                  underline="hover"
                  sx={{
                    marginLeft: "20px",
                    color: "white",
                    fontFamily: "Sienarfont",
                  }}
                >
                  INTERCEPTOR
                </Link>
                <Link
                  variant="h6"
                  href="/advanced"
                  underline="hover"
                  sx={{
                    marginLeft: "20px",
                    color: "white",
                    fontFamily: "Sienarfont",
                  }}
                >
                  ADVANCED
                </Link>
                <Link
                  variant="h6"
                  href="/inquisitor"
                  underline="hover"
                  sx={{
                    marginLeft: "20px",
                    color: "white",
                    fontFamily: "Sienarfont",
                  }}
                >
                  INQUISITOR
                </Link>
                <Link
                  // component="button"
                  variant="h6"
                  href="/defender"
                  underline="hover"
                  sx={{
                    marginLeft: "20px",
                    color: "white",
                    fontFamily: "Sienarfont",
                  }}
                >
                  DEFENDER
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
