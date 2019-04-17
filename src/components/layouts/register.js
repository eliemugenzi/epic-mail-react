import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createAccount } from "../../redux/actions/users.action";
import { closeSlide } from "../../redux/actions/ui.actions";

import Spinner from "../widgets/Spinner";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  componentWillMount = () => {
    this.props.closeSlide();
  };

  register = e => {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    console.log(this.props);
    this.props.createAccount({
      firstname,
      lastname,
      email,
      password
    });
  };
  render() {
    return (
      <section className="auth">
        <div className="auth__container">
          <h4 className="text-center">Create an account with Epic Mail</h4>
          <form onSubmit={this.register}>
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                value={this.state.firstname}
                onChange={e => this.setState({ firstname: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                value={this.state.lastname}
                onChange={e => this.setState({ lastname: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
            </div>
            {this.props.ui.loading ? <Spinner /> : null}
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  user: state.user
});

Register.propTypes = {
  closeSlide: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { createAccount, closeSlide }
)(Register);
