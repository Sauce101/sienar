import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Bomber from "../components/Bomber"

const bomber = () => {
  return (
    <Layout>
      <Seo title="Bomber" />
      <Bomber />
    </Layout>
  )
}

export default bomber
