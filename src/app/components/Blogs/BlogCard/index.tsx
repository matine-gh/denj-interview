import {BlogInterface} from "@/app/interfaces/blog.interface";
import {useStyles} from "@/app/styles";

export default function BlogCard({...blog}: BlogInterface) {
    const classes = useStyles({...blog})
    return (
        <div className={classes.blogCard}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <a href={'/ddd'}>Read more</a>
        </div>
    )
}