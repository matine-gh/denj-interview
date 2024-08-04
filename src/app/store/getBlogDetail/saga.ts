
import { call, put, takeLatest } from 'redux-saga/effects';
import {Cookies} from 'react-cookie';
import axios from "axios";
import {GET_BLOG_DETAIL_LOADING, getBlogDetailSuccess} from "@/app/store/getBlogDetail/action";


function* ApiCall(action: any): Generator<any> {
  try {
    const response: any = yield call(axios.get,
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${action.id}`,
      );
    yield put((getBlogDetailSuccess(response.data)));
  }catch (error: any) {
    console.log('error', error)
  }
}

export default function* getBlogDetailSaga() {
  yield takeLatest(GET_BLOG_DETAIL_LOADING, ApiCall);
}