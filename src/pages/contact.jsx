import React from "react"
import Layout from '../components/Layout'
import * as Styled from '../styles/pages/contactStyles'

const Contact = () => {
    const myText = 'meu texto'
    return(
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                    <h1>Contact</h1>
                    <p>{ myText } contact</p>
                    </div>
                    <div className="col-6">
                    <ul class="list-group">
                        <li class="list-group-item"><Styled.EmailWrapper 
                        color="#9c69ac"
                        width="35px"
                        />Email</li>
                        
                    </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact