import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Ships from "../components/Ships"
import { Box } from "@mui/material"

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
