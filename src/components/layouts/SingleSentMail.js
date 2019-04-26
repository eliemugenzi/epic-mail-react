import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deleteMessage } from "../../redux/actions/messages.action";
class SingleSentMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderNames: "",
      senderEmail: "",
      receiverNames: "",
      receiverEmail: ""
    };
  }

  componentDidUpdate = prevProps => {
    const { currentSentMail } = this.props.message;
    const SENDER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${
      currentSentMail.senderid
    }`;
    const RECEIVER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${
      currentSentMail.receiverid
    }`;

    fetch(`https://cors-anywhere.herokuapp.com/${SENDER_URL}`)
      .then(res => res.json())
      .then(res => {
        const user = res.data[0];
        this.setState({
          senderNames: `${user.firstname} ${user.lastname}`,
          senderEmail: user.email
        });
      })
      .catch(err => console.log(err));

    fetch(`https://cors-anywhere.herokuapp.com/${RECEIVER_URL}`)
      .then(res => res.json())
      .then(res => {
        const user = res.data[0];
        this.setState({
          receiverNames: `${user.firstname} ${user.lastname}`,
          receiverEmail: user.email
        });
      });
  };

  deleteMessage = e => {
    e.preventDefault();
    const { id } = this.props.message.currentSentMail;
    this.props.deleteMessage(id);
  };

  render() {
    const { currentSentMail } = this.props.message;
    if (!Object.keys(currentSentMail).length) {
      return (
        <div>
          <p className="text-center">No Message selected</p>
        </div>
      );
    }
    return (
      <div className="inbox__mail--item">
        <header>
          <div className="sender__address">
            <div className="sender__pic">
              <img
                src="https://www.bing.com/th?id=OIP.1yoSL-WO0YU5mQKROudvswHaHa&w=203&h=203&c=7&o=5&pid=1.7"
                alt=""
              />
            </div>
            <div className="sender__details">
              <h6>
                From:<strong>{this.state.senderNames}</strong>
                {"<"}
                {this.state.senderEmail}
                {">"}
              </h6>
              <h6>
                To:<strong>{this.state.receiverNames}</strong>
                {"<"}
                {this.state.receiverEmail}
                {">"}
              </h6>
            </div>
          </div>
          <div className="receiver__actions">
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-reply" />
            </a>
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-step-backward" />
            </a>
            <a
              href="/#"
              className="btn__small btn-white"
              onClick={this.deleteMessage}
            >
              <i className="fa fa-trash" />
            </a>
          </div>
        </header>
        <div className="inbox__mail--body">
          <h3>{currentSentMail.subject}</h3>
          <p>{currentSentMail.message}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});
SingleSentMail.propTypes = {
  message: PropTypes.object.isRequired,
  deleteMessage: PropTypes.func
};

export default connect(
  mapStateToProps,
  { deleteMessage }
)(SingleSentMail);
