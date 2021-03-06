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
      <Drawer
        className="hamburger"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <Link
                href={`/${page}`}
                variant="h6"
                underline="hover"
                sx={{ color: "secondary.main" }}
              >
                <ListItemIcon
                  //
                  sx={{ color: "secondary.main" }}
                  //
                >
                  <ListItemText
                    sx={{
                      textTransform: "uppercase",
                      color: "secondary.main",
                    }}
                  >
                    {page}
                  </ListItemText>
                </ListItemIcon>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        className="hamburger"
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className="hamburger" />
      </IconButton>
    </>
  )
}

export default DrawerComp
