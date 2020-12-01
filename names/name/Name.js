import React from 'react';
import './Name.scss'

const Name = (props) => {
    // props is readonly
    // parent to child
    // in child recive data through props
    // props.children is similar to ng-content in angular
    return <p className="Name">{props.name} age is {props.children}</p>;
}

export default Name;
