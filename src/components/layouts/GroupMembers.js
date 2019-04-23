import React, { Component } from "react";
import { connect } from "react-redux";

import GroupmemberItem from "../partials/GroupMemberItem";
import GroupUser from "../partials/GroupUser";
import GroupMemberItem from "../partials/GroupMemberItem";

export default class GroupMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exists: false,
      groupData: {},
      groupMembers: [],
      users: [],
      loaded: false
    };
  }
  componentWillMount = () => {
    const USERS_URL = "http://elie-epic-mail.herokuapp.com/api/v2/users";
    fetch(`https://cors-anywhere.herokuapp.cpm/${USERS_URL}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.data
        });
      });

    const { id } = this.props.match.params;
    const GROUP_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}`;
    fetch(`https://cors-anywhere.herokuapp.com/${GROUP_URL}`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            exists: true,
            groupData: res.data[0]
          });

          const MEMBER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/users`;
          fetch(`https://cors-anywhere.herokuapp.com/${MEMBER_URL}`, {
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            })
          })
            .then(res => res.json())
            .then(res => {
              this.setState({
                groupMembers: res.data,
                loaded: true
              });
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    if (!this.state.exists) {
      return (
        <div>
          <p className="text-center">Group Not found!</p>
        </div>
      );
    }
    return (
      <section className="members">
        <div className="members__all">
          <h4 className="text-center">All users</h4>
          {this.state.users.map(user => (
            <GroupUser user={user} groupId={this.props.match.params.id} />
          ))}
        </div>
        <div className="members__group">
          <h2 className="text-center">
            Members of this group <strong>{this.state.groupData.name}</strong>
          </h2>
          <div className="members__list">
            {!this.state.groupMembers.length && this.state.loaded ? (
              <div>
                <p className="text-center">No Group members yet!</p>
              </div>
            ) : null}
            {this.state.groupMembers.map(member => (
              <GroupMemberItem member={member} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
