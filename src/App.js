import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import URLShortenComponent from './URLShortenComponent';
import Account from './account/account';
import Login from './login/login';
import Data from'./data/data'

function App() {


  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element=
          {<div className="container">
                <URLShortenComponent />
         </div>}/>
        <Route path="/Account" element={<Account />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Data" element={<Data/>} />
     
        

        {/* </Route> */}
      </Routes>
    </BrowserRouter>

  );

}

export default App;




  //       return (
  //           <div className = "container">
  //               <URLShortenComponent />
  //           </div>
        
  //       );
  //   }
  // export default App; 