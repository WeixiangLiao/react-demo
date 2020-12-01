import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {appConstants} from "../constants/constant";

export const authGuard = (OldComponent) =>{
    return (props) => {
        const user = useSelector(({user}) => user);

        useEffect(()=>{
            !user &&  props.history.push(appConstants.loginRoute);

        },[props.history,props,user])

        return user ? <OldComponent {...props}/> :
            <span>Redirecting</span>;
    }

  //  return HOCComponent;
};
