import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setCurrentDraft } from "../../redux/actions/messages.action";

class SingleDraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  static propTypes = {
    message: PropTypes.object,
    setCurrentDraft: PropTypes.func
  };

  componentWillMount = () => {
    const { data } = this.props;
    const USER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${
      data.receiverid
    }`;
    fetch(`https://cors-anywhere.herokuapp.com/${USER_URL}`)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            user: res.data[0]
          });
        }
      });
  };

  render() {
    const { data } = this.props;
    const date = new Date(data.createdon);
    const dateString = `${date.getDate()}-${date.getMonth() +
      1}-${date.getFullYear()}`;
    return (
      <div className="mail" onClick={() => this.props.setCurrentDraft(data)}>
        <header>
          <div className="mail__sender--pic">
            <img
              src="https://www.bing.com/th?id=OIP.bfRSHPnKwNiFfqIPCtpgkgHaHa&w=210&h=210&c=7&o=5&pid=1.7"
              alt=""
            />
          </div>
          <span>{dateString}</span>
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

export default connect(
  mapStateToProps,
  { setCurrentDraft }
)(SingleDraft);
