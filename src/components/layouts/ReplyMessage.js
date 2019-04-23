import React, { Component } from "react";
import { connect } from "react-redux";

export default class ReplyMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiverEmail: "",
      subject: "",
      message: ""
    };
  }

  replyEmail = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
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
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    );
  }
}
