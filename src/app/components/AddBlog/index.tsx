'use client'
import {useEffect, useState} from "react";
import {Button} from "@/app/components/common/Button";
import {useDispatch, useSelector} from "react-redux";
import {postBlogFailure, postBlogLoading} from "@/app/store/postBlog/actions";
import {useRouter} from "next/navigation";
import {useStyles} from "@/app/styles";

export default function AddBlog({...props}) {

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('')
    const dispatch = useDispatch();
    const router = useRouter()
    const postBlogStates = useSelector((state: any) => state.postBlog)
    const classes = useStyles({...props})

    useEffect(() => {
        console.log('postBlogStates',postBlogStates)
        if (postBlogStates.isDone) {
            alert('new blog added successfully');
            router.push('/')
            router.refresh()
            dispatch(postBlogFailure())

        }
    }, [postBlogStates.isDone]);


    const sendData = () => {
        dispatch(postBlogLoading({title: title, body: body}))
    }


    return(
        <div className={classes.blogPage}>
            <label className={classes.label}>title</label>
            <input value={title} className={classes.input}
                   onChange={(event)=>setTitle(event.target.value)}/>
            <label className={classes.label}>body</label>
            <textarea id="w3review"
                      className={classes.input}
                      value={body}
                      rows="20"
                      cols="100"
                      onChange={(event)=>setBody(event.target.value)}/>
            <Button onClick={sendData}>Send</Button>
        </div>
    )
}