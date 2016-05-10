import React from 'react';
import styles from './index.css';

class EmInput extends React.Component{
  constructor(){
    super(...arguments);
    this.state={tip:'error'};
  }

  render(){

    return (
      <div className={`${styles.root} `}>
        <input className="input" placeholder={this.props.placeholder}/>
        <div className="tip">{this.state.tip}</div>
      </div>
    )
  }
}

export {EmInput}
