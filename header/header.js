import React, {useCallback, useEffect} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ProductsIcon from '@material-ui/icons/Ballot';
import NamesIcon from '@material-ui/icons/People';
import AddNameIcon from '@material-ui/icons/PersonAdd';
import ProductAddIcon from '@material-ui/icons/LibraryAdd';
import IconButton from "@material-ui/core/IconButton";
import './header.scss'
import {appConstants} from "../constants/constant";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios'

const Header = () =>{
    const user = useSelector(({user})=> user);

    const dispatch = useDispatch();
    const checkLogin =useCallback( ()=>{
        const checkLoginPromise = axios.get(`${process.env.REACT_APP_API_URL}/checklogin`,
            {withCredentials:true});

        dispatch({
            type:appConstants.CHECK_LOGIN,
            payload:checkLoginPromise
        });
    }, [dispatch]);

    // useEffect to simulate lc hook method
    // below is componentDidMount
    useEffect(()=>{
        checkLogin();
    },[dispatch,checkLogin]);

    return (
        <AppBar position="static" className="Header">
            <Toolbar>
                <Typography variant="h6" className="app-name">
                    MSI-Ecommerce
                </Typography>
                <div className="nav-actions">
                    <NavLink to={appConstants.namesRoute}>
                    <IconButton>
                        <NamesIcon className="nav-action-icon"/>
                    </IconButton>
                    </NavLink>
                    <NavLink to={appConstants.addNameRoute}>
                    <IconButton>
                        <AddNameIcon className="nav-action-icon"/>
                    </IconButton>
                    </NavLink>
                    <NavLink to={appConstants.productRoute}>
                    <IconButton>
                        <ProductsIcon className="nav-action-icon"/>
                    </IconButton>
                    </NavLink>
                    <NavLink to={appConstants.addProductRoute}>
                        <IconButton>
                            <ProductAddIcon className="nav-action-icon"/>
                        </IconButton>
                    </NavLink>
                    <NavLink to={appConstants.loginRoute} style={{textDecoration: 'none'}}>
                        {!user ?
                            <Button className="auth-actionS">Login</Button> :
                            <Button className="auth-actionS">Logout</Button>
                        }
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
