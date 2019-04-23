import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GroupUser extends Component {
  static propTypes = {
    prop: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      isMember: false
    };
  }

  componentWillMount = () => {
    const { groupId, user } = this.props;
    const MEMBER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${groupId}/users/${
      user.id
    }`;
    fetch(`https://cors-anywhere.herokuapp.com/${MEMBER_URL}`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            isMember: true
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { user } = this.props;
    return (
      <div className="group__users--item">
        <div className="group__users--item-picture">
          <img src="" alt="" />
        </div>
        <div className="group__users--item-name">
          <p>{`${user.firstname} ${user.lastname}`}</p>
        </div>
        {this.state.isMember ? (
          <button className="btn btn-primary">
            <i className="fa fa-minus" />
          </button>
        ) : (
          <button className="btn btn-primary">
            <i className="fa fa-plus" />
          </button>
        )}
      </div>
    );
  }
}
