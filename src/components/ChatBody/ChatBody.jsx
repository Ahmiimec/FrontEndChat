import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';


const ChatBody = (props) => {
    const [chat, setChat] = useState([])
    useEffect(()=>{
        let temp=[...props.chatData1]
        setChat(temp)
    },[props])
    return (
        <>

            <div className="chatBody">
                {chat &&
                    chat.map((e, index) => {

                        return (
                            <div key={index}>
                                {index % 2 === 0 &&
                                    <div className='evenRow' key={index}>
                                        <div className='userBody'><div className='userBody__userName'>@ {'1234567898765544321'}</div> <div className='userBody__dateClass'>{`« ${e.time} »`}</div></div>
                                        <div className='messageBody'>{e.message}</div>
                                    </div>
                                }
                                {index % 2 === 1 &&
                                    <div className='oddRow' key={index}>
                                        <div className='userBody'><div className='userBody__userName'>@ {e.user}</div> <div className='userBody__dateClass'>{`« ${e.time} »`}</div></div>
                                        <div className='messageBody'>{e.message}</div>
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

const mapStateToProps = (state) => ({
    chatDataBody: state.chatBodyReducers.chatBodyData,
});

const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  
  export default (connect(mapStateToProps, mapDispatchToProps)(ChatBody));
  