import { combineReducers } from '@reduxjs/toolkit'
import getBlogsReducer from "@/app/store/getBlogs/reducer";
import getBlogDetailReducer from "@/app/store/getBlogDetail/reducer";

const rootReducer = combineReducers({
    getBlogs: getBlogsReducer,
    getBlogDetail: getBlogDetailReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
