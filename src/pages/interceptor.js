import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Interceptor from "../components/Interceptor"

const interceptor = () => {
  return (
    <Layout>
      <Seo title="Interceptor" />
      <Interceptor />
    </Layout>
  )
}

export default interceptor
