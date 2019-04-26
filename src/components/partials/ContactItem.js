import React, { Component } from "react";

export default class ContactItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="contacts__list--item">
        <div className="contacts__list--item-picture">
          <img
            src="https://www.bing.com/th?id=OIP.E06jGgBh0Dxx_uIsfGyscAHaHa&w=212&h=212&c=7&o=5&pid=1.7"
            alt=""
          />
        </div>
        <div className="contacts__list--item-name">
          <h4>{`${data.firstname} ${data.lastname}`}</h4>
        </div>
      </div>
    );
  }
}
