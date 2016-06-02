import React from 'react';

import {DropDown, TimePicker } from '../';
import {DialogBase as Dialog, EmAlert, Prompt, Confirm, SimpleAlert,SimpleConfirm, SimplePrompt} from './';
import {EmSpacer as Spacer} from '../../spacer';

import {MainButton} from '../../button';
import {dispatcher} from '../utils';

class DialogDemo extends React.Component{
  constructor(){
    super(...arguments);
    this.onClick= this.onClick.bind(this);
    this.onSimpleAlert = this.onSimpleAlert.bind(this);
    this.onAlert = this.onAlert.bind(this);
    this.onSimplePrompt = this.onSimplePrompt.bind(this);
    this.onPrompt = this.onPrompt.bind(this);
    this.onSimpleConfirm = this.onSimpleConfirm.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  onClick(){
    var that = this;
    let dialog = (
      <Dialog title='dialog.title' onCancel={()=>{console.log('dialog.canceled')}} onSubmit={()=>{console.log('dialog.submited')}} onClose={()=>{console.log('dialog.onclosed')}}>
        <Dialog.Header>
          自定义header/title/closebtn
        </Dialog.Header>
        <Dialog.Content>
          dialog主体内容
          <MainButton label='dialog2' onClick={that.onClick}/>
          <div>
          选择时间<TimePicker time={new Date()}/>
          </div>
        </Dialog.Content>
        <Dialog.StatusBar>
          dialog状态状，默认没有
        </Dialog.StatusBar>
      </Dialog>
    );
    dispatcher.dispatch({type:'dialog-replace',content:dialog});
  }

  onSimpleAlert(){
    var content = (
      <div>
        content
      </div>
    );
    content = "simple alert";
    SimpleAlert(content,'title').then(function(result){
      console.log('alert.result',result);
      // 关闭或者确定后的回调通知

    });
  }
  onAlert(){
    var that = this;

    let alert = (
      <EmAlert title='dialog.title'>
        <Dialog.Header>
          自定义header/title/closebtn
        </Dialog.Header>
        <Dialog.Content>
          prompt主体内容
          <Spacer />
          <div style={{height:200,overflow:'hidden',textAlign:'center'}}>
            <img src='http://ww4.sinaimg.cn/mw690/83f283e6gw1f44bun3ilmj20rs0ku12b.jpg'
              style={{maxWidth:'100%',maxHeight:'100%'}}
            />
          </div>
          <Spacer />
          <MainButton label='button'/>
        </Dialog.Content>
      </EmAlert>
    );
    EmAlert.show(alert).then(function(result){
      console.log('alert.result',result);
    });
  }

  onConfirm(){
    var confirm = (
      <Confirm>
        <Dialog.Header>
        title.confirm
        </Dialog.Header>
        <Dialog.Content>
         我确认xxxxx
         <Spacer />
          <div style={{height:200,overflow:'hidden',textAlign:'center'}}>
            <img src='http://ww4.sinaimg.cn/mw690/83f283e6gw1f44bun3ilmj20rs0ku12b.jpg'
              style={{maxWidth:'100%',maxHeight:'100%'}}
            />
          </div>
         <Spacer />
        </Dialog.Content>
      </Confirm>
    );
    Dialog.show(confirm).then(function(result){
      console.log('confirm.result',result);
    });
  }
  onSimpleConfirm(){
    SimpleConfirm('are you sure?','simpleconfirm title').then(result=>{
      console.log('simpleconfirm.result',result);
    });
  }

  onPrompt(){
    // dref, getValue
    var prompt = (
      <Prompt getValue={(refs)=>{return refs.promptinput.value}}>
        <Dialog.Header>
        prompt.title
        </Dialog.Header>
        <Dialog.Content>
        prompt.content
        <Spacer />
        <div>
          <input dref='promptinput'/>
        </div>
        </Dialog.Content>
      </Prompt>
    );
    Dialog.show(prompt).then(result=>{
      console.log('prompt.result',result);
    });
  }
  onSimplePrompt(){

  }
  render(){
    return (
      <div>
        <MainButton label='simplealert' onClick={this.onSimpleAlert}/>
        <Spacer />
        <MainButton label='alert' onClick={this.onAlert}/>
        <Spacer />
        <MainButton label='simpleconfirm' onClick={this.onSimpleConfirm}/>
        <Spacer />
        <MainButton label='confirm' onClick={this.onConfirm}/>
        <Spacer />
        <MainButton label='Simpleprompt' onClick={this.onSimplePrompt}/>
        <Spacer />
        <MainButton label='prompt' onClick={this.onPrompt}/>
        <Spacer />
        <MainButton label='dialog' onClick={this.onClick}/>
        <Spacer />
      </div>
    );
  }
}

export {DialogDemo};
