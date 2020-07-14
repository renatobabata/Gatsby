import React from "react"
import Layout from "../components/Layout"
import CardV2 from "../components/CardV2"

const About = () => {
    const myText = 'meu texto'
    return(
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1>About</h1>
                        <p>{ myText }</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <CardV2
                            nameImage="foto01"
                            titleCard="Card Title 1"
                            textCard="ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890"
                            colorButton="primary"
                            backgroundCard="#b20661"
                            styleDefault={true}
                        />
                    </div>
                    <div className="col-4">
                        <CardV2
                            nameImage="foto02"
                            titleCard="Card Title 2"
                            textCard="ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890"
                            colorButton="secondary"
                            backgroundCard=""
                            styleDefault={false}
                        />
                    </div>
                    <div className="col-4">
                        <CardV2
                            nameImage="foto03"
                            titleCard="Card Title 3"
                            textCard="ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890"
                            colorButton="gatsby"
                            backgroundCard="#b20661"
                            styleDefault={true}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About