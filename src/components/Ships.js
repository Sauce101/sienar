import React from "react"

import fighter from "../assets/images/tieCards/Fighter.png"
import defender from "../assets/images/tieCards/Defender.jpg"
import bomber from "../assets/images/tieCards/Bomber.jpg"
import interceptor from "../assets/images/tieCards/Interceptor.jpg"
import advancedx1 from "../assets/images/tieCards/AdvancedX1.png"
import advancedv1 from "../assets/images/tieCards/AdvancedV1.png"

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material"

export default function Ships() {
  return (
    <Box sx={{ my: 2, mx: 2, bgcolor: "#eeeeee" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", flexGrow: "1" }}
        >
          <Card>
            <CardActionArea
              component={Link}
              href="/fighter"
              underline="none"
              sx={{
                borderRadius: 16,
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                src={fighter}
                alt="tie fighter"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TIE Fighter
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The TIE fighter was the unforgettable symbol of the Imperial
                fleet. Carried aboard Star Destroyers and battle stations, TIE
                fighters were single-pilot vehicles designed for fast-paced
                dogfights.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", flexGrow: "1" }}
        >
          <Card>
            <CardActionArea component={Link} href="/bomber" underline="none">
              <CardMedia
                component="img"
                height="280"
                src={bomber}
                alt="tie bomber"
                sx={{
                  borderRadius: 16,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TIE Bomber
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Empire used flights of TIE bombers to drop vast quantities
                of munitions on rebellious planets and targets in space,
                delivering devastating attacks with frightening accuracy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", flexGrow: "1" }}>
          <Card>
            <CardActionArea
              component={Link}
              href="/interceptor"
              underline="none"
              sx={{
                borderRadius: 16,
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                src={interceptor}
                alt="tie interceptor"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TIE Interceptor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Faster and better-armed descendants of regular TIE fighters, TIE
                interceptors defended the second Death Star at the Battle of
                Endor. The bent-winged fighters swarmed the Rebel fleet in a
                terrifying display of the Empire's military might.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", flexGrow: "1" }}
        >
          <Card>
            <CardActionArea
              component={Link}
              href="/advanced"
              underline="none"
              sx={{
                borderRadius: 16,
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                src={advancedx1}
                alt="tie advanced x1"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TIE Advanced
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Darth Vader piloted this distinctive experimental TIE fighter
                above the first Death Star, using its blaster cannons and his
                uncanny abilities with the Force to blast Rebel starfighters
                into glittering fragments.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", flexGrow: "1" }}
        >
          <Card>
            <CardActionArea
              component={Link}
              href="/inquisitor"
              underline="none"
              sx={{
                borderRadius: 16,
                transition: "0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="280"
                src={advancedv1}
                alt="tie inquisitor"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TIE Inquisitor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Superior to typical TIE fighters, featuring faster engines,
                S-foils with more efficient solar gather panels, upgraded laser
                cannons, and a projectile launcher that fired Imperial XX-23
                S-Thread Tracers.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: "flex", flexGrow: "1" }}>
          <Card>
            <CardActionArea component={Link} href="/defender" underline="none">
              <CardMedia
                component="img"
                height="280"
                src={defender}
                alt="tie defender"
                sx={{
                  borderRadius: 16,
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TIE Defender
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The TIE defender is an experimental fighter armed with heavy
                cannons and shields, and is equipped with a hyperdrive. A major
                weapon for the Empire, the TIE defender proves much more
                difficult to destroy than standard TIE fighters.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
