import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to="/">Sort</Link><br></br>
            <Link to="/failed">Failed</Link><br></br>
            <Link to="/passed">Passed</Link><br></br>
        </div>
    )
}

export default Nav
