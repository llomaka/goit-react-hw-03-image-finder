import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "components/Modal";
import styles from "./ImageGallery.module.css";

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
    })
  }

  render() {
    const { images } = this.props;
    return (
      <>
      <ul className={styles.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            showModal={this.showModal}
          />
        ))}
      </ul>
        {this.state.showModal && <Modal
          largeImageURL={this.state.largeImageURL}
          tags={this.state.tags}
          closeModal={this.closeModal}
        />}
      </>
    )
  };
}
