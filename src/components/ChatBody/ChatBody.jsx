import React, { useState,  } from 'react'


const ChatBody = (props) => {
    const [chat, setChat] = useState(props.chatBody)
    console.log("Chat body here" , chat)
    return (
        <>

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
        </>
    );
}

export default ChatBody;