import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMessages } from "../../redux/actions/messages.action";

// Defined components import...
import SearchMessage from "./SearchMessage";
import MessageResults from "./MessageResults";
import Message from "./Message";
import Spinner from "../widgets/Spinner";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      keyword: ""
    };
  }

  componentWillMount = () => {
    this.props.getMessages();
  };

  render() {
    return (
      <div className="inbox__mail--lists">
        <SearchMessage />
        <MessageResults />
        <div className="inbox__mail--mails">
          <h4 className="text-center">Your Inbox messages</h4>
          {this.props.ui.loading ? <Spinner /> : null}
          {this.props.message.messages.length ? (
            <div>
              {this.props.message.messages.map(message => (
                <Message data={message} key={message.id} />
              ))}
            </div>
          ) : (
            <p className="text-center">No messages</p>
          )}
        </div>
      </div>
    );
  }
}

MessageList.propTypes = {
  getMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  message: state.message,
  ui: state.ui
});

export default connect(
  mapStateToProps,
  { getMessages }
)(MessageList);
