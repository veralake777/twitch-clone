import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        // handle error className semantic ui 
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                {/* redux-form handles onChange, value = {...}
                ...input is shorthand for ...formProps.input <-- destructuring */}
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues)
    }

    render(){
        return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            {/* name prop is required 
                component prop is the type of component the field is
                label is for <label></label> in renderInput
            */}
            <Field name="title" component={this.renderInput} label="Enter Title " />
            <Field name="description" component={this.renderInput} label="Enter Description " />
            <button className="ui button primary">Submit</button>
        </form>
        );
    }
}

/* 

*FORM VALIDATION

*because this is outside of the class this will be 
called every time the form is rendered in any way

*attached to meta in the class
meta is a formProps thing

*/
const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title.';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    // else return an empty object so redux thinks everything is ok
    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);