import React from 'react';
import styles from './index.css';

class BaseIcon extends React.Component {
  render() {
    return (
      <div className={`${styles.root} ${this.props.className}`} onClick={this.props.onClick}>{this.props.content || '1'}</div>);
  }
}
function Cancel(props) {
  return (<BaseIcon className={`${props.className||''}`} content="o" {...props}/>);
}
function Drag(props) {
  return (<BaseIcon content=":" {...props}/>);
}

function Minus(props) {
  return (<BaseIcon content="q" {...props}/>);
}
function Add(props) {
  return (<BaseIcon className={`${props.className||''}`} content="p" {...props}/>);
}

function Search(props) {
  return (<BaseIcon className={`${props.className||''}`} content="p" {...props}/>);
}

const Icon = {
  Edit: BaseIcon,
  Cancel: Cancel,
  Drag: Drag,
  Add: Add,
  Search:Search,
  Minus: Minus
};

export { Icon };
