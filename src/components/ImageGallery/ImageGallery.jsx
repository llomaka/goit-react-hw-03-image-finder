import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import {RemoveScroll} from 'react-remove-scroll';
import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: '',
    tags: ''
  };

  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    )
  };

  showModal = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      tags: tags
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
      tags: ''
    });
  };

  render() {
    const { images } = this.props;
    return (
      <>
        <ul className={styles.gallery}>
          {images.map(image => (
            <li
              key={image.id}
              className={styles.gallery__item}
            >
              <ImageGalleryItem
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                tags={image.tags}
                showModal={this.showModal}
              />
            </li>
          ))}
        </ul>
        {this.state.showModal && <RemoveScroll>
          <Modal
          largeImageURL={this.state.largeImageURL}
          tags={this.state.tags}
          closeModal={this.closeModal}
          />
        </RemoveScroll>}
      </>
    )
  };
}
