import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";

import { loggedIn, logOut } from "../../redux/actions/users.action";

class AuthCheck extends Component {
  static propTypes = {
    loggedIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
  };

  componentWillMount = () => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      const MESSAGE_URL = "http://elie-epic-mail.herokuapp.com/api/v2/messages";
      axios
        .get(`http://cors-anywhere.herokuapp.com/${MESSAGE_URL}`, {
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
          })
        })
        .then(response => {
          this.props.loggedIn();
        })
        .catch(err => {
          this.props.logOut();
        });
    } else {
      this.props.logOut();
    }
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
  { loggedIn, logOut }
)(AuthCheck);
