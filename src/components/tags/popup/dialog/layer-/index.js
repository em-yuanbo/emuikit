/**
 * 从sotre中拿到dialog数据，刷新，层级计算，
 *
 */
import React from 'react';

import {store } from '../../utils/';
import styles from './style.css';

function getStore(){
  return store;
}

class DialogLayer extends React.Component{
  constructor(){
    super(...arguments);
    this.state = {layers:{}};
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    let layers = this.store.getState();
    this.setState({layers});
  }

  componentDidMount(){
    this.store = getStore();
    this.store.addListener(this.onChange);
  }

  componentWillUnmount(){
    this.store.removeListener(this.onChange);
  }

  render(){
    //最后一个dialog弹层显示masker背景,保证masker只有一层显示出来
    let layers = this.state.layers;
    //layers = layers.map(layer=>{
      //return layer;
    //});
    console.log('dialog.layers:',layers);
    let keys =Object.keys(layers);
    if(!keys.length){
      return null;
    }
    return (
      <div className={`${styles.root}`}>
      {keys.map(key=>layers[key])}
      </div>
    );
  }
}

export {DialogLayer};
