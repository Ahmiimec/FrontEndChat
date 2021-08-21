import Axios from 'axios';
import {
    SET_CHATBOX_DATA_REQUEST ,
    SET_CHATBOX_DATA_SUCCESS ,
    SET_CHATBOX_DATA_FAILURE
} from '../constants/chatBodyConstants';
import * as actions from './index';


export const setChatBodyDataSuccess = (data) => {
    return {
        type: SET_CHATBOX_DATA_SUCCESS,
        payload: data
    }
}

export const setChatBodyData = (data) => async (dispatch) => {
    dispatch({
      type: SET_CHATBOX_DATA_REQUEST ,
    });
    try { 
      dispatch(setChatBodyDataSuccess(data));
    } catch (error) {
        dispatch({ type: SET_CHATBOX_DATA_FAILURE , payload: data });
    }
  };