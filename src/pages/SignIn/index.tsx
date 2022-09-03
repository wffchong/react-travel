import { Button, Checkbox, Form, Input } from 'antd'
import UserLayout from '../../layouts/UserLayout'
import styles from './SignInPage.module.css'
import { signIn } from '../../store/modules/user'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../store/hooks/useSelector'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 }
}

const SignInPage: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { token, loading } = useSelector(state => state.user)

    const onFinish = (values: any) => {
        dispatch(signIn({ email: values.username, password: values.password }))
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    return (
        <UserLayout>
            <Form
                {...layout}
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className={styles['register-form']}
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name='remember' valuePropName='checked' {...tailLayout}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit' loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </UserLayout>
    )
}

export default SignInPage
