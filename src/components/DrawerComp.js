import React, { useState } from "react"

import MenuIcon from "@mui/icons-material/Menu"
import {
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
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

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState()

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <Link
                href={`/${page}`}
                variant="h6"
                underline="hover"
                sx={{ color: "secondary.main" }}
                // style={{ textDecoration: "none" }}
              >
                <ListItemIcon
                  //
                  sx={{ color: "secondary.main" }}
                  //
                >
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body2"
                        style={{
                          textTransform: "uppercase",
                          fontFamily: "Sienarfont",
                          color: "#secondary.main",
                        }}
                      >
                        {page}
                      </Typography>
                    }
                    // sx={{
                    //   textTransform: "uppercase",
                    //   color: "secondary.main",
                    //   fontFamily: "Sienarfont",
                    // }}
                  >
                    {/* {page} */}
                  </ListItemText>
                </ListItemIcon>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp
