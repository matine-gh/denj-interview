
import { call, put, takeLatest } from 'redux-saga/effects';
import {GET_BLOG_DETAIL_LOADING, getBlogDetailSuccess} from "@/app/store/getBlogDetail/action";
import axiosInterceptorInstance from "@/app/store/axios";


function* ApiCall(action: any): Generator<any> {
  try {
    const response: any = yield call(axiosInterceptorInstance.get,
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