import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';


class AddSupportRequest extends Component {

  renderInput(field) {
    return (
    <div>
      <label htmlFor={field.input.name}>{field.input.name}</label>
      <input {...field.input}/>
    </div>
    )
  }

  handleFormSubmit({title, body}) {
    this.props.saveNewSupportRequest({title, body}, () => {
      this.props.history.push('/support-request');
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="title" component={this.renderInput} type="text"/>
        <Field name="body" component={this.renderInput} type="textarea"/>

        <Link to="/support-request"><div>Cancel</div></Link>
        <button action="submit">Save</button>
      </form>
    )
  }
}

AddSupportRequest = reduxForm(
  {
    form: 'addNewsletter'
  }
)(AddSupportRequest);

export default connect(null, actions)(AddSupportRequest);