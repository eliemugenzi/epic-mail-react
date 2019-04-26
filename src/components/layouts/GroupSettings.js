import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { renameGroup, deleteGroup } from "../../redux/actions/groups.action";
import Spinner from "../widgets/Spinner";

class GroupSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    const GROUP_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}`;
    fetch(`https://cors-anywhere.herokuapp.com/${GROUP_URL}`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.setState({
            name: res.data[0].name
          });
        }
      })
      .catch(err => console.log(err));
  };

  rename = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    this.props.renameGroup(id, {
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
                {this.props.ui.loading?<Spinner/>:null}
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
