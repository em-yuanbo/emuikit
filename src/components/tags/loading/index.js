import React from 'react';

import styles from './index.css';

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

export {Loading};

