import React, { Component } from "react";

export default class GroupMessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: {}
    };
  }

  componentWillMount = () => {
    const { data } = this.props;
    const SENDER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${
      data.senderid
    }`;
    fetch(`http://cors-anywhere.herokuapp.com/${SENDER_URL}`)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            sender: res.data[0]
          });
        }
      });
  };
  render() {
    const { data } = this.props;
    return (
      <div className="groupchats__message">
        <header>
          <div className="groupchats__message--pic">
            <img
              src="https://www.bing.com/th?id=OIP.1yoSL-WO0YU5mQKROudvswHaHa&w=203&h=203&c=7&o=5&pid=1.7"
              alt=""
            />
          </div>
          <strong>
            {this.state.sender.firstname} {this.state.sender.lastname}
          </strong>
          <span>{data.createdon}</span>
        </header>
        <div className="groupchats__message--body">
          <h3>{data.subject}</h3>
          <p>{data.message}</p>
        </div>
      </div>
    );
  }
}
