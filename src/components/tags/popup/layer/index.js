import React from 'react';

import styles from './style.css';
import {dispatcher, store} from '../utils';

class PopLayer extends React.Component{
  constructor(){
    super(...arguments);
    this.state = {pops:{}};
    this.cancelAll= this.cancelAll.bind(this);
  }
  componentDidMount(){
    var that = this;
    store.addListener(function(){
      var pops = store.getState();
      that.setState({pops});
    });
    window.addEventListener('click',this.cancelAll);
    window.addEventListener('scroll',this.cancelAll);
  }
  cancelAll(){
    dispatcher.dispatch({
      type:'removeAll'
    });
  }
  componentWillUnMount(){
    window.removeEventListener('click',this.cancelAll);
    window.removeEventListener('scroll',this.cancelAll);
  }
  render(){
    var pops = Object.keys(this.state.pops).map(key=>this.state.pops[key]);//.map(render=>render());
    return (
      <div className={`${styles.poplayer}`}>
      {pops}
      </div>
    )
  }
}

export {PopLayer};

