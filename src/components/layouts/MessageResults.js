import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MessageResults extends Component {
  render() {
    if (!this.props.message.searchResults.length) {
      return (
        <div className="error">
          <p>No results</p>
        </div>
      );
    }
    return (
      <div className="inbox__mail--mails">
        <h4 className="text-center">Search results</h4>
        <div className="mail">
          <header>
            <div className="mail__sender--pic">
              <img
                src="https://www.bing.com/th?id=OIP.bfRSHPnKwNiFfqIPCtpgkgHaHa&w=210&h=210&c=7&o=5&pid=1.7"
                alt=""
              />
            </div>
            <strong>Elie Mugenzi</strong>
            <span>Today</span>
          </header>
          <div className="mail__body">
            <h3>Invitation to Fellowship</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              sapiente vitae fuga quas magni, debitis soluta. Eum, repellendus
              omnis voluptates dolore aspernatur aut soluta dolor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(MessageResults);
