import React, { Component } from "react";
import SearchNav from "./SearchNav";
import SearchWrap from "./SearchWrap";

export class Search extends Component {
  render() {
    return (
      <div>
        <SearchNav />
        <SearchWrap />
      </div>
    );
  }
}

export default Search;
