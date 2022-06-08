import React, {Component} from 'react';
import { SpinnerDotted } from 'spinners-react';

export default class Loader extends Component {
  render() {
    return (
      <SpinnerDotted
        enabled={true}
        size='100'
        color='#490D9A'
        thickness='150'
        style={{
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
    )
  };
}
