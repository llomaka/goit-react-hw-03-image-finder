import React, { Component } from "react";
import SearchForm from "./SearchForm";
// import Gallery from "./Gallery";

export default class App extends Component {
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
      <SearchForm />
    </div>
  )};
}
