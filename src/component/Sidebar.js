import React from 'react';
import './Sidebar.css';

function Sidebar() {

    return (
        <div className="sidebar">
            <ul>
                <li>
                    {/* <Link to="/Login">Account</Link> */}
                    <button>Account</button>
                </li>
                <li>
                    <button>Data Ayalysis</button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;



