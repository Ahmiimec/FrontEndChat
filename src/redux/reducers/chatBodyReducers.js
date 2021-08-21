import {
    SET_CHATBOX_DATA_REQUEST ,
    SET_CHATBOX_DATA_SUCCESS ,
    SET_CHATBOX_DATA_FAILURE
  } from '../constants/chatBodyConstants';

  const initalState = {
   chatBodyData:[],
   chatBodyDataFail:false,
   chatBodyDataLoading:false
  }

  const chatBodyReducers = (state = initalState, action) => {
    switch (action.type) {
        case SET_CHATBOX_DATA_SUCCESS:
            return { ...state, chatBodyData: [...state.chatBodyData,...action.payload] , chatBodyDataLoading:false };
        case SET_CHATBOX_DATA_REQUEST:
            return { ...state, chatBodyDataLoading: true };
        case SET_CHATBOX_DATA_FAILURE:
            return { ...state, chatBodyDataFail:true , chatBodyDataLoading:false };
        default:
            return state;
    }
  }

  export default chatBodyReducers;
