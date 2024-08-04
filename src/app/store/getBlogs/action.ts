export const GET_BLOGS_SUCCESS= 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_LOADING= 'GET_BLOGS_LOADING';
export const GET_BLOGS_FAILED= 'GET_BLOGS_FAILED';

export const getBlogsSuccess = (response: any) => ({
    type: GET_BLOGS_SUCCESS,
    response
})
export const getBlogsLoading = () => ({
    type: GET_BLOGS_LOADING
})
export const getBlogsFailure = (error: any) => ({
    type: GET_BLOGS_FAILED,
    error
})