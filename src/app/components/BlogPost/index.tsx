'use client'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBlogDetailLoading} from "@/app/store/getBlogDetail/action";
import {BlogInterface} from "@/app/interfaces/blog.interface";

export default function BlogPost({ params }: { params: { id: number } }) {
    console.log('0000000',params.id)


    const dispatch = useDispatch();
    const selectedBlog = useSelector((state: any) => state.getBlogDetail)
    const [blogData, setBlogData] = useState<BlogInterface>(null)

    useEffect(() => {
        dispatch(getBlogDetailLoading(params.id))
    }, []);

    useEffect(() => {
        console.log('states', selectedBlog)
        if (selectedBlog.isDone) {
            setBlogData(selectedBlog.response)
        }
        // console.log('blogsList', blogsList)
    }, [selectedBlog]);


    return (
        <>
            {blogData &&
                <div>
                    <h1>title: {blogData.title}</h1>
                    <p>id: {blogData.id}</p>
                    <p>body: {blogData.body}</p>
                </div>
            }
        </>
    )
}