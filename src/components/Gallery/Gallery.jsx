import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    )
  }

  render() {
    const { images } = this.props;
    return (
      <ul className={styles.gallery}>
        {images.map(image => (
          <li
            key={image.id}
            className={styles.gallery__item}
          >
            <a
              href={image.largeImageURL}
            >
              <img
                className={styles.gallery__image}
                src={image.webformatURL}
                alt={image.tags}
                />
            </a>
          </li>
        ))}
      </ul>
    )
  }
}
