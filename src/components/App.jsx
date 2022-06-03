import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";
import { fetchPictures } from "../services/pixabayAPI";
import styles from "./App.module.css";


export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    isButtonShown: false,
    images: [],
    isLoading: false,
  };

  onChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  };

  onSearchClick = () => {
    this.setState({ isLoading: true });
    fetchPictures(this.state.searchQuery, this.state.page)
      .then(data => {
        if(data.totalHits === 0) { console.log(`${this.state.searchQuery} not found!`) }
        else if (data.hits) {
          this.setState({ images: data.hits })
        }
      })
      .catch(error => console.log(error))
      .finally(this.setState({
        isLoading: false,
        isButtonShown: true,
        page: 1,
      }));
  };

  onLoadMoreClick = () => {
    this.setState({ isLoading: true });
    fetchPictures(this.state.searchQuery, this.state.page + 1)
      .then(data => {
        this.setState(prevstate => ({
          images: [...prevstate.images, ...data.hits]
        }));
      })
      .catch(error => console.log(error))
      .finally(this.setState(prevState => ({
        isLoading: false,
        isButtonShown: true,
        page: prevState.page + 1,
      })));
  };

  render() {
    return (
    <div
      className={styles.container}
    >
        <Searchbar
          searchQuery={this.state.searchQuery}
          onChange={this.onChange}
          onSearchClick={this.onSearchClick}
        />
        <Loader
          isEnabled={this.state.isLoading}
        />
        {!this.state.isLoading && this.state.images && (<ImageGallery images={this.state.images}/>)}
        {this.state.isButtonShown && (<Button
          text="Load more"
          handleClick={this.onLoadMoreClick}
        />)}
    </div>
  )};
}
