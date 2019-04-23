import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/actions/users.action";

import Spinner from "../widgets/Spinner";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect:false
    };
  }

  componentDidMount = () => {
    if (this.props.user.loggedIn) {
      this.setState({ redirect: true });
    }
  }

  componentDidUpdate=prevProps=>{
    if (this.props.user.loggedIn) {
      this.setState({ redirect: true });  
    }
  }

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
      <section className="showcase">
        <div className="showcase__container">
          <div className="showcase__intro">
            <h3>This is Epic Mail</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              illum velit laboriosam repellat placeat temporibus accusantium
              veniam, quod omnis pariatur?
            </p>
          </div>

          <div className="showcase__form">
            <form onSubmit={this.login}>
              <div className="field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
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
                {this.props.ui.loading ? <Spinner /> : null}
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

Index.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  ui: state.ui
});

export default connect(
  mapStateToProps,
  { login }
)(Index);
