import React from 'react';
import styles from './style.css';
import {Icon} from '../../icon';
import {dispatcher} from './../utils';

class DialogBase extends React.Component{
  constructor(){
    super(...arguments);
    this.onClickClose=this.onClickClose.bind(this);
  }
  onClickClose(){
    dispatcher.dispatch({
      type:'destroy',
      layer:this.props.layer,
    });
  }
  render(){
    var topClass = (this.props.top?'dialog-top':'');
    return (
      <div className={`${topClass} ${styles.dialogwrapper}`}>
        <div className={`${styles.dialogbase} dialogbase`}>
        {
          this.props.children
        }
          <Icon.Cancel onClick={this.onClickClose} className='close-btn'/>
        </div>
      </div>
    );
  }
}

class DialogHeader extends React.Component{
  render(){
    return (<div className={`${styles.dialogheader}`}>{this.props.children}</div>);
  }
}
class DialogContent extends React.Component{
  render(){
    return (<div className={`${styles.dialogcontent}`}>{this.props.children}</div>);
  }
}
class DialogStatusBar extends React.Component{
  render(){
    return (<div className={`${styles.dialogstatusbar}`}>{this.props.children}</div>);
  }
}

DialogBase.Header = DialogHeader;
DialogBase.StatusBar = DialogStatusBar;
DialogBase.Content= DialogContent;

class Prompt extends DialogBase{

}

class Confirm extends DialogBase{

}

class EmAlert extends DialogBase{

}

class Panel extends DialogBase{

}

function SimpleAlert (content,title){

}
function SimpleConfirm(content,title){
  // return promise=>true/false

}
function SimplePrompt(title){

}

//import {DialogLayer} from './layer';

export {DialogBase, SimplePrompt, SimpleConfirm, SimpleAlert, EmAlert, Prompt,Confirm};
