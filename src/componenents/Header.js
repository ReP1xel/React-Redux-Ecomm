// import React from 'react';

// function Header(){
//     return (
//         <div>
//             First React component
//         </div>
//     )
// }

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui fixed menu" style={{height: "55px"}}>
            <div className="ui container center" style={{padding: "7px"}}>
                <h1><Link to="/">First React Redux</Link></h1>
            </div>
        </div>
    )
}

export default Header;