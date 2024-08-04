import {all} from 'redux-saga/effects';
import getBlogsSaga from "@/app/store/getBlogs/saga";
import getBlogDetailSaga from "@/app/store/getBlogDetail/saga";

export default function* rootSaga () {
    yield all([
        getBlogsSaga(),
        getBlogDetailSaga()
    ])
}