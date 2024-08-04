import {all} from 'redux-saga/effects';
import getBlogsSaga from "@/app/store/getBlogs/saga";
import getBlogDetailSaga from "@/app/store/getBlogDetail/saga";
import postBlogSaga from "@/app/store/postBlog/saga";
import loginSaga from "@/app/store/login/saga";

export default function* rootSaga () {
    yield all([
        getBlogsSaga(),
        getBlogDetailSaga(),
        loginSaga(),
        postBlogSaga()
    ])
}