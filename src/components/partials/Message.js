import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setCurrentMessage } from "../../redux/actions/messages.action";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderNames: "",
      receiverNames: ""
    };
  }

  componentDidMount = () => {
    console.log(this.props.data);
    const { senderid, receiverid } = this.props.data;
    const SENDER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${senderid}`;
    const RECEIVER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${receiverid}`;
    fetch(`http://cors-anywhere.herokuapp.com/${SENDER_URL}`)
      .then(res => res.json())
      .then(res => {
        const user = res.data[0];
        console.log(res.data);
        this.setState({
          senderNames: `${user.firstname} ${user.lastname}`
        });
      })
      .catch(err => console.log(err));

    fetch(`http://cors-anywhere.herokuapp.com/${RECEIVER_URL}`)
      .then(res => res.json())
      .then(res => {
        const user = res.data[0];
        console.log(res.data);
        this.setState({
          receiverNames: `${user.firstname} ${user.lastname}`
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { data } = this.props;
    const date = new Date(data.createdon);
    const newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    return (
      <div
        className="mail"
        onClick={() => {
          this.props.setCurrentMessage(data);
        }}
      >
        <header>
          <div className="mail__sender--pic">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <strong>{this.state.senderNames}</strong>
          <span>{newDate}</span>
        </header>
        <div className="mail__body">
          <h3>{data.subject}</h3>
          <p>{data.message}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

Message.propTypes = {
  setCurrentMessage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { setCurrentMessage }
)(Message);
