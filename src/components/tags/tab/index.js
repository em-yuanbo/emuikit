import React from 'react';

class Tab extends React.Component{
  render(){
    var props = this.props;
    return (
      <div className={`${styles.root} ${props.className||''}`}>
        <div className='header'>
          <ul>
          </ul>
        </div>
        <div className="content">
          {currentTab}
        </div>
      </div>
    );
  }

}

class TabItem extends React.Component{
  render(){
    return (
      <div>
      </div>
    );
  }
}

Tab.Item = TabItem;

export {Tab};
