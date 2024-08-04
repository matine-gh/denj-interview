import {BlogInterface} from "@/app/interfaces/blog.interface";

export const POST_BLOG_SUCCESS = 'POST_BLOG_SUCCESS';
export const POST_BLOG_FAILURE = 'POST_BLOG_FAILURE';
export const POST_BLOG_LOADING = 'POST_BLOG_LOADING';

export const postBlogSuccess = (response: any) => ({
  type: POST_BLOG_SUCCESS,
  response
});
export const postBlogFailure = () => ({
  type: POST_BLOG_FAILURE
});
export const postBlogLoading = (data: Pick<BlogInterface, 'title' | 'body'>) => ({
  type: POST_BLOG_LOADING,
  data
});