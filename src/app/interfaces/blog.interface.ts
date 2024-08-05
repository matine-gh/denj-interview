import {DefaultTheme} from "react-jss";


export interface BlogInterface {
    userId: number,
    id: number,
    title: string,
    body: string,
    theme?: DefaultTheme
}