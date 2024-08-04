import { HYDRATE } from 'next-redux-wrapper';
import {POST_BLOG_FAILURE, POST_BLOG_LOADING, POST_BLOG_SUCCESS} from "@/app/store/postBlog/actions";

const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  data: {},
  hasError: false
}

export default function postBlogReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE: {
      return {...state, ...action.payload};
    }
    case POST_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      };
    case POST_BLOG_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
        data: action.data
      };
    case POST_BLOG_FAILURE:
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