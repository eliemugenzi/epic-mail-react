import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GroupMessageItem from "../partials/GroupMessageItem";
import { sendGroupMessage } from "../../redux/actions/groups.action";
import Spinner from "../widgets/Spinner";

class GroupMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupMessages: [],
      exists: false,
      group: {},
      message: "",
      subject: ""
    };
  }

  componentWillMount = () => {
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
            group: res.data[0]
          });

          const MESSAGE_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/messages`;
          fetch(`https://cors-anywhere.herokuapp.com/${MESSAGE_URL}`, {
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            })
          })
            .then(res => res.json())
            .then(res => {
              if (res.status === 200) {
                this.setState({
                  groupMessages: res.data
                });
              }
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  sendMessage = e => {
    e.preventDefault();
    this.props.sendGroupMessage(this.props.match.params.id, {
      subject: this.state.subject,
      message: this.state.message
    });
    const { id } = this.props.match.params;
    const MESSAGE_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/messages`;
    fetch(`https://cors-anywhere.herokuapp.com/${MESSAGE_URL}`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            groupMessages: res.data
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.exists) {
      return (
        <div>
          <p className="text-center">This group does not exist!</p>
        </div>
      );
    }

    return (
      <section className="groupchats">
        <h2 className="text-center">
          Group {this.state.group.name} 's messages
        </h2>
        <div className="groupchats__box">
          <div className="grouchats__list">
            {this.state.groupMessages.map(message => (
              <GroupMessageItem data={message} />
            ))}
            {this.state.groupMessages.length ? null : (
              <div>
                <p className="text-center">No group messages</p>
              </div>
            )}
          </div>
          <div className="groupchats__form">
            <form onSubmit={this.sendMessage}>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  value={this.state.subject}
                  onChange={e => this.setState({ subject: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder={`Send message to the group ${
                    this.state.group.name
                  }`}
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </div>
              {this.props.ui.loading ? <Spinner /> : null}
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  group: state.group
});
GroupMessages.propTypes = {
  sendGroupMessage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { sendGroupMessage }
)(GroupMessages);
