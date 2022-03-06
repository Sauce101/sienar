import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Inquisitor from "../components/Inquisitor"

const inquisitor = () => {
  return (
    <Layout>
      <Seo title="Inquisitor" />
      <Inquisitor />
    </Layout>
  )
}

export default inquisitor
