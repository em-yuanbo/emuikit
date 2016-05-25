/**
 * TODO
 * validation
 * focus, onChange, onFocus.
 * isValidate()
 * showError
 * shouldUpdate
 * propsReceived
 *
 *
 */
import React from 'react';

import {EmInput} from './input';
import {Radio,RadioGroup} from './radio';
import {Checkbox} from '../toggle/checkbox';
import {Switcher} from '../toggle/switcher';

import { MainButton } from '../button';
import {EmSpacer as Spacer} from '../spacer';

import styles from './style.css';

import {validation} from './utils/';
const {required,maxlength,range,email} = validation;

class Form extends React.Component{
  constructor(){
    super(...arguments);
    this.onSubmit=this.onSubmit.bind(this);
    this.controls = {};
    // rebond;
    var newchildren = this.bondControls(this.props.children);
    this.state={newChildren:newchildren};
  }
  onSubmit(){
    var data = this.collectForm();
    console.log('data',data);
  }
  collectForm(){
    var controls = this.controls;
    var keys = Object.keys(controls);
    var datas = {};
    keys.forEach(key=>{
      var c = controls[key];
      var value;
      if(Array.isArray(c)){
        value = c.map(_c=>_c.getValue()).filter(v=>v!=null);
        //value = controls[key].getValue();
      }else{
        value = c.getValue();
      }
      datas[key]=value;
    });
    return datas;
  }
  bondControls(children){
    var newChildren = React.Children.map(children,child=>{
      if(React.isValidElement(child)){
        var newchild = null;
        var props = {};
        if(child.type.canBindForm&&child.type.canBindForm(this)){
          props.form = this;
          newchild = React.cloneElement(child,props);
        }
        //if(0){
          //if(child.type==Radio){
            //props.onChange=()=>{
              //console.log('radio.change.');
            //};
            //props.form = this;
            //newchild = React.cloneElement(child,props);
          //}else if(child.type==EmInput){
            //props.onChange=()=>{
              //console.log('input.change');
            //};
            //props.form = this;
            //newchild = React.cloneElement(child,props);
            ////this.controls[child.props.name]=newchild;
          //}else if(child.type==Checkbox){
            //props.form = this;
            //newchild = React.cloneElement(child,props);

          //}else if(child.type==Switcher){
            //props.form = this;
            //newchild = React.cloneElement(child,props);

          //}
        //}
        else{
          newchild = React.cloneElement(child,{children:this.bondControls(child.props.children)});
        }
        return newchild;
      }
      return child;
    });
    return newChildren;
  }

  register(control){
    var name = control.props.name;
    console.log('register',name,control);
    var temp = {[name]:this.controls[name]};
    var r = control.register(temp);
    //this.controls = Object.assign(this.controls,r);
    this.controls[name]=r[name];
    //this.controls[name]=control;
  }

  //parseControls(children,depth=0){
    //React.Children.forEach(children,child=>{
      //if(React.isValidElement(child)){
        //if(child.type == Radio){
          //React.cloneElement(child,{ref:''});
          //return;
        //}else if(child.type==EmInput){
          //return;
        //}
      //}
      //if(child.props&&child.props.children){
        //this.parseControls(child.props.children,depth+1);
      //}
    //});
  //}

  render(){
    return (
      <div className={`${styles.form}`}>
      {
        this.state.newChildren
      }
      </div>
    );
  }
}

class FormDemo extends React.Component{
  constructor(){
    super(...arguments);
    this.state={data:{}};
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    console.log('onsubmit',this.refs);
    var datas = this.refs.form.collectForm();
    console.log(datas);
    this.setState({data:datas});
  }
  render(){
    var _validation = {
      'email':[required('email or phone is required')],
      'validate phone number':[required('email or phone is required'),range(1,10,'between 1 and 10')]
    };
    return (
      <div>
        <Form ref='form'>
          <div>
          demo
          </div>
          <div className='form-row'>
            <div className='form-label' ref='label'>
              Email:
            </div>
            <div className='form-control'>
              <EmInput validation={[required('email required'),maxlength(10,'maxlength 10')]} ref='email' name='email' placeholder='email'/>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-label'>
              Password:
            </div>
            <div className='form-control'>
              <EmInput validation={_validation} ref='password' name='password' type='password' placeholder='password'/>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-label'>
              gender:
            </div>
            <div className='form-control'>
              <Radio ref='gender1' name='gender1' checked={true} value='male'/> 男
              <Radio name='gender1' value='female'/> 女
            </div>
          </div>
          <Spacer />
          <div className='form-row'>
            <div className='form-label'>
              工作时:
            </div>
            <div className='form-control'>
              <Checkbox name='workday' defaultValue={true} value="周一"/><span style={{marginRight:10}}>周一</span>
              <Checkbox name='workday' defaultValue={true} value="周二"/><span style={{marginRight:10}}>周二</span>
              <Checkbox name='workday' defaultValue={true} value="周三"/><span style={{marginRight:10}}>周三</span>
              <Checkbox name='workday' defaultValue={true} value="周四"/><span style={{marginRight:10}}>周四</span>
              <Checkbox name='workday' defaultValue={true} value="周五"/><span style={{marginRight:10}}>周五</span>
              <Checkbox name='workday' value="周六"/><span style={{marginRight:10}}>周六</span>
              <Checkbox name='workday' value="周日"/><span style={{marginRight:10}}>周日</span>
            </div>
          </div>
          <Spacer />
          <div className='form-row'>
            <div className='form-label'>
              开关:
            </div>
            <div className='form-control'>
              <Switcher name='switch' defaultValue={true}/>
            </div>
          </div>
          <Spacer />
          <div className='form-row'>
            <MainButton type='submit' onClick={this.onSubmit} label="submit"/>
          </div>
        </Form>
        <div>
        {JSON.stringify(this.state.data)}
        </div>
        </div>
    );
  }
  data(){
  }
}

class FormDemo2 extends React.Component{
  constructor(){
    super(...arguments);
    this.state={data:{}};
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(){
    console.log('onsubmit',this.refs);
    var datas = this.refs.form.collectForm();
    console.log(datas);
    this.setState({data:datas});
  }
  render(){
    return (
      <div>
        <Form ref='form'>
          <div>
          demo
          </div>
          <div className='form-row'>
            <div className='form-label' ref='label'>
              Email:
            </div>
            <div className='form-control'>
              <EmInput validation={[required('email required'),maxlength(10,'maxlength 10')]} ref='email' name='email' placeholder='email'/>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-label'>
              Password:
            </div>
            <div className='form-control'>
              <EmInput validation={{'email':[required('email or phone is required')],'validate phone number':[required('email or phone is required'),range(1,10,'between 1 and 10')]}} ref='password' name='password' type='password' placeholder='password'/>
              <EmInput validation={[required('email or phone is required'),{'email':[email('email is required')],'phone':[range(1,10,'between 1 and 10')]}]} ref='password' name='password' type='password' placeholder='password'/>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-label'>
              gender:
            </div>
            <div className='form-control'>
              <Radio name='gender2' value='male'/> 男
              <Radio name='gender2' checked={true} value='female'/> 女
            </div>
          </div>
          <Spacer />
          <div className='form-row'>
            <div className='form-label'>
              工作时:
            </div>
            <div className='form-control'>
              <Checkbox name='workday' defaultValue={true} value="周一"/><span style={{marginRight:10}}>周一</span>
              <Checkbox name='workday' defaultValue={true} value="周二"/><span style={{marginRight:10}}>周二</span>
              <Checkbox name='workday' defaultValue={true} value="周三"/><span style={{marginRight:10}}>周三</span>
              <Checkbox name='workday' defaultValue={true} value="周四"/><span style={{marginRight:10}}>周四</span>
              <Checkbox name='workday' defaultValue={true} value="周五"/><span style={{marginRight:10}}>周五</span>
              <Checkbox name='workday' value="周六"/><span style={{marginRight:10}}>周六</span>
              <Checkbox name='workday' value="周日"/><span style={{marginRight:10}}>周日</span>
            </div>
          </div>
          <Spacer />
          <div className='form-row'>
            <div className='form-label'>
              开关:
            </div>
            <div className='form-control'>
              <Switcher name='switch' defaultValue={true}/>
            </div>
          </div>
          <Spacer />
          <div className='form-row'>
            <MainButton type='submit' onClick={this.onSubmit} label="submit"/>
          </div>
        </Form>
        <div>
        {JSON.stringify(this.state.data)}
        </div>
        </div>
    );
  }
  data(){
  }
}

export {EmInput,Radio,RadioGroup,Form, FormDemo, FormDemo2};
