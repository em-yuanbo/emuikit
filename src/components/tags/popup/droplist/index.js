import React from 'react';
import ReactDOM from 'react-dom';
import {List} from '../../list';
import {Status as AvatarStatus} from '../../avatar/status';
import styles from './style.css';

import {dispatcher, getId} from '../utils';


class DropDown extends React.Component {

  render() {
    return (<div></div>);
  }

}

class OnLinePop extends React.Component{
  render(){
    return {

    };
  }
}

class OnLineDropListPop extends React.Component{
  componentWillUnmount(){
    if(this.props.onCancel){
      this.props.onCancel();
    }
  }
  render(){
    return (
        <List key={this.props.popid} className={`${styles.droplist}`} onCancel={this.props.onCancel} onSelect={this.props.onSelect} selectedIndex={this.props.selectedIndex} style={{left:this.props.left,top:this.props.top}}>
          <List.Item>
            <AvatarStatus.OnLine className="avatar-status" />
            <div className="item-label">在线</div>
          </List.Item>
          <List.Item>
            <AvatarStatus.OffLine className="avatar-status" />
            <div className="item-label">离线</div>
          </List.Item>
        </List>
    );
  }
}

class OnLineDropList extends React.Component{
  constructor(props){
    super(...arguments);
    this.state={active:false,items:[{},{},{}],selectedIndex:1};
    this.popid = getId();
    this.onClick = this.onClick.bind(this);
    this.onSelect=this.onSelect.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onClick(e){
    e.stopPropagation();
    var active = !this.state.active;
    this.setState({active});
    let dropdown = null;
    if(active){
      var clork = ReactDOM.findDOMNode(this.refs.popupClork);
      let {left,top}=clork.getBoundingClientRect();
      //console.log(clork.getBoundingClientRect(),clork);
      dropdown = (
        <OnLineDropListPop key={this.popid} onCancel={this.onCancel} onSelect={this.onSelect} selectedIndex={this.state.selectedIndex} left={left} top={top}/>
      );
      dispatcher.dispatch({
        type:'add',
        popid:this.popid,
        popup:dropdown,
      });
    }
  }

  onCancel(){
    this.setState({active:false});
  }

  onSelect(child,index){
    //console.log(child,index);
    this.setState({active:false,selectedIndex:index});
    dispatcher.dispatch({
      type:'remove',
      popid:this.popid,
    });
  }

  render(){
    let onLineStatus = ( <AvatarStatus.OnLine className="avatar-status" onClick={this.onClick}/>);
    if(this.state.selectedIndex){
     onLineStatus = ( <AvatarStatus.OffLine className="avatar-status" onClick={this.onClick}/>);
    }
    //console.log(this.state.selectedIndex);
    return (<div className={`${styles.root}`}>
              {onLineStatus}
              <div ref='popupClork' className='clork'>
              </div>
            </div>);
  }
}

DropDown.OnLineStatus = OnLineDropList;


export { DropDown };
