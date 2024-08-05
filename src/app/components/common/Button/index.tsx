'use client'
import {useStyles} from "@/app/styles";


export const Button = ({children, ...props}: any) => {
    const classes = useStyles({...props})
    return <button className={classes.button} onClick={props.onClick}>{children}</button>
}