import React from 'react';
import { Switcher } from '../switcher';

import styles from './index.css';

class ToggleButton extends Switcher {
  render() {
    var toggledClass = this.state.checked ? 'toggled' : '';
    return (
      <div className={`${this.props.className || ''} ${styles.root} ${toggledClass}`} onClick={this.onClick}>
        {this.props.content}
      </div>
      );
  }
}

export { ToggleButton };

