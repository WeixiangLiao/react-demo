import React from 'react';
import Name from "./name/Name";
import './Names.scss'
import {connect} from "react-redux";

/*
* before react 16.8, class component is also called container or smart component,
* it has state and can implement life cycle hook methods.
*
*  before react 16.8, a function component is also called presentational component
* or dumb component. it doesn't have state amd cannot access life cycle
* hook methods
*
* after 16.8 react hooks(totally differnt from lc hook) are introducd, a new way to write
* react application, it allows functional component to use state and lc hook method. React
* official teams recommend developer to use functional components over class components

* */

const Names = (props) =>{
    return (
        // parent to child commu
        <div className="Names">
          {/*  <Name name="alice"/>
            <Name name="Bob">16
                </Name>*/}
            {props.names.map(n => (
                    <Name name={n} key={n}>
                        {
                            Math.round(120 * Math.random())
                        }
                    </Name>
                ))
            }
        </div>
    );
}

function mapStateToProps(reduxState) {

    // return object will be merged with component props
    return {
        names: reduxState.names
    };
}

export default connect(mapStateToProps) (Names);
