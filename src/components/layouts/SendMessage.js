import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { sendMessage } from "../../redux/actions/messages.action";
import Spinner from "../widgets/Spinner";
class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiverEmail: "",
      subject: "",
      message: ""
    };
  }
  static propTypes = {
    ui: PropTypes.object,
    message: PropTypes.object
  };

  componentDidMount = () => {
    const { currentDraft } = this.props.message;
    if (Object.keys(currentDraft).length) {
      const USER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${
        currentDraft.receiverid
      }`;
      fetch(`https://cors-anywhere.herokuapp.com/${USER_URL}`)
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.setState({
              receiverEmail: res.data[0].email,
              subject: currentDraft.subject,
              message: currentDraft.message
            });
          }
        });
    }
  };

  replyEmail = e => {
    e.preventDefault();
    console.log(this.state);
    const USER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/byemail`;
    fetch(`https://cors-anywhere.herokuapp.com/${USER_URL}`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        email: this.state.receiverEmail
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          this.props.sendMessage({
            receiverId: res.data[0].id,
            subject: this.state.subject,
            message: this.state.message
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!Object.keys(this.props.message.currentDraft).length) {
      return <p>No draft selected!</p>;
    }

    return (
      <div>
        <form onSubmit={this.replyEmail}>
          <h2 className="text-center">Send Message</h2>
          <div className="field">
            <label htmlFor="">To</label>
            <input
              type="email"
              onChange={e => this.setState({ receiverEmail: e.target.value })}
              value={this.state.receiverEmail}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="">Subject</label>
            <input
              type="text"
              onChange={e => this.setState({ subject: e.target.value })}
              value={this.state.subject}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="">Message</label>
            <textarea
              cols="30"
              rows="10"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
              required
            />
          </div>
          {this.props.ui.loading ? <Spinner /> : null}
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  ui: state.ui
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(SendMessage);
