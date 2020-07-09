import React from "react"
import { Dropdown } from 'react-bootstrap'

const CardV2 = (props) =>{
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text text-gatsby">{props.textCard}</p>
                <a href="#" className={`btn btn-${props.colorButton}`}>Go somewhere</a>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default CardV2