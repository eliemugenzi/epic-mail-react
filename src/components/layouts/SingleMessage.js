import React, { Component } from "react";
import { connect } from "react-redux";

class SingleMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderNames: "",
      receiverNames: "",
      senderEmail: "",
      receiverEmail: ""
    };
  }

  componentDidUpdate = prevProps => {
    const { currentMessage } = this.props.message;
    console.log(currentMessage);
    const SENDER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${
      currentMessage.senderid
    }`;
    const RECEIVER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${
      currentMessage.receiverid
    }`;

    fetch(`http://cors-anywhere.herokuapp.com/${SENDER_URL}`)
      .then(res => res.json())
      .then(res => {
        const user = res.data[0];
        this.setState({
          senderNames: `${user.firstname} ${user.lastname}`,
          senderEmail: user.email
        });
      })
      .catch(err => console.log(err));

    fetch(`http://cors-anywhere.herokuapp.com/${RECEIVER_URL}`)
      .then(res => res.json())
      .then(res => {
        const user = res.data[0];
        this.setState({
          receiverNames: `${user.firstname} ${user.lastname}`,
          receiverEmail: user.email
        });
      });
  };
  render() {
    if (!Object.keys(this.props.message.currentMessage).length) {
      return (
        <div>
          <p className="text-center">No Message selected</p>
        </div>
      );
    }
    const { currentMessage } = this.props.message;
    const date = new Date(currentMessage.createdon);
    const newDate = `${date.getDate()}-${date.getMonth() +
      1}-${date.getFullYear()},${date.getHours()}:${date.getMinutes()}`;
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
              <span>
                From:<strong>{this.state.senderNames}</strong>
                {"<"}
                <i>{this.state.senderEmail}</i> {">"}
              </span>{" "}
              <br />
              <span>
                To:<strong>{this.state.receiverNames}</strong> {"<"}
                <i>{this.state.receiverEmail}</i> {">"}
              </span>{" "}
              <br />
              <span>
                Time: <i>{newDate}</i>
              </span>
            </div>
          </div>
          <div className="receiver__actions">
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-reply" />
            </a>
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-step-backward" />
            </a>
            <a href="/#" className="btn__small btn-white">
              <i className="fa fa-trash" />
            </a>
          </div>
        </header>
        <div className="inbox__mail--body">
          <h3>{currentMessage.subject}</h3>
          <p>{currentMessage.message}</p>
        </div>
        <div className="inbox__mail--reply">
          <form action="">
            <div className="field">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Reply to this message"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reply
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(SingleMessage);
