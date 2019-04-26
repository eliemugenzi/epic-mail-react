import React, { Component } from "react";
import SingleSentMail from "./SingleSentMail";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSentMails } from "../../redux/actions/messages.action";

import SentMailItem from "../partials/SentMailItem";
class SentMails extends Component {
  componentWillMount = () => {
    this.props.getSentMails();
  };

  render() {
    const { sentMails } = this.props.message;
    return (
      <section className="inbox">
        <div className="inbox__mail--lists">
          <h3 className="text-center">Sent Mails</h3>
          <div className="inbox__mail--mails">
            {sentMails.length ? (
              <div>
                {sentMails.map(message => (
                  <SentMailItem data={message} key={message.id} />
                ))}
              </div>
            ) : (
              <div>
                <p className="text-center">No Sent mails!</p>
              </div>
            )}
          </div>
        </div>
        <SingleSentMail />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

SentMails.propTypes = {
  getSentMails: PropTypes.func.isRequired,
  message: PropTypes.object
};

export default connect(
  mapStateToProps,
  { getSentMails }
)(SentMails);
