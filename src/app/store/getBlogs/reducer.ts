import { HYDRATE } from 'next-redux-wrapper';
import {GET_BLOGS_FAILED, GET_BLOGS_LOADING, GET_BLOGS_SUCCESS} from "@/app/store/getBlogs/action";

const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  data: {},
  hasError: false
}

export default function getBlogsReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload};
    }
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case GET_BLOGS_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data
      };
    case GET_BLOGS_FAILED:
      return {
        ...state,
        isLoading: false,
        isDone: false,
        hasError: true,
      };
    default:
      return state;
  }
}