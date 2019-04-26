import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { login } from "../../redux/actions/users.action";
import { closeSlide } from "../../redux/actions/ui.actions";
import Spinner from "../widgets/Spinner";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }

  componentWillMount = () => {
    this.props.closeSlide();
  };

  componentDidUpdate = prevProps => {
    if (this.props.user.loggedIn) {
      this.setState({
        redirect: true
      });
    }
  };

  login = e => {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/messages/inbox" />;
    }
    return (
      <section className="auth">
        <div className="auth__container">
          <h4 className="text-center">Login with Epic Mail</h4>
          <form onSubmit={this.login}>
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
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  ui: state.ui
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  closeSlide: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { login, closeSlide }
)(Login);
