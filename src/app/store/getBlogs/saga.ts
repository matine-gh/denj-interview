
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import axios from "axios";
import {GET_BLOGS_LOADING, getBlogsSuccess} from "@/app/store/getBlogs/action";
import axiosInterceptorInstance from "@/app/store/axios";


function* ApiCall(action: any): Generator<any> {

    const cookies = new Cookies();
  try {
    const response: any = yield call(axiosInterceptorInstance.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
      );
    yield put((getBlogsSuccess(response.data)));
  }catch (error: any) {
    console.log('error', error)
  }
}

export default function* getBlogsSaga() {
  yield takeLatest(GET_BLOGS_LOADING, ApiCall);
}