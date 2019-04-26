import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCurrentUser, logOut } from "../../redux/actions/users.action";

class Profile extends Component {
  static propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    currentUser: PropTypes.object
  };

  componentDidMount = () => {
    this.props.logOut();
    window.location = "/";
  };

  logout = () => {
    this.props.logOut();
    window.location = "/";
  };

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getCurrentUser, logOut }
)(Profile);
