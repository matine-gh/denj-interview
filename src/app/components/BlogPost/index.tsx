'use client'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBlogDetailLoading} from "@/app/store/getBlogDetail/action";
import {BlogInterface} from "@/app/interfaces/blog.interface";
import {useStyles} from "@/app/styles";

export default function BlogPost({ params ,...props}: { params: { id: number } }) {

    const dispatch = useDispatch();
    const selectedBlog = useSelector((state: any) => state.getBlogDetail)
    const [blogData, setBlogData] = useState<BlogInterface>(null)

    const classes = useStyles({...props})

    useEffect(() => {
        dispatch(getBlogDetailLoading(params.id))
    }, []);

    useEffect(() => {
        if (selectedBlog.isDone) {
            setBlogData(selectedBlog.response)
        }
    }, [selectedBlog]);


    return (
        <>
            {blogData &&
                <div className={classes.blogPage}>
                    <h1>{blogData.title}</h1>
                    <p>{blogData.body}</p>
                </div>
            }
        </>
    )
}