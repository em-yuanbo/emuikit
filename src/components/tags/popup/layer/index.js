import React from 'react';

import styles from './style.css';
import {dispatcher, store} from '../utils';

class PopLayer extends React.Component{
  constructor(){
    super(...arguments);
    this.state = {layers:[]};
    this.cancelAll= this.cancelAll.bind(this);
  }
  componentDidMount(){
    var that = this;
    store.addListener(function(){
      var pops = store.getState();
      that.setState({layers:pops.layers});
    });
    window.addEventListener('click',this.cancelAll);
    window.addEventListener('scroll',this.cancelAll);
  }
  cancelAll(){
    dispatcher.dispatch({
      type:'pop-pop'
    });
  }
  componentWillUnMount(){
    window.removeEventListener('click',this.cancelAll);
    window.removeEventListener('scroll',this.cancelAll);
  }
  render(){
    var pops = this.state.layers.map((layer,index)=>layer.content);//.map(render=>render());
    var tips = null;
    var menus = null;
    return (
      <div className={`${styles.poplayer}`}>
      {pops}
      {tips}
      {menus}
      </div>
    )
  }
}

export {PopLayer};

