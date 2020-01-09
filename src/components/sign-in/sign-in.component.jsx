import React from "react";
import "./sign-in-styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: " ", password: " " });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>

          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          ></FormInput>

          <label>Password</label>

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          ></FormInput>

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
