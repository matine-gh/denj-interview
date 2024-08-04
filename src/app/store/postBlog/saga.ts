
import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInterceptorInstance from "@/app/store/axios";
import {POST_BLOG_LOADING, postBlogSuccess} from "@/app/store/postBlog/actions";


function* ApiCall(action: any): Generator<any> {
  try {
    const response: any = yield call(axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
        action.data,
        {headers: {authorization: `Bearer ${localStorage.getItem('auth-token')}`}}
      );
    yield put((postBlogSuccess(response.data)));
  }catch (error: any) {
    console.log('error', error)
  }
}

export default function* postBlogSaga() {
  yield takeLatest(POST_BLOG_LOADING, ApiCall);
}