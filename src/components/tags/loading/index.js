import React from 'react';

import styles from './style.css';

class Loading extends React.Component{
  render(){
    return (<div className={`${styles.root} ${this.props.theme || ''} `}>
              <span className="dot dot0"></span>
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
            </div>)
  }
}
class ProgressBar extends React.Component{
  render(){
    let progress = Math.round(this.props.progress);
    return (
      <div className={`${styles.progressbar}`}>
        <div className="track" style={{width:`${progress}%`}}></div>
        <div className="label">{progress}%</div>
      </div>
    );
  }
}
export {Loading,ProgressBar};

