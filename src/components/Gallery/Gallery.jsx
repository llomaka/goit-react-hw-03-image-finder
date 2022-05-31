import React, { Component } from "react";
import styles from "./Gallery.module.css";

export default class Gallery extends Component {

  render() {
    const { children } = this.props;
    return (
      <ul className={styles.gallery}>
        {children}
      </ul>
    )
  }
}
