import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alert extends Component {
  componentDidUpdate = prevProps => {
    const { error, info } = this.props.user;
    const { alert } = this.props;

    if (error !== prevProps.user.error) {
      alert.error(error);
    }

    if (info !== prevProps.user.info) {
      alert.success(info);
    }
  };

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  user: state.user
});
Alert.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withAlert()(Alert));
