import React, { Component } from "react";

export default class GroupMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupMember: {},
      group: {},
      groupExists: false,
      memberExists: false
    };
  }
  componentWillMount = () => {
    const { groupId, memberId } = this.props.match.params;
    const GROUP_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${groupId}`;

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
            group: res.data[0],
            groupExists: true
          });
          const MEMBER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${groupId}/users/${memberId}`;
          fetch(`https://cors-anywhere.herokuapp.com/${MEMBER_URL}`, {
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            })
          })
            .then(res => res.json())
            .then(res => {
              if (res.status === 200) {
                this.setState({ memberExists: true, groupMember: res.data[0] });
              }
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    if (!this.state.groupExists) {
      return (
        <div>
          <p className="text-center">Group does not exist</p>
        </div>
      );
    }
    if (!this.state.memberExists) {
      return (
        <div>
          <p className="text-center">Group member does not exist</p>
        </div>
      );
    }
    return (
      <section className="contact">
        <div className="contact__container">
          <div className="contact__info">
            <div className="contact__details">
              <img
                src="https://www.bing.com/th?id=OIP.E06jGgBh0Dxx_uIsfGyscAHaHa&w=212&h=212&c=7&o=5&pid=1.7"
                alt=""
              />
              <h3>
                <strong>Names:</strong> Ineza Alphonsine
              </h3>
              <h4>
                <strong>Email:</strong> ineeza@epicmail.com
              </h4>
              <a href="" className="btn btn-secondary">
                Remove
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
