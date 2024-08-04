'use client'
import {Button} from "@/app/components/common/Button";
import { useRouter } from 'next/navigation'
import {useStyles} from "@/app/styles";

export default function Header({...props}) {
    const router = useRouter()
    const classes = useStyles({...props})
    return (
        <div className={classes.header}>
            <Button onClick={()=>router.push('/addBlog')}>+</Button>
            <Button onClick={()=>router.push('/')}>Home</Button>
        </div>
    )
}