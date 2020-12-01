import React from 'react';
import './EditProduct.scss';
import {InputAdornment, Paper} from "@material-ui/core";
import {Field, Form, Formik} from "formik";
import {appConstants} from "../../constants/constant";
import TextField from "@material-ui/core/TextField";
import {getProducts} from "../../actions/products.action";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import * as Yup from 'yup'

const EditProductSchema = Yup.object().shape({
    name: Yup.string().required('Product name is required'),
    brand: Yup.string().required('Product name is required'),
    image:Yup.string().required('Product name is required'),
    price:Yup.number().min(Number.MIN_VALUE,'Price has to be postive').required('Product name is required'),
    stock:Yup.number().min(0,'Price has to be postive').required('Product name is required')
});

class EditProduct extends React.Component {
    // implement all lifecycle hook methods

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.product===undefined && this.props.getProducts();
    }

    renderField =({field, form:{errors, touched}, ...props}) => {


        return (
          <TextField
              className="form-control"
              {...field}
              {...props}
              InputProps={{
                  startAdornment: field.name === 'price' &&
                      <InputAdornment position="start">$</InputAdornment>
              }}
              helperText={errors[field.name]}
              error={!!errors[field.name]}
          />
        );
    };

    render() {

        return (
            <Paper elevation={3} className="EditProduct">
                <h2>Edit Product {this.props.match.params.id}</h2>
                {
                    this.props.product &&
                    <Formik
                        initialValues={this.props.product}
                        validationSchema={EditProductSchema}
                    >
                        <Form className="form-group">
                            {
                                appConstants.PRODUCT_FIELD.map(field => (
                                    <Field
                                        key={field.name}
                                        name={field.name}
                                        type={field.type}
                                        label={field.label}
                                        component={this.renderField}
                                    />
                                ))
                            }
                            <Button type="submit" color="primary">Done</Button>
                        </Form>
                    </Formik>
                }

            </Paper>
        );
    }
}
function mapStateToProps({products},ownProps) {
    if (!products) {
        return {product: undefined}
    }
    const product = products.find(p => p.id === +ownProps.match.params.id);
    return {product} ? {product} : {product:null};
}

export default connect(mapStateToProps,{getProducts})(EditProduct);
