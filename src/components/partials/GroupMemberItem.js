import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GroupMemberItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = () => {
    const { memberid } = this.props.member;
    const USER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${memberid}`;
    fetch(`https://cors-anywhere.herokuapp.com/${USER_URL}`)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            user: res.data[0]
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="members__list--item">
        <div className="members__list--item-picture">
          <img
            src="https://www.bing.com/th?id=OIP.3_KW5K_GZIfWtu9Yve5ONgHaJQ&w=175&h=219&c=7&o=5&pid=1.7"
            alt=""
          />
        </div>
        <div className="members__list--item-name">
          <h4>{`${this.state.user.firstname} ${this.state.user.lastname}`}</h4>
        </div>
      </div>
    );
  }
}
