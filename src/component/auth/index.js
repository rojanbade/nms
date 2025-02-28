import React from "react";
import Login from "../login";
import SignUp from "../sign-up";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  handleClick = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  render() {
    return (
      <>
        {this.state.isLogin ? <Login /> : <SignUp />}

        {this.state.isLogin ? (
          <p>
            Dont have and account?{" "}
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={this.handleClick}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p>
            Already have account?{" "}
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={this.handleClick}
            >
              Login
            </span>
          </p>
        )}
      </>
    );
  }
}

export default Auth;
