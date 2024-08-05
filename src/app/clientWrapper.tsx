'use client'
import React, {ReactNode, useEffect, useState} from "react";
import Header from "@/app/components/common/Header";
import {myTheme} from "@/app/theme";
import {ThemeProvider} from "react-jss";

export default function ClientWrapper({children}: { children: ReactNode }) {
    const [load, setLoad] = useState<boolean>(false);
    useEffect(() => {
        setLoad(true)
    }, [])
    return (
        <ThemeProvider theme={myTheme}>{
            load &&
            <div>
                <Header/>
                {children}
            </div>
        }</ThemeProvider>
    )
}