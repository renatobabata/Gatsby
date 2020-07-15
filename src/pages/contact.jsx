import React from "react"
import Layout from '../components/Layout'
import * as Styled from '../styles/pages/contactStyles'
import SEO from "../components/seo"

const Contact = () => {
    const myText = 'meu texto'
    return(
        <Layout>
            <SEO 
                title="Contact" 
            />
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4 mb-3">
                    <h1>Contact</h1>
                    <p>{ myText } contact</p>
                    </div>
                    <div className="col-md-6 mb-5">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <ul className="list-group">
                            <li className="list-group-item"><Styled.EmailWrapper danger
                            />my-email@email.com</li>
                            <li className="list-group-item"><Styled.PhoneWrapper danger
                            />(11) 123456789</li>
                            <li className="list-group-item"><Styled.LocationOnWrapper danger
                            />Rua Abcdef 123</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact