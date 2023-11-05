import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {
    const navigate = useNavigate();

    const goTomain = () => {
        navigate('/'); 
    };



    const goToAccount = () => {
        navigate('/account'); 
    };


    const goToLogin = () => {
        navigate('/Login'); 
    };

    const goToDataAnalyse =()=>{
        navigate('/Data')
    }
    return (
        <div className="sidebar">
            <ul>
            <li>
         
         <button onClick={goTomain}>Main</button>
     </li>
                <li>
         
                    <button onClick={goToAccount}>Account</button>
                </li>
                <li>
             
                    <button onClick={goToLogin}>login</button>
                </li>
                <li>
             
                    <button onClick={goToDataAnalyse}>DataAnalyse</button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
