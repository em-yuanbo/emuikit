//require('normalize.css/normalize.css');
var styles = require('styles/App.css');

import React from 'react';
window.React = React;
//import update from 'react/lib/update.js';
//

import {DialogDemo} from './tags/popup/dialog/demo.js';
import {Tab} from './tags/tab';

import {DropDown, TimePicker } from './tags/popup';


import {List,BigList} from './tags/list';

import {Face} from './tags/face';

import {Avatar} from './tags/avatar';
import {Status as AvatarStatus} from './tags/avatar/status';
import {ChannelIcon} from './tags/channel';

import {SearchBox} from './tags/search';
import {Form, FormDemo, FormDemo2, EmInput, Radio, RadioGroup} from './tags/form';
import {Loading, ProgressBar} from './tags/loading';

import {EmSpacer as Spacer} from './tags/spacer';
import {Icon} from './tags/icon';
import {Switcher} from './tags/toggle/switcher';

import {ToggleTag} from './tags/toggle/tag';
import {ToggleButton} from './tags/toggle/tagbutton';

import {Checkbox,CheckboxWithoutBackground} from './tags/toggle/checkbox';

import { MainButton, RegularButton, CancelButton, DisabledButton, LoadingButton, CountingButton, TipButton, WarningButton, CustomButton} from './tags/button';

class Header extends React.Component{
  render(){
    return (
      <div className="" style={{height:40,lineHeight:'40px',fontSize:16,textIndent:20,backgroundColor: 'rgb(242, 242, 242)'}}>
        {this.props.children}
      </div>
    );
  }
}

class AppComponent extends React.Component {
  constructor(){
    super(...arguments);
    let list = Array.from(new Array(30)).map((_,i)=>({index:i,label:`label ${i}`}));
    this.state={progress:20,list:list};
  }

  componentDidMount(){
    var that = this;
    this.interval = setInterval(function(){
      that.setState({progress:Math.random()*100});
      //clearInterval(that.interval);
    },3000);
  }

  componentWillUnMount(){
    clearTimeout(this.interval);
  }

  renderMessage(props){
    return (
      <div>
        <Avatar />
        <div>
          <p>nicename</p>
          <div>
            hello{props.index}
          </div>
        </div>
      </div>
    );
  }

  itemRender(props){
    return (
      <li style={{height:40}} key={props.index}>props.li {props.index}</li>
    );
  }
  onChangeTab(){
    console.log('onChangeTab');

  }
  onDialogOpen(){
    console.log('onDialogOpen');
    alert('dialog');

  }

  render() {
    return (
      <div className={styles.root} style={{position:'relative',padding:10}}>
      <Header>dialog</Header>
        <Spacer />
        <DialogDemo />
        <MainButton label='dialog' onClick={this.onDialogOpen}/>

        <Spacer />
      <Header>popup</Header>
        <Spacer />
        <div>
          <span style={{marginRight:10}}>在线状态:</span><DropDown.OnLineStatus />
        </div>
        <Spacer />
        <div>
        选择时间<TimePicker time={new Date()}/>
        </div>
        <Spacer />
 <Header>form </Header>
        <Spacer />
        <FormDemo ref='form'/>
        <Spacer />
        <FormDemo2 ref='form2'/>
        <Spacer />
        <Header>form inputs - radiogroups</Header>
        <Spacer />
        <div>
          性别：
          <Radio name='gender' checked={true} value='male'/> 男
          <Radio name='gender' value='female'/> 女
        </div>
        <Spacer />
        <div style={{}}>
          人数：
          <Radio name='amount'  value='0'/> <span style={{marginRight:10}}>0-100</span>
          <Radio name='amount' checked={true} value='1'/> <span style={{marginRight:10}}>100-500</span>
          <Radio name='amount'  value='2'/> <span style={{marginRight:10}}>500+</span>
        </div>
        <Spacer />
        <div>
          <span style={{marginRight:10}}>工作时:</span>
          <Checkbox name='workday' defaultValue={true} value="周一"/><span style={{marginRight:10}}>周一</span>
          <Checkbox name='workday' defaultValue={true} value="周二"/><span style={{marginRight:10}}>周二</span>
          <Checkbox name='workday' defaultValue={true} value="周三"/><span style={{marginRight:10}}>周三</span>
          <Checkbox name='workday' defaultValue={true} value="周四"/><span style={{marginRight:10}}>周四</span>
          <Checkbox name='workday' defaultValue={true} value="周五"/><span style={{marginRight:10}}>周五</span>
          <Checkbox name='workday' value="周六"/><span style={{marginRight:10}}>周六</span>
          <Checkbox name='workday' value="周日"/><span style={{marginRight:10}}>周日</span>
        </div>

        <Spacer />
        <Header>tab</Header>
        <Spacer />

        <Tab className='tab-demo' onChange={this.onChangeTab} defaultActive={'a'}>
          <Tab.Item id={'a'}>
            <Tab.ItemHeader>
              <div className='item-header'>item.1<span className='icon'>{this.state.progress|0}</span></div>
            </Tab.ItemHeader>
            <div className='page-0' type={Tab.Item}>
              page0
              <div>
              选择时间<TimePicker time={new Date()}/>
              </div>
            </div>
          </Tab.Item>
          <Tab.Item id={'b'} header='item.2'>
            <div className='page-1'type={Tab.Item}>
              page1
              <List onSelect={()=>{}} style={{}}>
                <List.Item>
                  <Avatar key={1} onClick={()=>{}}/>
                  <div onClick={()=>{}}> haha </div>
                </List.Item>
                <List.Item>
                  <Avatar>
                    <AvatarStatus.OnLine className="avatar-status"/>
                  </Avatar>
                </List.Item>
                <List.Item>
                  <Avatar>
                    <ChannelIcon.Weibo />
                  </Avatar>
                </List.Item>
                <List.Item>
                  <Avatar>
                    <ChannelIcon.Weibo />
                  </Avatar>
                </List.Item>
                <List.Item>
                  <Avatar>
                    <AvatarStatus.OnLine className="avatar-status"/>
                  </Avatar>
                </List.Item>
                <List.Item>
                  <Avatar>
                  </Avatar>
                </List.Item>
              </List>
            </div>
          </Tab.Item>
          <Tab.Item id={'c'} header="item.3">
            <div className='page-2' type={Tab.Item}>
              page2
            </div>
            <div style={{width:300}}>
              <SearchBox placeholder="search" withButton={true}/>
            </div>
          </Tab.Item>
          <Tab.Item id={'d'} header='nested'>
          nested
          </Tab.Item>
        </Tab>

        <Spacer />
        <Header>list</Header>
        <Spacer />
        <List onSelect={()=>{}} style={{width:300}}>
          <List.Item>
            <Avatar key={1} onClick={()=>{}}/>
            <div onClick={()=>{}}> haha </div>
          </List.Item>
          <List.Item>
            <Avatar>
              <AvatarStatus.OnLine className="avatar-status"/>
            </Avatar>
          </List.Item>
          <List.Item>
            <Avatar>
              <ChannelIcon.Weibo />
            </Avatar>
          </List.Item>
          <List.Item>
            <Avatar>
              <ChannelIcon.Weibo />
            </Avatar>
          </List.Item>
          <List.Item>
            <Avatar>
              <AvatarStatus.OnLine className="avatar-status"/>
            </Avatar>
          </List.Item>
          <List.Item>
            <Avatar>
            </Avatar>
          </List.Item>
        </List>
        <Spacer />
        <Header>unLimited List</Header>
        <Spacer />
        <BigList items={this.state.list} itemRender={this.itemRender} itemHeight={30} itemBuffer={4}/>
        <Spacer />
        <Header>Face</Header>
        <Spacer />
        <Face.All />
        <Spacer />
        <Header>Avatar</Header>
        <Spacer />
        <Avatar />
        <Spacer />
        <Avatar.Small/>
        <Spacer />
        <Avatar>
        <AvatarStatus.OnLine className="avatar-status"/>
        </Avatar>
        <Spacer />
        <Avatar>
          <ChannelIcon.Weibo />
        </Avatar>
        <Spacer />
        <Header>loading</Header>
        <Spacer />
        <div style={{width:200,height:20}}>
          <ProgressBar start={20} progress={this.state.progress}/>
        </div>
        <Spacer />
        <div style={{width:200,height:20}}>
          <Loading />
        </div>
        <Spacer />
        <Header>text input</Header>
        <Spacer />
        <div style={{width:200,height:60}}>
          <EmInput placeholder="input"/>
        </div>
        <Spacer />
        <Header>search</Header>
        <Spacer />
        <div style={{width:300}}>
          <SearchBox placeholder="search" withButton={true}/>
        </div>
        <Spacer />
        <div style={{width:300}}>
          <SearchBox placeholder="search" withButton={false}/>
        </div>
        <Spacer />
        <Header>toggled</Header>
        <Spacer />
        <ToggleButton content="Toggle button"/>
        <ToggleButton content="Toggle button"/>
        <ToggleButton content="Toggle button"/>
        <ToggleButton content="Toggle button"/>
        <ToggleButton content="Toggle button"/>
        <ToggleButton content="Toggle button"/>
        <Spacer />
        <ToggleTag content="Toggle Tag"/>
        <ToggleTag content="Toggle Tag"/>
        <ToggleTag content="Toggle Tag"/>
        <ToggleTag content="Toggle Tag"/>
        <ToggleTag content="Toggle Tag"/>
        <ToggleTag content="Toggle Tag"/>
        <Spacer />
        <Checkbox label="Check0"/>
        <Spacer />
        <CheckboxWithoutBackground label="Check0" defaultValue={true}/>
        <Spacer />
        <Checkbox label="Check0" defaultValue={true}/>
        <Spacer />
        <Switcher defaultValue={true}/>
        <Spacer />

        <Header>buttons</Header>
        <Spacer />
        <CustomButton theme="big main" label="main">
          <Icon.Cancel className="icon-"/>
        </CustomButton>
        <Spacer />
        <CustomButton theme="main" label="add">
          <Icon.Add className="icon-add"/>
        </CustomButton>
        <Spacer />
        <CustomButton theme="main" label="unfold">
          <Icon.Minus className="icon-add"/>
        </CustomButton>
        <Spacer />
        <MainButton label="main"/>
        <Spacer />
        <RegularButton label="Regular"/>
        <Spacer />
        <CancelButton label="Cancel"/>
        <Spacer />
        <DisabledButton label="Disabled"/>
        <Spacer />
        <LoadingButton label="Loading"/>
        <Spacer />
        <CountingButton label="Done" from={10} to={-1}/>
        <Spacer />
        <TipButton label="Tip"/>
        <Spacer />
        <WarningButton label="Warning"/>
        <Spacer />
        <div>Big</div>
        <Spacer />
        <MainButton theme="big" label="main"/>
        <Spacer />
        <RegularButton theme="big" label="Regular"/>
        <Spacer />
        <CancelButton theme="big" label="Cancel"/>
        <Spacer />
        <DisabledButton theme="big" label="Disabled"/>
        <Spacer />
        <LoadingButton theme="big" label="Loading"/>
        <Spacer />
        <CountingButton theme="big" label="Done" from={10} to={0}/>
        <Spacer />
        <TipButton theme="big" label="Tip"/>
        <Spacer />
        <WarningButton theme="big" label="Warning"/>
        <Spacer />
        <Header>icon</Header>
        <Spacer />
        <Icon.Edit />
        <Spacer />
        <Icon.Cancel/>
        <Spacer />
        <Icon.Drag/>
        <Spacer />
        <Icon.Minus/>
        <Spacer />
        <Icon.Add/>
        <Spacer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
