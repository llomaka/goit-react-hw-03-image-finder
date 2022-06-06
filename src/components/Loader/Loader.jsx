import React, {Component} from "react";
import { SpinnerDotted } from "spinners-react";

export default class Loader extends Component {
  render() {
    return (
      <SpinnerDotted
        enabled={true}
        size='80'
        color='#490D9A'
        style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
    )
  }
}
