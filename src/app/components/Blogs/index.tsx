'use client'
import {Button} from "@/app/components/common/Button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBlogsLoading} from "@/app/store/getBlogs/action";
import {getBlogDetailLoading} from "@/app/store/getBlogDetail/action";
export default function Blogs() {
    const dispatch = useDispatch();
    const blogsStates = useSelector((state: any) => state.getBlogs)
    const selectedBlog = useSelector((state: any) => state.getBlogDetail)

    useEffect(() => {
        // dispatch(getBlogsLoading())
        dispatch(getBlogDetailLoading(3))
    }, []);

    // useEffect(() => {
    //     console.log('states', blogsStates)
    // }, [blogsStates]);


    useEffect(() => {
        console.log('selectedBlog', selectedBlog)
    }, [selectedBlog]);



    return (
        <div>
            Blogs
            {/*<Button>my button</Button>*/}
        </div>
    )
}