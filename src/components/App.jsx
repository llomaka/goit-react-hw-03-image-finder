import React, { Component } from "react";
import SearchForm from "./SearchForm";
// import Gallery from "./Gallery";
// import { fetchPictures } from "./pixabayAPI";

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  onChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  };

  render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <SearchForm
          searchQuery={this.state.searchQuery}
          onChange={this.onChange}
        />
        {/* <Gallery /> */}

    </div>
  )};
}
