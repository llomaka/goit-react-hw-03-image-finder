import React, {Component} from "react";
import { SpinnerDotted } from "spinners-react";
import PropTypes from "prop-types";

export default class Loader extends Component {
  static propTypes = {
    isEnabled: PropTypes.bool.isRequired,
  };

  render() {
    const { isEnabled } = this.props;
    return (
      <SpinnerDotted
        enabled={isEnabled}
        size='80'
        color='#490D9A'
      />
    )
  }
}
