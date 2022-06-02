import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  }

  handleImgClick = (largeImageURL) => {
    this.setState({ showModal: true });
  }

  render() {
    const { image: {id, largeImageURL, webformatURL, tags} } = this.props;
    return (
      <li
        id={id}
        className={styles.gallery__item}
      >
          <img
            className={styles.gallery__image}
            src={webformatURL}
            alt={tags}
            onClick={() => this.handleImgClick(largeImageURL)}
          />
      </li>
    )
  }
}
