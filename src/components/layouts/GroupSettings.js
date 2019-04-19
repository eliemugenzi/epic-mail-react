import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { renameGroup, deleteGroup } from "../../redux/actions/groups.action";

class GroupSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  rename = e => {
    e.preventDefault();
    this.props.renameGroup({
      name: this.state.name
    });
  };

  delete = () => {
    const { id } = this.props.match.params;
    this.props.deleteGroup(id);
  };
  render() {
    return (
      <section className="grp-settings">
        <div className="grp-settings__container">
          <h2 className="text-center">Settings</h2>
          <div className="grp-settings__grid">
            <div className="grp-settings__grid--item">
              <h5 className="text-center">Rename this group</h5>
              <form onSubmit={this.rename}>
                <div className="field">
                  <label htmlFor="name">New Name</label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Rename
                </button>
              </form>
            </div>
            <div className="grp-settings__grid--item">
              <button className="btn btn-primary" onClick={this.delete}>
                Delete group
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  group: state.group,
  ui: state.ui
});

GroupSettings.propTypes = {
  renameGroup: PropTypes.func.isRequired,
  deleteGroup: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { renameGroup, deleteGroup }
)(GroupSettings);
