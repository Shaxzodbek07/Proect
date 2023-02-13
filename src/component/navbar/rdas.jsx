import React, { Component } from "react";
import { Link } from 'react-router-dom'
//class component
class Rdas extends Component {
    state = {

    }
    render() {
        return (
            <>
                <h1>Salom</h1>
                <Link to='/home'>Home</Link>


            </>
        );
    }
}
export default Rdas;