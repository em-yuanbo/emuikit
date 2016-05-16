import React from 'react';
import styles from './style.css';

class BaseChannelIcon extends React.Component {
  render(){
    return (<div className={`${styles.root}`}> p </div>);
  }
}

const ChannelIcon={
  Weibo:BaseChannelIcon
}

export { ChannelIcon };
