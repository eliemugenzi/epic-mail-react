import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  setCurrentMessage,
  setCurrentSentMail
} from "../../redux/actions/messages.action";

class SentMailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiverNames: ""
    };
  }

  componentWillMount = () => {
    const { receiverid } = this.props.data;
    const RECEIVER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${receiverid}`;
    fetch(`https://cors-anywhere.herokuapp.com/${RECEIVER_URL}`)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            receiverNames: `${res.data[0].firstname} ${res.data[0].lastname}`
          });
        }
      });
  };

  render() {
    const { data } = this.props;
    console.log(this.state);
    return (
      <div className="mail" onClick={() => this.props.setCurrentSentMail(data)}>
        <header>
          <div className="mail__sender--pic">
            <img
              src="https://www.bing.com/th?id=OIP.bfRSHPnKwNiFfqIPCtpgkgHaHa&w=210&h=210&c=7&o=5&pid=1.7"
              alt=""
            />
          </div>
          <strong>{this.state.receiverNames}</strong>
          <span>Today</span>
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

SentMailItem.propTypes = {
  setCurrentSentMail: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { setCurrentSentMail }
)(SentMailItem);
