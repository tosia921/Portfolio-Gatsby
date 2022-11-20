import * as React from "react"

// import Layout from "../components/Layout"
import Layout from "../components/layout"
import Hero from "../components/hero"
import MyTech from "../components/myTech"
import Projects from "../components/projects"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <MyTech />
      <Projects />
    </Layout>
  )
}

export default Index
