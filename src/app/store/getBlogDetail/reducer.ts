import { HYDRATE } from 'next-redux-wrapper';
import {GET_BLOG_DETAIL_FAILED, GET_BLOG_DETAIL_LOADING, GET_BLOG_DETAIL_SUCCESS} from "@/app/store/getBlogDetail/action";

const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  data: {},
  hasError: false
}

export default function getBlogDetailReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload};
    }
    case GET_BLOG_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case GET_BLOG_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data
      };
    case GET_BLOG_DETAIL_FAILED:
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