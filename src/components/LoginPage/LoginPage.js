import React, {useState, useEffect} from 'react'
import { Input, Row, Button, Form } from 'antd'
import "./loginPage.css"

function LoginPage() {

    const [ loginVal, setLoginVal ] = useState();

    useEffect(() => {
        console.log(loginVal)
    }, [loginVal])
    
    const confirmValues = (values) => {
        console.log(values)
        setLoginVal(values)

    }

    return (
        <wrapper className="wrapper">
            <Row 
                span={24}
                justify={'center'}>
                <Form 
                    className='form'
                    name="Form"
                    onFinish={confirmValues}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}>
                    <h1>
                        Log in to DemoSearch
                    </h1>
                    <Form.Item
                        label="User Name: "
                        name="userName"
                        placeholder='user name'
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            }]}
                        >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password: "
                        name= "password"
                        placeholder='password'
                        type="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            }]}
                        >
                        <Input.Password/>
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        Log In
                    </Button>
                </Form>
            </Row>  
        </wrapper>

  )
}

export default LoginPage