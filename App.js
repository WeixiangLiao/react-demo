import React from 'react';
import Name from "./names/name/Name";
import Names from "./names/Names";
import AddName from "./names/add-name/AddName";
import Products from "./products/products";
import Header from "./header/header";
import "./app.scss"

/*
* before react 16.8, class component is also called container or smart component,
* it has state and can implement life cycle hook methods.
*
* after 16.8 , class components are being replaced by functional components because the component
* creation process of functional components is more efficeint
*
* */
class App extends React.Component {
    //Each class component will have a state object(no longer true for new react versoin)
    // we can call setState to rerender the view

    state ={
        names: ['alice','bob','charlie']
    };
    /* child to parent communication
    1, in parent create a funcion and pass the referance to child to attribute
    * */

    products = [
        { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
        { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg'},
        { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg'},
        { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'},
        { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg'},
        { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg'},
        { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png'},
        { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg'},
        { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg'}
    ];

    addName = (newName) => {
        //this.names.push(newName);
        //this.forceUpdate();
        const newState = {...this.state};
        newState.names.push(newName);
        this.setState(newState);

        //const newNames = [...this.state.name];
        //newNames.push(newName);

    }

    render() {

        // for return jsx, we should follow
        // 1, one root element only
        // 2, if a returned JSX in multiple line, use() to
        // enclose it
        // the first opening ( has to in smae line with return

        return (
            // syntax sugar for <React.Fragmaent>, create to temp
            // wrapper, which will not be rendered in DOM. see <ng-container> in ANgular
            <>
            <Header/>
            <main className="app-content">
                {this.props.children}
            </main>
            </>
        );
    }
}
export default App;
