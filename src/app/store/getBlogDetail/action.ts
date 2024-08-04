export const GET_BLOG_DETAIL_SUCCESS= 'GET_BLOG_DETAIL_SUCCESS';
export const GET_BLOG_DETAIL_LOADING= 'GET_BLOG_DETAIL_LOADING';
export const GET_BLOG_DETAIL_FAILED= 'GET_BLOG_DETAIL_FAILED';

export const getBlogDetailSuccess = (response: any) => ({
    type: GET_BLOG_DETAIL_SUCCESS,
    response
})
export const getBlogDetailLoading = (id: number) => ({
    type: GET_BLOG_DETAIL_LOADING,
    id
})
export const getBlogDetailFailure = (error: any) => ({
    type: GET_BLOG_DETAIL_FAILED,
    error
})