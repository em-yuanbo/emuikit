import React from 'react';

import {Icon} from '../../icon';
import {MainButton, CancelButton} from '../../button';
import {replace as replaceChild} from '../../utils';

import {dispatcher} from './../utils';
import styles from './style.css';

class DialogBase extends React.Component{
  constructor(){
    super(...arguments);
    this.onClickClose=this.onClickClose.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    var newchildren = replaceChild(this.props.children,(child)=>{
      return (child.type == DialogStatusBar|| child.type==DialogCancel|| child.type== DialogSubmit);
    },(child)=>{
      //console.log('replaced',child.type);
      if(child.type==DialogStatusBar){
        return React.cloneElement(child,{onCancel:this.onCancel,onSubmit:this.onSubmit});
      }else if(child.type == DialogCancel){
        return React.cloneElement(child,{onClick:this.onCancel});
      }else if(child.type== DialogSubmit){
        return React.cloneElement(child,{onClick:this.onSubmit});
      }
    });
    this.state = {newchildren};
  }

  onCancel(){
    console.log('onCancel');
    dispatcher.dispatch({type:'destroy',layer:this.props.layer});
    if(this.props.onCancel){
      this.props.onCancel();
    }
    if(this.props.onClose){
      this.props.onClose();
    }
  }

  onSubmit(){
    console.log('onSubmit');
    dispatcher.dispatch({type:'destroy',layer:this.props.layer});
    if(this.props.onSubmit){
      this.props.onSubmit();
    }
    if(this.props.onClose){
      this.props.onClose();
    }
  }

  onClickClose(){
    if(this.props.onClose){
      this.props.onClose();
    }
    dispatcher.dispatch({
      type:'destroy',
      layer:this.props.layer,
    });
  }

  render(){
    var topClass = (this.props.top?'dialog-top':'');
    // 找到 submit/cancel,
    // 绑定onClick
    console.log(this.props.children);
    var closeButton = this.props.noCloseButton?null:
      ( <Icon.Cancel onClick={this.onClickClose} className='close-btn'/>);

    return (
      <div className={`${topClass} ${styles.dialogwrapper}`}>
        <div className={`${styles.dialogbase} dialogbase`}>
        {
          this.state.newchildren
        }
        {closeButton}
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
  constructor(){
    super(...arguments);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onCancel(){
    console.log('onCancel.statusbar');
    if(this.props.onCancel){
      this.props.onCancel();
    }
  }
  onSubmit(){
    console.log('onSubmit.statusbar');
    if(this.props.onSubmit){
      this.props.onSubmit();
    }
  }
  render(){
    var cancelButton = (!this.props.buttons)||(this.props.buttons&&this.props.buttons.cancel)?<DialogCancel onClick={this.onCancel}/>:null;

    var submitButton = (!this.props.buttons)||(this.props.buttons&&this.props.buttons.submit)?  <DialogSubmit onClick={this.onSubmit}/> : null;

    return (<div className={`${styles.dialogstatusbar}`}>
              {this.props.children}
              {cancelButton}
              {submitButton}
            </div>);
  }
}
class DialogSubmit extends React.Component{
  render(){
    return (
      <MainButton className={`dialog-submit`} label='ok' onClick={this.props.onClick}/>
    );
  }
}
class DialogCancel extends React.Component{
  render(){
    return (
      <CancelButton className={`dialog-cancel`} label='cancel' onClick={this.props.onClick}/>
    );
  }
}

DialogBase.Header = DialogHeader;
DialogBase.StatusBar = DialogStatusBar;
DialogBase.Content= DialogContent;

class Confirm extends React.Component{
  constructor(){
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  onCancel(){
    console.log('confirm.onCancel');
    if(this.props.onCancel){
      this.props.onCancel();
    }
  }
  onSubmit(){
    console.log('confirm.onSubmit');
    if(this.props.onSubmit){
      this.props.onSubmit();
    }
  }
  render(){
    var title= null;
    React.Children.forEach(this.props.children,(child)=>{
      if(!title&&child.type == DialogHeader){
        title = child;
      }
    });
    if(!title){
      title = (<DialogHeader>{this.props.title||'alert'}</DialogHeader>);
    }
    var content = null;
    React.Children.forEach(this.props.children,(child)=>{
      if(child.type == DialogContent){
        content = child.props.children;
      }
    });
    return (
      <DialogBase {...this.props} noCloseButton={true} onCancel={this.onCancel} onSubmit={this.onSubmit}>
        {title}
        <DialogContent>
          {content}
        </DialogContent>
        <DialogStatusBar buttons={{submit:1,cancel:1}}/>
      </DialogBase>
    );
  }
}

Confirm.show=function(com){
  var _resolve,_reject;
  var promise = new Promise(function(resolve,reject){
    _resolve = resolve;
    _reject = reject;
  });
  function onClose(){
    _resolve({type:'close'});
  }
  function onCancel(){
    _resolve({type:'cancel'});
  }
  function onSubmit(){
    _resolve({type:'submit'});
  }
  var _com = React.cloneElement(com,{onClose,onCancel,onSubmit});
  dispatcher.dispatch({type:'dialog-push',content:_com});
  return promise;
}

class EmAlert extends React.Component{
  constructor(){
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    console.log('alert.onSubmit');
    if(this.props.onSubmit){
      this.props.onSubmit();
    }
  }
  render(){
    var title= null;
    React.Children.forEach(this.props.children,(child)=>{
      if(!title&&child.type == DialogHeader){
        title = child;
      }
    });
    if(!title){
      title = (<DialogHeader>{this.props.title||'alert'}</DialogHeader>);
    }
    var content = null;
    React.Children.forEach(this.props.children,(child)=>{
      if(child.type == DialogContent){
        content = child.props.children;
      }
    });
    return (
      <DialogBase {...this.props} noCloseButton={true} onSubmit={this.onSubmit}>
        {title}
        <DialogContent>
          {content}
        </DialogContent>
        <DialogStatusBar buttons={{submit:1,cancel:0}}/>
      </DialogBase>
    );
  }
}
EmAlert.show=function(com){
  var _resolve,_reject;
  var promise = new Promise(function(resolve,reject){
    _resolve = resolve;
    _reject = reject;
  });
  function onClose(r){
    _resolve({type:'close'});
  }
  function onCancel(){
    _resolve({type:'cancel'});
  }
  function onSubmit(result){
    _resolve(Object.assign({type:'submit'},result));
  }
  var _com = React.cloneElement(com,{onClose,onCancel,onSubmit});
  dispatcher.dispatch({type:'dialog-push',content:_com});
  return promise;
};
DialogBase.show = EmAlert.show;

class Panel extends DialogBase{

}

function SimpleAlert (content,title){
  var _resolve,_reject;
    function onClose (){
      _resolve({type:'close'});

    }
    function onSubmit(){
      _resolve({type:'submit'});
    }
    var promise = new Promise(function(resolve,reject){
      _resolve = resolve;
      _reject = reject;
    });
    let alert = (
      <EmAlert title='dialog.title' onClose={onClose} onSubmit={onSubmit}>
        <DialogBase.Header>
        {title}
        </DialogBase.Header>
        <DialogBase.Content>
        {content}
        </DialogBase.Content>
      </EmAlert>
    );
    dispatcher.dispatch({type:'dialog-push',content:alert});
    return promise;
}
function SimpleConfirm(content,title){
  // return promise=>true/false
  var _resolve,_reject;
    function onCancel(){
      _resolve({type:'cancel'});
    }
    function onSubmit(){
      _resolve({type:'submit'});
    }
    var promise = new Promise(function(resolve,reject){
      _resolve = resolve;
      _reject = reject;
    });
    let alert = (
      <Confirm onCancel={onCancel} onSubmit={onSubmit}>
        <DialogBase.Header>
        {title}
        </DialogBase.Header>
        <DialogBase.Content>
        {content}
        </DialogBase.Content>
      </Confirm>
    );
    dispatcher.dispatch({type:'dialog-push',content:alert});
    return promise;
}

class Prompt extends DialogBase{
  constructor(){
    super(...arguments);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    console.log('alert.onSubmit');
    var refs = {
      promptinput:{
        value:'hahaha',
      },
    };
    var value = this.props.getValue(refs);
    if(this.props.onSubmit){
      this.props.onSubmit({value});
    }
  }
  render(){
    var title= null;
    React.Children.forEach(this.props.children,(child)=>{
      if(!title&&child.type == DialogHeader){
        title = child;
      }
    });
    if(!title){
      title = (<DialogHeader>{this.props.title||'alert'}</DialogHeader>);
    }
    var content = null;
    React.Children.forEach(this.props.children,(child)=>{
      if(child.type == DialogContent){
        content = child.props.children;
      }
    });
    return (
      <DialogBase {...this.props} noCloseButton={true} onSubmit={this.onSubmit}>
        {title}
        <DialogContent>
          {content}
        </DialogContent>
        <DialogStatusBar buttons={{submit:1,cancel:1}}/>
      </DialogBase>
    );
  }
}

function SimplePrompt(title){

}

//import {DialogLayer} from './layer';

export {DialogBase, SimplePrompt, SimpleConfirm, SimpleAlert, EmAlert, Prompt,Confirm};
