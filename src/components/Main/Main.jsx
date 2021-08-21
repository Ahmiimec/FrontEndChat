import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Tooltip
} from 'antd'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import { SendOutlined } from '@ant-design/icons'
import io from 'socket.io-client'
import moment from 'moment'
import ChatBody from '../ChatBody/ChatBody';

const socket = io.connect('http://localhost:4000')

// socket.on('message', async payload=>{
//     console.log("payload here", payload)
//     // payload.join('room1')
//    chatData=[...chatData,payload]
// })

const Main = (props) => {
    const [chat, setChat] = useState(props.chatData)
    const [form] = Form.useForm();

    useEffect(() => {
        const addMessage = (msg) => {
            const temp=[...chat,msg]
            // debugger
            // setChat(chat => [...chat, msg])
            props.setChatBodyData(temp)
        }
        socket.on('message', (addMessage))
    }, [])

    useEffect(()=>{
        // console.log('props CHAT DATA' , props.chatData)
        setChat(props.chatData)
        // debugger
    },[props])
    // useEffect(()=>{
    //     setChat(props.chatData)
    // },[props])

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleSend = (event) => {
        if(event.message)socket.emit("message", {user:"UserName","time":moment(Date()).format('ddd h:mm a'), message: event.message })
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
                {chat && <ChatBody chatData1={chat}/>}
                {/* <div className="chatBody">
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
                </div> */}
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    chatData: state.chatBodyReducers.chatBodyData,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setChatBodyData: (data) => dispatch(actions.setChatBodyData(data))
    };
  };
  
  export default (connect(mapStateToProps, mapDispatchToProps)(Main));
  