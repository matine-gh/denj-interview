'use client'
import React from "react";
import {useStyles} from "@/app/styles";

export const Button = ({children, ...props}) => {
    const classes = useStyles({...props})
    return <button className={classes.button} onClick={props.onClick}>{children}</button>
}