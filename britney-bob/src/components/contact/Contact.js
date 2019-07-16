import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldName, event) {
    let { value } = event.target;
    switch (fieldName) {
      case "firstName":
        this.setState({ firstName: value });
        break;
      case "lastName":
        this.setState({ lastName: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "message":
        this.setState({ message: value });
        break;
      default:
        return null;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // send data outside this component
    console.log(this.props)
    this.props.submitForm(this.state);
  }

  render() {
    return (
      <div className='contact-box pa4'>
        <h2 className='tc f2 fw3 pb3'>Contact</h2>
        <p className='sans-serif f4-l f5-m f6 fw3'>
          Fill out the contact form below or email us at{" "}
          <a className='fw7' href="mailto:hey@britneybob.com?Subject=Hello%20Lover" target="_top">hey@britneybob.com</a>.
        </p>
        <form className='black-80 sans-serif' onSubmit={this.handleSubmit}>
          <div className='flex justify-between w-100'>
            <input
              className='input-reset ba b--black-10 pa2 mr1 mb3 db fw3 w-50'
              placeholder="FIRST NAME"
              value={this.state.firstName}
              onChange={e => this.handleChange("firstName", e)}
            />
            <input
              className='input-reset ba b--black-10 pa2 ml1 mb3 db fw3 w-50'
              placeholder="LAST NAME"
              value={this.state.lastName}
              onChange={e => this.handleChange("lastName", e)}
            />
          </div>
          <input
            className='input-reset ba b--black-10 pa2 mb3 db fw3 w-100'
            placeholder="EMAIL"
            value={this.state.email}
            onChange={e => this.handleChange("email", e)}
          />
          <textarea
            className='input-reset ba b--black-10 pa2 mb3 db w-100 fw3'
            placeholder="SAY HI :)"
            value={this.state.message}
            onChange={e => this.handleChange("message", e)}
          />
          <input
            className='submit-button fw7 link tracked white w-100 pa3'
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
