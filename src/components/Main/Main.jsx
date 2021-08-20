import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Tooltip
} from 'antd'
import { SendOutlined } from '@ant-design/icons'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

// socket.on('message', async payload=>{
//     console.log("payload here", payload)
//     // payload.join('room1')
//    chatData=[...chatData,payload]
// })

const Main = () => {
    const [chat, setChat] = useState([])
    const [form] = Form.useForm();

    useEffect(() => {
        const addMessage = (msg) => setChat(chat => [...chat, msg])
        socket.on('message', addMessage)
    }, [])

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleSend = (event) => {
        if(event.message)socket.emit("message", { message: event.message })
        form.resetFields()
    }
    return (
        <>
            <div >
                <Form
                    form={form}
                    onFinish={handleSend}
                    onFinishFailed={onFinishFailed}
                >
                    <div className="sendBody">
                        <Form.Item
                            label="Message"
                            name="message"
                        >
                            <Input autoFocus/>
                        </Form.Item>
                        <Form.Item>
                            <Tooltip title="Send">
                                <Button htmlType="submit" type="primary" shape="circle" icon={<SendOutlined />} />
                            </Tooltip>
                        </Form.Item>
                    </div>
                </Form>
                <div className="chatBody">
                    {chat &&
                        chat.map((e, index) => {
                           
                                return (
                                    <div>
                                        {index % 2 === 0 &&
                                            <div className='evenRow' key={index}>
                                                {e.message}
                                            </div>
                                        }
                                        {index % 2 === 1 &&
                                            <div className='oddRow' key={index}>
                                                {e.message}
                                            </div>
                                        }

                                    </div>
                                )
                            
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Main;