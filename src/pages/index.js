import * as React from "react"
import { Box } from "@mui/material"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Ships from "../components/Ships"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Box sx={{ backgroundColor: "#eeeeee" }}>
      <HeroSection />
      <Ships />
    </Box>
  </Layout>
)

export default IndexPage
