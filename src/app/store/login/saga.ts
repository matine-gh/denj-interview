import { takeLatest, put, call } from 'redux-saga/effects';
import {
  LOGIN_LOADING,
  loginSuccess,
  loginFailure,
} from './actions';
import { SagaInputActionInterface } from '@/app/store/_interfaces/sagaInputAction.interface';
import axiosInterceptorInstance from "@/app/store/axios";

function* ApiCall(action: SagaInputActionInterface): Generator<any> {
  const dataForm = action.data;
  try {
    const response: any = yield call(
        axiosInterceptorInstance.post,
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/token`,
      dataForm,
      {
        timeout: Number(process.env.API_TIME_OUT),
      },
    );

    yield put(loginSuccess(response?.data?.message));
  } catch (error: any) {
    console.log('err: ', error);
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_LOADING, ApiCall);
}