import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ContactItem from "../partials/ContactItem";
import { getUsers } from "../../redux/actions/users.action";

class Contacts extends Component {
  componentDidMount = () => {
    this.props.getUsers();
  };
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };
  render() {
    const { users } = this.props.user;
    return (
      <section className="contacts">
        <h2 className="text-center">Available Contacts</h2>
        <div className="contacts__list">
          {users.length ? (
            <div>
              {users.map(user => (
                <ContactItem data={user} key={user.id} />
              ))}
            </div>
          ) : (
            <div>
              <p className="text-center">No Contacts</p>
            </div>
          )}
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
  { getUsers }
)(Contacts);
