import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import URLShortenComponent from './URLShortenComponent';
import Account from './account/account';
import Login from './login/login';
import Data from'./data/data'
import Registry from './registry'
import {Row,Col,message}from 'antd'
import './App.css'
function App() {
  const [name,setName]=useState('')

  const init =()=>{
    let loginInfo = sessionStorage.getItem('loginInfo')
    if(loginInfo){
      loginInfo = JSON.parse(loginInfo)
      setName(loginInfo.name)
    }else{
      setName('')
    }
  }
  const loginStatus = (val)=>{
    if(val){
      sessionStorage.setItem('loginInfo',JSON.stringify(val))
    }else{
      message.success('注销成功！')
      sessionStorage.removeItem('loginInfo')
    }
    init()
  }

useEffect(()=>{
  init()
},[])
  return (
    <div>
      {name && <Row className='name-wrapper'>
        <Col span={22}></Col>
        <Col span={2} className='user-name'>{name}</Col>
      </Row>}
       <BrowserRouter>
      <Routes>
        <Route path="/" element=
          {<div className="container">
                <URLShortenComponent Login loginStatus={loginStatus} />
         </div>}/>
        <Route path="/Account" element={<Account Login loginStatus={loginStatus} />} />
        <Route path="/Login" element={<Login loginStatus={loginStatus} />} />
        <Route path="/Data" element={<Data loginStatus={loginStatus} />} />
        <Route path="/registry" element={<Registry/>} />
        

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
   

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