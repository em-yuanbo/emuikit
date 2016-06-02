import React from 'react';

import {VirtualList} from '../../virtuallist';

import styles from './style.css';

const {cloneElement} = React;

//class ListBase extends React.Component {
  //render(){
    //return (
      //<div>
      //</div>
    //);
  //}
//}

class List extends React.Component{
  constructor(){
    super(...arguments);
    this.state={selectedIndex:this.props.selectedIndex};
  }

  shouldComponentUpdate(nextProps,nextState){
    return nextState.selectedIndex!=this.state.selectedIndex;
  }

  onSelect(child,index){
    //console.log(React.Children.only(child));
    this.setState({selectedIndex:index});
    if(this.props.onSelect){
      this.props.onSelect(child.props,index);
    }
  }

  render(){
    var {children}= this.props;
    var that = this;
    //console.log('selectedIndex:',this.state.selectedIndex);
    var newChildren = React.Children.map(children,(child,index)=>{
      //let newHandler;
      //if(child.props.onClick){
        //newHandler = function(){
          //console.log('click');
          //child.props.onClick(...arguments);
        //}
      //}else{
        //newHandler = function(){
          //console.log('click');
        //}
      //}
      return cloneElement(child,{ itemClickHandler:this.onSelect.bind(this,child,index),
                                  selectedIndex:that.state.selectedIndex,
                                  index:index});
    });
    //console.log('newChildren',newChildren);
    var style = Object.assign({},this.props.style);
    return (
      <div className={`${styles.root} ${this.props.className||''}`} style={style}>
      { newChildren }
      </div>

    );
  }
}
class ListItem extends React.Component{
  render(){
    let {selectedIndex,index} = this.props;
    var currentClass = selectedIndex ==index?'selected':'';
    return (
      <div className={`${this.props.className||''} item ${currentClass}`} onClick={this.props.itemClickHandler}>
         {this.props.children}
      </div>
    );
  }
}

List.Item = ListItem;

/**
 * 无限列表
 * 基于virtuallist
 */
class BigList extends React.Component{
  constructor(props){
    super(...arguments);
    this.state={
      items:props.items,
      scrollDelay:0,
      className:'list',
      itemBuffer:props.itemBuffer,
      itemHeight:props.itemHeight,
    }
    this.renderItem = props.itemRender;
  }
  shouldComponentUpdate(){
    return false;
  }
  render(){
    var {items, itemRender,itemHeight,itemBuffer }= this.props;
    return (
      <div className={`${this.props.className}`} style={{height:400,'overflowY':'scroll', width:200}}>
        <VirtualList items={items} renderItem={itemRender} scrollDelay={0} className={'no'} container={this} itemBuffer={3} itemHeight={40}   />
      </div>
    );
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

export { List, ListItem, BigList };
