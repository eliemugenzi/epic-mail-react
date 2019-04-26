import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import GroupItem from "../partials/GroupItem";
import Spinner from "../widgets/Spinner";
import { createGroup, getGroups } from "../../redux/actions/groups.action";
class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentWillMount = () => {
    this.props.getGroups();
  };
  create = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createGroup({
      name: this.state.name
    });
  };
  render() {
    return (
      <section className="groups">
        <div className="groups__new">
          <form onSubmit={this.create}>
            <h2 className="text-center">Create a new Group</h2>
            <div className="field">
              <label htmlFor="">Group Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                required
              />
            </div>
            {this.props.ui.loading ? <Spinner /> : null}
            <input type="submit" value="Create" className="btn btn-primary" />
          </form>
        </div>
        <h2 className="text-center">Your Groups</h2>
        <div className="groups__list">
          {this.props.group.groups.length ? (
            <div>
              {this.props.group.groups.map(group => (
                <Link
                  to={`/groups/${group.id}`}
                  key={group.id}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <GroupItem groupData={group} key={group.id} />
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center">No Groups</p>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  group: state.group
});

Groups.propTypes = {
  createGroup: PropTypes.func.isRequired,
  getGroups: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { createGroup, getGroups }
)(Groups);
