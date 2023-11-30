import {Form,Button,Input,message,Space} from 'antd'
import { useNavigate } from 'react-router-dom';
import './index.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const Registry =()=>{
  const navigate = useNavigate();
  const registry = (value)=>{
    const {password,passwordConfirm} =value
    if(password!==passwordConfirm){
      return message.error('confirm password ')
    }
   
    let data={
      status:200,
      message:'registar suc'
    }
    if(data.status===200){
      message.success(data.message)
      navigate('/login')
    }else{
      message.success(data.message)
    }
  }
  return (<div className="login-content">
     <Form {...layout} onFinish={(values)=>{registry(values)}}>
          <Form.Item name='username' label='Username' rules={[{required:true}]}>
            <Input placeholder='enter your username' />
          </Form.Item>
          <Form.Item name='password' label='Password' rules={[{required:true}]}>
            <Input type='password' placeholder='enter your password ' />
          </Form.Item>
          <Form.Item name='passwordConfirm' label='Password Confirm' rules={[{required:true}]}>
            <Input type='password' placeholder='enter your password again' />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit"> Submit </Button>
              <Button htmlType="button" onClick={()=>{navigate('/login')}}> Login  </Button>
            </Space>
          </Form.Item>
        </Form>
  </div>)
}

export default Registry