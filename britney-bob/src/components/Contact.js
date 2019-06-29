import React, { Component } from "react";

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
      <div
        style={{
          padding: "5px 1.5vw",
          background: "#F4EADC",
          height: "64vh"
        }}
      >
        <h2 style={{ textAlign: "center", margin: "0" }}>Contact</h2>
        <p style={{ textAlign: "center", margin: "10px 0", fontSize: "1.4rem" }}>
          Fill out the contact form below or email us at{" "}
          <strong> hey@britneybob.com</strong>
        </p>

        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
              width: "100%"
            }}
          >
            <input
              style={{
                border: ".5px solid lightgray",
                padding: "1%",
                width: "45%"
              }}
              placeholder="FIRST NAME"
              value={this.state.firstName}
              onChange={e => this.handleChange("firstName", e)}
            />
            <input
              style={{
                border: ".5px solid lightgray",
                padding: "1%",
                width: "45%"
              }}
              placeholder="LAST NAME"
              value={this.state.lastName}
              onChange={e => this.handleChange("lastName", e)}
            />
          </div>
          <input
            style={{
              border: ".5px solid lightgray",
              display: "block",
              margin: "10px auto",
              padding: "1%",
              width: "98%"
            }}
            placeholder="EMAIL"
            value={this.state.email}
            onChange={e => this.handleChange("email", e)}
          />
          <textarea
            style={{
              border: ".5px solid lightgray",
              display: "block",
              height: "20vh",
              margin: "10px 0",
              padding: "1%",
              width: "98%"
            }}
            placeholder="SAY HI :)"
            value={this.state.message}
            onChange={e => this.handleChange("message", e)}
          />
          <input
            type="submit"
            value="Submit"
            style={{
              backgroundColor: "#173C28",
              color: "white",
              height: "5vh",
              letterSpacing: ".5px",
              margin: "10px 0",
              width: "100%",
              border: "none"
            }}
          />
        </form>
      </div>
    );
  }
}

export default Contact;
