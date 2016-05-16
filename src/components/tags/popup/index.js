/**
 * droplist->popup->list + renderItem + renderResult + submit
 *
 * <PopUp>
 * <status popupResult={} value={}/>
 * <List pops={}>
 * <List.Item value={xxx}>
 * </List.Item>
 * </List>
 * </PopUp>
 *
 */

import React, {PropTypes} from 'react';
import styles from './style.css';
//const {PropTypes} = React;

class PopUp extends React.Component {
  constructor(){
    super(...arguments);
    this.state={
      active:this.props.active||false,
    };
  }
  render(){
    var children = this.props.items.map(this.props.renderItem);
    return (
      <div className="popup">
      {
        children
      }
      </div>
    );
  }
}
PopUp.props = {
  active:PropTypes.bool,
  pops:PropTypes.any,
  submit:PropTypes.func,
  renderResult:PropTypes.object,
};

import {PopLayer} from './layer';

import {TimePicker} from './timepicker';
import {DropDown} from './droplist';

export { PopUp , PopLayer, TimePicker, DropDown};
