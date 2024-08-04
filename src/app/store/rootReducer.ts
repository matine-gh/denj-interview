import { combineReducers } from '@reduxjs/toolkit'
import getBlogsReducer from "@/app/store/getBlogs/reducer";
import getBlogDetailReducer from "@/app/store/getBlogDetail/reducer";
import loginReducer from "@/app/store/login/reducer";
import postBlogReducer from "@/app/store/postBlog/reducer";

const rootReducer = combineReducers({
    getBlogs: getBlogsReducer,
    getBlogDetail: getBlogDetailReducer,
    login: loginReducer,
    postBlog: postBlogReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
