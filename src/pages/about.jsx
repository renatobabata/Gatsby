import React from "react"
import Menu from "../components/Menu"
import Layout from "../components/Layout"

const About = () => {
    const myText = 'meu texto'
    return(
        <Layout>
            <Menu/>
            <h1>About</h1>
            <h2>{ myText }</h2>
        </Layout>
    )
}

export default About