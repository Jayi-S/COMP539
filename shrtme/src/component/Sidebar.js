import React from 'react';



function Sidebar() {

    return (
        <div className="sidebar">
            <ul>
                <li>
                    {/* <Link to="/Login">Account</Link> */}
                    <button>Account</button>
                </li>
                <li>
                    <button>Card</button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;



