import React, { Component } from "react";
import Searchbar from "./Searchbar";
// import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";
// import { fetchPictures } from "./services/pixabayAPI";
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
        <Loader
          isEnabled={true}
        />
        {/* <ImageGallery /> */}
        <Button
          text="Load more"
          handleClick={this.fetchPictures}
          page={this.state.page}
        />
    </div>
  )};
}
