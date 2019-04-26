import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReplyMessage from "./ReplyMessage";
import { getDrafts } from "../../redux/actions/messages.action";
import Spinner from "../widgets/Spinner";
import SendMessage from "./SendMessage";

import SingleDraft from "../partials/SingleDraft";
class Drafts extends Component {
  componentWillMount = () => {
    this.props.getDrafts();
  };

  render() {
    return (
      <section className="inbox">
        <div className="inbox__mail--mails">
          <h3 className="text-center">Your Drafts</h3>
          {this.props.ui.loading ? <Spinner /> : null}
          {this.props.message.drafts.length ? (
            <div>
              {this.props.message.drafts.map(message => (
                <SingleDraft data={message} />
              ))}
            </div>
          ) : (
            <div>
              <p className="text-center">No Drafts yet</p>
            </div>
          )}
        </div>
        <div className="inbox__mail--item">
          {Object.keys(this.props.message.currentDraft).length ? (
            <SendMessage />
          ) : (
            <div>
              <p className="text-center">No Message Selected</p>
            </div>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  ui: state.ui
});

Drafts.propTypes = {
  getDrafts: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getDrafts }
)(Drafts);
