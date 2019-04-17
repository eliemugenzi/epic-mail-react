import React, { Component } from "react";
import MessageList from "./MessageList";
import SingleMessage from "./SingleMessage";

export default class Inbox extends Component {
  render() {
    return (
      <section className="inbox">
        <MessageList />
        <SingleMessage />
      </section>
    );
  }
}
