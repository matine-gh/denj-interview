"use client"
import React, {ReactNode} from 'react';
import { Provider } from "react-redux";
import store from '@/app/store/store'

type Props = {
    children: ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ children}) =>{
    return <Provider store={store}>{children}</Provider>;
};
 export default ReduxProvider;