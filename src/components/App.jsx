import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import { fetchPictures } from '../services/pixabayAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    totalHits: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
    this.setState({status: Status.PENDING, images: []});
    fetchPictures(this.state.searchQuery, 1)
      .then(data => {
        if (data.totalHits === 0) {
          toast.error(`${this.state.searchQuery} not found!`);
          this.setState({ error: `${this.state.searchQuery} not found!`, status: Status.REJECTED });
        }
        else if (data.hits) {
          this.setState({ images: data.hits, totalHits: data.totalHits, status: Status.RESOLVED })
        }
      })
      .catch(error => this.setState({ error: error, status: Status.REJECTED }));
    }
  };

  onSearchClick = searchQuery => {
    this.setState({ searchQuery: searchQuery });
  };

  onLoadMoreClick = () => {
    fetchPictures(this.state.searchQuery, this.state.page + 1)
      .then(data => {
        const newImages = [...this.state.images, ...data.hits];
        this.setState({ images: newImages, page: this.state.page + 1, status: Status.RESOLVED })
      })
      .catch(error => this.setState({ error: error, status: Status.REJECTED }));
  };

  render() {
    const { images, status, page, totalHits } = this.state;
    return (
    <div
      className={styles.container}
      >
        <Searchbar
          onSearchClick={this.onSearchClick}
        />
        {status === Status.PENDING && (<Loader />)}
        {status !== Status.PENDING && images && (<ImageGallery images={images} />)}
        {status === Status.RESOLVED && totalHits/12 > page && (<Button text='Load more' handleClick={this.onLoadMoreClick} />)}
        <ToastContainer />
    </div>
  )};
}
