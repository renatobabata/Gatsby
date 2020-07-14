import React from 'react'
import * as Styled from './styled'
import { useStaticQuery, graphql } from "gatsby"


const Footer = () =>{
    const {
        site: {
          siteMetadata: {
            socialMedia: {
              codepen,
              facebook,
              github
            },
            copyright,
            description
          }
        }
      } = useStaticQuery(graphql`
          {
            site {
              siteMetadata {
                socialMedia {
                  codepen
                  facebook
                  github
                }
                copyright
                description
              }
            }
          }
        `)

    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row text-white py-4 mt-5">
                    <div className="col-6">
                        {description}
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center" >
                        <a href={github} target="_blank">
                            <Styled.GitHubIcon/>
                        </a>
                        <a href={codepen} target="_blank">
                            <Styled.CodepenIcon/>    
                        </a>
                        <a href={facebook} target="_blank">
                            <Styled.FacebookIcon/>
                        </a>
                    </div>
                    <div className="col-12 d-flex jusify-content-center">
                        {copyright}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer 