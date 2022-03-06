import React from "react"
import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export default function Footer() {
  return (
    <AppBar position="static" color="secondary" className="foot">
      <Container maxWidth="md" sx={{ mt: "auto" }}>
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            sx={{ mx: "auto", fontFamily: "Sienarfont" }}
          >
            &copy; 2022 Michael Saucedo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
