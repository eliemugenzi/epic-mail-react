import React, { Component } from "react";

export default class SearchMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      result: []
    };
  }
  render() {
    return (
      <div className="inbox__mail--search">
        <form action="" method="get">
          <div className="inline">
            <input
              type="search"
              name="q"
              id="q"
              placeholder="Search an email..."
            />
          </div>
        </form>
      </div>
    );
  }
}
