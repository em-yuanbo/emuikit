import React from 'react';

import style from './style.css';

class Panel extends React.Component{
  render(){
    return (
      <div className={`${style.root} ${this.props.className||''}`}>
      { this.props.children }
      </div>
    );
  }
}

export {Panel};
