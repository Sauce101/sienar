import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { Box, Typography, Grid, Paper } from "@mui/material"

const Fighter = () => {
  return (
    <>
      <Box
        //
        sx={{ flexGrow: 1 }}
        //
      >
        <Grid container spacing={2}>
          <Grid
            item
            sm={12}
            sx={{ justifyContent: "center", alignContent: "center" }}
          >
            <Paper sx={{ p: 2 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ textAlign: "center", mt: 2 }}
              >
                TIE Starfighter
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
                The TIE Fighter is the original design for later upgraded TIE
                models such as TIE/sa bomber, TIE/IN interceptor, TIE/D
                Defender, TIE/D automated starfighter, and many more. The TIE
                Fighter was a descendant of the T.I.E. starfighter and the
                V-wing starfighter, both developed for the Galactic Republic,
                and was manufactured by Sienar Fleet Systems. In addition to the
                TIE and V-wing, it was also descended from the TIE starfighter,
                the first TIE model developed for the Galactic Empire. The
                namesake for the fighter and line was the Sienar Fleet Systems
                P-s4 twin ion engines that acted as its engines. However, it
                also to some degree was named after an item of clothing due to
                its overall shape resembling a bow-tie.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={4} lg={2} sx={{ my: "auto" }}>
                  <StaticImage
                    src="../assets/images/fighter/fighter01.jpg"
                    alt="tie fighter"
                  />
                </Grid>
                <Grid item xs={12} sm={9} md={8} lg={10} sx={{ my: "auto" }}>
                  <Typography variant="body1" gutterBottom>
                    The TIE/Ln's engine was one of the most precisely
                    manufactured propulsion systems in the galaxy and, with no
                    moving parts, was low-maintenance. Unlike the TIE before it,
                    the TIE/Ln sported independent generators for the engine and
                    the weapons. The lack of combat shields, hyperdrive, and
                    life-support systems, in concert with the advanced engine
                    design, reduced the mass of the fighter and conferred
                    exceptional maneuverability. This also made them both
                    inexpensive and quick to replace.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Primary armament was a pair of L-s1 laser cannons, coupled
                    with a powerful sensor suite. The cannons were relatively
                    powerful, and a well-placed hit on a starfighter or medium
                    transport could damage or destroy it. It did not carry
                    missile tubes, but such weapons could be added if necessary.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <StaticImage
              src="../assets/images/fighter/cockpit02.webp"
              alt="tie fighter pics"
              layout="fullWidth"
              aspectRatio={16 / 9}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <StaticImage
              src="../assets/images/fighter/tf-3.png"
              alt="tie fighter pics"
              layout="fullWidth"
              aspectRatio={16 / 9}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <StaticImage
              src="../assets/images/fighter/tf-4.png"
              alt="tie fighter pics"
              layout="fullWidth"
              aspectRatio={16 / 9}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <StaticImage
              src="../assets/images/fighter/tf-5.webp"
              alt="tie fighter pics"
              layout="fullWidth"
              aspectRatio={16 / 9}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Fighter
