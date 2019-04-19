import React, { Component } from "react";
import { connect } from "react-redux";

import GroupmemberItem from "../partials/GroupMemberItem";

export default class GroupMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exists: false,
      groupData: {},
      groupMembers:[]
    };
  }
  componentWillMount = () => {
    const { id } = this.props.match.params;
    const GROUP_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}`;
    fetch(`http://cors-anywhere.herokuapp.com/${GROUP_URL}`, {
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
        <form action="">
          <div className="field">
            <label htmlFor="">Search for a contact to add</label>
            <input type="search" name="q" id="q" />
          </div>
          <div className="members__result">
            <div className="members__result--item">
              <div className="members__result--item-picture">
                <img
                  src="https://www.bing.com/th?id=OIP.E06jGgBh0Dxx_uIsfGyscAHaHa&w=212&h=212&c=7&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <div className="members__reult--item-name">
                <h4>Ineza Alphonsine</h4>
              </div>
              <div className="members__result--item-action">
                <a href="" className="btn btn-secondary" id="watafakamwa">
                  <i className="fa fa-plus" /> &nbsp; Add
                </a>
              </div>
            </div>
            <div className="members__result--item">
              <div className="members__result--item-picture">
                <img
                  src="https://www.bing.com/th?id=OIP.E06jGgBh0Dxx_uIsfGyscAHaHa&w=212&h=212&c=7&o=5&pid=1.7"
                  alt=""
                />
              </div>
              <div className="members__reult--item-name">
                <h4>Ineza Alphonsine</h4>
              </div>
              <div className="members__result--item-action">
                <a href="" className="btn btn-secondary">
                  <i className="fa fa-plus" /> &nbsp; Add
                </a>
              </div>
            </div>
          </div>
        </form>
        <h2 className="text-center">
          Members of this group <strong>{this.state.groupData.name}</strong>
        </h2>
        <div className="members__list">
          <GroupmemberItem />
          <GroupmemberItem />
          <GroupmemberItem />
          <GroupmemberItem />
        </div>
      </section>
    );
  }
}
