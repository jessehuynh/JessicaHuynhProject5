import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Enter extends Component {
    render(){
        return (
            <div className="overlay">
                <Link to="/store/E-Cards">
                    <h1>e-cards are back</h1>
                </Link>
            </div>
        )
    }
}

export default Enter;
