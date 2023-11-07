import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignInAlt, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const navigate = useNavigate();

    const goTomain = () => {
        navigate('/');
    };

    const goToAccount = () => {
        navigate('/account');
    };

    const goToLogin = () => {
        navigate('/login');
    };

    const goToDataAnalyse = () => {
        navigate('/data');
    };

    const handleLogout = () => {
        console.log('User logged out');
        navigate('/login');
    }

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <button onClick={goTomain}>
                        <FontAwesomeIcon icon={faHome} /> {' '} Main
                    </button>
                </li>
                <li>
                    <button onClick={goToAccount}>
                        <FontAwesomeIcon icon={faUser} />  {' '}Account
                    </button>
                </li>
               
                <li>
                    <button onClick={goToDataAnalyse}>
                        <FontAwesomeIcon icon={faChartBar} /> {' '}Data Analyse
                    </button>
                </li>
                <li>
                    <button className="login" onClick={goToLogin}>
                        <FontAwesomeIcon icon={faSignInAlt} />{' '} Login
                    </button>
                </li>
                {/* Logout button at the bottom */}
                <li>
                    <button className="logout" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} />{' '} Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
