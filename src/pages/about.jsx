import React from "react"
import Menu from "../components/Menu"
import Layout from "../components/Layout"
import CardV2 from "../components/CardV2"

const About = () => {
    const myText = 'meu texto'
    return(
        <Layout>
            <Menu/>
            <h1>About</h1>
            <h2>{ myText }</h2>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <CardV2
                            titleCard="Card Title 1"
                            textCard="ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890"
                            colorButton="primary"
                        />
                    </div>
                    <div className="col-4">
                        <CardV2
                            titleCard="Card Title 2"
                            textCard="ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890"
                            colorButton="secondary"
                        />
                    </div>
                    <div className="col-4">
                        <CardV2
                            titleCard="Card Title 3"
                            textCard="ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890"
                            colorButton="gatsby"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About