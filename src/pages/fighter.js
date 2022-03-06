import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Fighter from "../components/Fighter"

const fighter = () => {
  return (
    <Layout>
      <Seo title="Fighter" />
      <Fighter />
    </Layout>
  )
}

export default fighter
