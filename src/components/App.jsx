import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import { fetchPictures } from '../services/pixabayAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';


export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    isButtonShown: false,
    images: [],
    isLoading: false,
    error: null,
    status: 'idle', //'pending', 'resolved', 'rejected'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
    this.setState({isLoading: true});
    fetchPictures(this.state.searchQuery, this.state.page)
      .then(data => {
        if(data.totalHits === 0) { toast.error(`${this.state.searchQuery} not found!`) }
        else if (data.hits) {
          this.setState({ images: data.hits })
        }
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({
        isLoading: false,
        // isButtonShown: true,
        page: 1,
      }));
    }
  };

  onSearchClick = searchQuery => {
    this.setState({
      searchQuery: searchQuery
    });
  };

  onLoadMoreClick = () => {
    this.setState({ isLoading: true });
    // fetchPictures(this.state.searchQuery, this.state.page + 1)
    //   .then(data => {
    //     this.setState(prevstate => ({
    //       images: [...prevstate.images, ...data.hits]
    //     }));
    //   })
    //   .catch(error => console.log(error))
    //   .finally(() => this.setState(prevState => ({
    //     isLoading: false,
    //     isButtonShown: true,
    //     page: prevState.page + 1,
    //   })))
  };

  render() {
    return (
    <div
      className={styles.container}
      >
        <Searchbar
          onSearchClick={this.onSearchClick}
        />
        {this.state.isLoading && (<Loader
          isEnabled={this.state.isLoading}
        />)}
        {!this.state.isLoading && this.state.images && (<ImageGallery images={this.state.images} />)}
        {this.state.isButtonShown && (<Button
          text='Load more'
          handleClick={this.onLoadMoreClick}
        />)}
        <ToastContainer />
    </div>
  )};
}
