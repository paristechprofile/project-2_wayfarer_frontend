import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search For Cities"
        />
      </div>
    );
  }
}
