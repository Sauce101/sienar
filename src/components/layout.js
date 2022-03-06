import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import "../assets/css/main.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    background: {
      default: "#eeeeee",
    },
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      main: "#a5372a",
      contrastText: "#fff",
    },
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
