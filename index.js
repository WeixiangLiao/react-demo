import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {Route, Switch} from "react-router";
import {appConstants} from "./constants/constant";
import AddName from "./names/add-name/AddName";
import Products from "./products/products";
import {BrowserRouter} from "react-router-dom";
import Names from "./names/Names";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/root.reducer";
import reduxPromise from 'redux-promise';
import AddProduct from "./products/add-product/AddProduct";
import EditProduct from "./products/edit-product/EditProduct";
import Login from "./login/login";
import {authGuard} from "./login/auth.hoc";

const root = document.querySelector('#root');


    const names= ['alice','bob','charlie'];
/* child to parent communication
1, in parent create a funcion and pass the referance to child to attribute
* */


const addName = (newName) => {
    names.push(newName);
}

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
        <App>
            <Switch>
                <Route path={appConstants.namesRoute}>
                    <Names/>
                </Route>
                <Route path={appConstants.addNameRoute} component={()=><AddName addName={addName}/>}/>
                {
                    //{()=><Products products = {products}/>}
                }
                <Route path={appConstants.productRoute} component={()=><Products/>}/>
                <Route path={appConstants.addProductRoute} component={authGuard(AddProduct)}/>
                <Route path={`${appConstants.editProductRoute}/:id`} component={EditProduct}/>
                <Route path={appConstants.loginRoute} component={()=><Login/>}/>
            </Switch>
        </App>
    </BrowserRouter>
    </Provider>,
    root
)

/*
//h2 hello world
const root = document.querySelector('#root');
const text = document.createTextNode('Hello World');
const h2 = document.createElement('h2');
h2.appendChild(text);

root.appendChild(h2);

const Rh2 =React.createElement('h2',null,'Hello React');
ReactDOM.render(Rh2,root);

// JSX syntax: Javascript XML (allow us to write HTML like
// syntax in js)
const myStyle = {color:'red'}
const name ='alice'

// same as const Rh2 = React.createElement('h2',null,'Hello React');
const h2ReactElement = <h2 style={myStyle}>Hello React Again {name}</h2>;
    ReactDOM.render(h2ReactElement,root);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
