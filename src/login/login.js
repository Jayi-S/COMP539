import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../component/Sidebar'; 
import {Form,Input,Button,Space,message} from 'antd'
import './login.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login({loginStatus}) {
  const navigate = useNavigate();

  const handleLogin = (values) => {
//mocking
    const data={
      status:200,
      token:'adjfkljadsflkkldklfjioijd',
      name:'user',
      message:'login!'
    }
    if(data.status===200){
      loginStatus({
        name:data.name,
        token:data.token
      })
      message.success(data.message)
      navigate('/');
    }else{
      message.error(data.message)
    }
    
  };
useEffect(()=>{
  let loginInfo = sessionStorage.getItem('loginInfo')
  if(loginInfo){
    navigate('/');
  }
})
  return (
    <div className="app-container">
      <Sidebar />
      <div className="login-content">
        <Form {...layout} onFinish={(values)=>{handleLogin(values)}}>
          <Form.Item name='username' label='Username' rules={[{required:true}]}>
            <Input placeholder='enter your username' />
          </Form.Item>
          <Form.Item name='password' label='Password' rules={[{required:true}]}>
            <Input placeholder='enter your password' type='password' />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit"> Log in </Button>
              <Button htmlType="button" onClick={()=>{navigate('/registry')}}> Sign up  </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
