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
    this.onAlert = this.onAlert.bind(this);
    this.onPrompt = this.onPrompt.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  onClick(){
    var that = this;
    let dialog = (
      <Dialog title='dialog.title'>
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
  onAlert(){
    var that = this;

    let alert = (
      <EmAlert title='dialog.title'>
        <Dialog.Header>
          自定义header/title/closebtn
        </Dialog.Header>
        <Dialog.Content>
          prompt主体内容
          <MainButton label='dialog2' onClick={that.onClick}/>
          <div>
          选择时间<TimePicker time={new Date()}/>
          </div>
        </Dialog.Content>
      </EmAlert>
    );

    dispatcher.dispatch({type:'dialog-push',content:alert});
  }
  onConfirm(){
    var confirm = (
      <div />

    );
    dispatcher.dispatch({type:'dialog-push',content:confirm});

  }
  onPrompt(){
    var prompt = (
      <div />

    );

    dispatcher.dispatch({type:'dialog-push',content:prompt});
  }
  render(){
    return (
      <div>
        <MainButton label='dialog' onClick={this.onClick}/>
        <Spacer />
        <MainButton label='alert' onClick={this.onAlert}/>
        <Spacer />
        <MainButton label='confirm' onClick={this.onConfirm}/>
        <Spacer />
        <MainButton label='prompt' onClick={this.onPrompt}/>
      </div>
    );
  }
}

export {DialogDemo};
