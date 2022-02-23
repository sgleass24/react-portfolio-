import React from "react";



class ContactForm extends React.Component{
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        date: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "password") {
            value = value.substring(0, 15);
        }

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Fill out your first and last name please!");

        } else if (this.state.password.length < 6) {
            alert(`choose a more secure password ${this.state.firstName} ${this.state.lastName}`);
        } else if (!this.state.date) {
            alert(`Please enter your Date of Birth`)
        } else if (!this.state.email) {
            alert(`Please Enter Email`)
        } else {
            alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        }

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        this.setState({
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            date: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p>
                    {this.state.firstName} {this.state.lastName}
                </p>
                <form className="form">
                    <input className="imput-container"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <br></br><br></br>
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <br></br><br></br>
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="Needs to be 6 Characters"
                    />
                    <br></br><br></br>
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                      <br></br><br></br>
                    <input
                        value={this.state.date}
                        name="date"
                        onChange={this.handleInputChange}
                        type="date"
                    />
                    <br></br><br></br>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
}

export default ContactForm;
