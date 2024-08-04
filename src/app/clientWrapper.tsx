'use client'
import React, {ReactNode, useEffect, useState} from "react";
import Header from "@/app/components/common/Header";

export default function ClientWrapper({children}: { children: ReactNode }) {
    const [load, setLoad] = useState<boolean>(false);
    useEffect(() => {
        setLoad(true)
    }, [])
    return (
        <>{
            load &&
            <div>
                <Header/>
                {children}
            </div>
        }</>
    )
}