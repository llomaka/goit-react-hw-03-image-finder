import React, { Component, createRef } from 'react';
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

  bottomRef = createRef();

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery.toLowerCase() !== this.state.searchQuery.toLowerCase()) {
    this.setState({status: Status.PENDING, images: [], page: 1 });
    fetchPictures(this.state.searchQuery, 1)
      .then(data => {
        if (data.totalHits === 0) {
          toast.error(`${this.state.searchQuery} not found!`);
          this.setState({ error: `${this.state.searchQuery} not found!`, status: Status.REJECTED });
        }
        else if (data.hits) {
          this.setState({ images: data.hits, totalHits: data.totalHits, status: Status.RESOLVED, error: null })
        }
      })
      .catch(error => this.setState({ error: error, status: Status.REJECTED }));
    }
    if (this.bottomRef.current && this.state.page > 1) {
      this.bottomRef.current.scrollIntoView(false);
    }
  };

  onSearchClick = searchQuery => {
    this.setState({ searchQuery: searchQuery });
  };

  onLoadMoreClick = () => {
    this.setState({status: Status.PENDING});
    fetchPictures(this.state.searchQuery, this.state.page + 1)
      .then(data => {
        this.setState(prevState => ({ images: [...this.state.images, ...data.hits], page: prevState.page + 1, status: Status.RESOLVED }));
      })
      .catch(error => this.setState({ error: error, status: Status.REJECTED }));
  };

  render() {
    const { images, status, page, totalHits } = this.state;
    const totalPages = totalHits / 12;
    return (
    <div
      className={styles.container}
      >
        <Searchbar
          onSearchClick={this.onSearchClick}
        />
        {status === Status.PENDING && (<Loader />)}
        {status === Status.RESOLVED && (<ImageGallery images={images} />)}
        {status === Status.RESOLVED && totalPages > page && (<Button text='Load more' handleClick={this.onLoadMoreClick} />)}
        <ToastContainer ref={this.bottomRef} />
    </div>
  )};
}
