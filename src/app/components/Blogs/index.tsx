'use client'
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect, useState} from "react";
import {getBlogsLoading} from "@/app/store/getBlogs/action";
import {BlogInterface} from "@/app/interfaces/blog.interface";
import BlogCard from "@/app/components/Blogs/BlogCard";
import {useStyles} from "@/app/styles";
export default function Blogs({...props}) {
    const dispatch = useDispatch();
    const blogsStates = useSelector((state: any) => state.getBlogs)

    const [blogsList, setBlogsList] = useState<BlogInterface[]>([])


    const classes = useStyles({...props})


    const body = {
        title: 'aaa',
        body: 'mmmmmmmmmmmmmm'
    }

    useEffect(() => {
        dispatch(getBlogsLoading())
    }, []);

    useEffect(() => {
        if (blogsStates.isDone) {
            setBlogsList(blogsStates.response)
        }
    }, [blogsStates]);



    return (
        <div className={classes.blogsList}>
            {blogsList.map((blog) => {
                return (
                <Fragment key={blog.id}>
                    <BlogCard {...blog} />
                </Fragment>
            )
            })}
        </div>
    )
}