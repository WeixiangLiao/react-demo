import React, {Component} from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addName} from "../../actions/names.action";

class AddName extends Component {

    constructor(props) {
        super(props);
        //
        this.state ={
            newName:''
        };
    }


    updateName = (event) => {
        this.setState({
            newName : event.target.value
        });

    };

    addNameHandler = () => {
      this.props.addName(this.state.newName);

    };
    render() {
        return (
          <section className="AddName">
              <Input type="text" value={this.state.newName} onChange={this.updateName}/>
              {
                  /*
                  *  child to parent comm
                  * in child, call the function passed from thr parent and
                  * pass data through argument
                  * */
              }
              <Button
                  variant="contained"
                  color="primary"
                  onClick={
                      this.addNameHandler
                  }
              >Add Name</Button>
          </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // syntax sugar if keya and value are same
        addName
    }, dispatch);
}

export default connect(null,mapDispatchToProps)(AddName);
