import React from 'react';
import styles from './style.css';
class Tab extends React.Component{
  constructor(){
    super(...arguments);
    this.state={selectedId:this.props.defaultActive,currentTab:null};
    this.onTabItemClick = this.onTabItemClick.bind(this);
  }

  onTabItemClick(id,e){
    this.setState({selectedId:id});
  }

  getHeadersAndViews(children){
    var heads = [];
    var views=[];
    var selectedId= this.state.selectedId;
    var currentIndex=0;

    React.Children.forEach(children,(item,index)=>{
      var cs = item.props.children;
      var head = null;
      var view = [];
      var id = item.props.id||index;
      if(id==selectedId ){
        currentIndex = index;
      }

      React.Children.forEach(cs,(_child)=>{
        //get header
        if(_child.type ==  ItemHeader){
          head = (<li onClick={()=>this.onTabItemClick(id)} className={`tab-item ${id==selectedId?'active':''}`} key={index}><div className='tab-item-inner'>{_child.props.children}</div></li>);
        }else{
          view.push(_child);
        }
      });

      if(!head && view){
        head = (<li onClick={()=>this.onTabItemClick(id)} className={`tab-item ${id==selectedId?'active':''}`} key={index}><div className='tab-item-inner'>{item.props.header||''}</div></li>);
      }

      heads.push(head);
      views.push(view);
    });

    return {heads,views,currentView:views[currentIndex]};
  }

  render(){
    // 收集headers,
    // 计算currentTab
    var props = this.props;
    var children = props.children;
    var parsed = this.getHeadersAndViews(children)
    var heads = parsed.heads;
    var views = parsed.views;
    var currentTab = parsed.currentView;

    return (
      <div className={`${styles.root} ${props.className||''}`}>
        <div className='tab-header'>
          <ul>
          {heads}
          </ul>
        </div>
        <div className="tab-content">
          {currentTab}
        </div>
      </div>
    );
  }
}

class TabItem extends React.Component{
  render(){
    return ( null);
  }
}

class ItemHeader extends React.Component{
  render(){
    return null;
  }
}
Tab.ItemHeader = ItemHeader;
Tab.Item = TabItem;

export {Tab};
