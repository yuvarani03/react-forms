import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Address extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: ""
        }
    }

    change = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    componentWillUnmount() {
        this.props.addDetails(this.state)
    }

    render() {
        return (
            <div>
                <h1>Address</h1>
                <form>
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Pincode" />
                <input type="text" placeholder="Address" />
                </form>
                <div className="navLinks">
                    <button className="prev-btn"><Link to="/bank">Previous</Link></button>
                    <button className="next-btn"><Link to="/">Submit</Link></button>
                </div> 
            </div>
        )
    }
}