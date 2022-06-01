import React, { Component } from "react";
import { SpinnerDotted } from "spinners-react";
import Searchbar from "./Searchbar";
// import ImageGallery from "./ImageGallery";
import Button from "./Button";
// import { fetchPictures } from "./pixabayAPI";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
  };

  onChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  };

  render() {
    return (
    <div
      className={styles.container}
    >
        <Searchbar
          searchQuery={this.state.searchQuery}
          onChange={this.onChange}
        />
        <SpinnerDotted
          size='80'
          color='#490D9A'
        />
        {/* <SpinnerDotted enabled={false} /> */}
        {/* <ImageGallery /> */}
        <Button
          text="Load more"
          handleClick={this.fetchPictures}
          page={this.state.page}
        />
    </div>
  )};
}
