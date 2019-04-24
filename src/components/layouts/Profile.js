import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCurrentUser, logOut } from "../../redux/actions/users.action";

class Profile extends Component {
  static propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    currentUser: PropTypes.object
  };

  componentWillMount = () => {
    this.props.getCurrentUser();
  };

  logout = () => {
    this.props.logOut();
  };

  render() {
    const { currentUser } = this.props.user;
    return (
      <section className="profile">
        <div className="profile__container">
          <h4 className="text-center">Your Profile</h4>
          <div className="profile__details">
            <div className="profile__details--item">
              <h5>Names</h5>
              <span>{`${currentUser.firstname} ${currentUser.lastname}`}</span>
            </div>
            <div className="profile__details--item">
              <h5>Email</h5>
              <span>{currentUser.email}</span>
            </div>
            <div className="profile__details--item">
              <button className="btn btn-primary" onClick={this.logout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getCurrentUser, logOut }
)(Profile);
