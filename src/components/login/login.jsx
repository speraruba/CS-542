//import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    //<></> => <React.Fragment></React.Fragment>
    <>
    <h1 style={{display:"flex", "justify-content":"center"}}>Login</h1>
    <Form
      style={{"margin-top":100}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
       
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        {/* adjust input field width */}
        <Input style={{width:"12rem"}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={{width:"12rem"}}/>
      </Form.Item>

      

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Checkbox style={{"justify-content": "center","margin-left":350}}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{"justify-content": "center","margin-left":450}}>
          Login
        </Button>
        <br />
        <br />
        <div style={{"justify-content": "center","margin-left":350}}>Don't have an account? Register one!</div>
        <br />
      
        
      </Form.Item>
    </Form>
    <Link to="/register"><Button type="primary" htmlType="submit" style={{"justify-content": "center","margin-left":450}}>
          Register
        </Button></Link>
    </>
  );
};
export default Login;
//ReactDOM.render(<Demo />, document.getElementById('container'));