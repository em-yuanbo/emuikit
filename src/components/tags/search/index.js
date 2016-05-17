import React from 'react';
import {Icon} from '../icon';
import {MainButton} from '../button';

import styles from './style.css';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {showClearButton:false,key:''};
    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onChange(){
    var key = this.refs.keyword.value;
    this.setState({key:key,showClearButton:key.length>0});
    if(this.props.onUserInputChange){
      this.props.onUserInputChange(key);
    }
  }
  onClear(){
    this.setState({key:'',showClearButton:false});
    this.refs.keyword.focus();
  }

  render() {
    var clearButton = null;
    var withButton = this.props.withButton;
    var classButton = withButton?'with-button':'';
    if(this.state.showClearButton){
      clearButton = (<Icon.Cancel className="search-clear" onClick={this.onClear}/>);
    }

    //TODO label /button 由外部传入，props.children,添加className和onClick 参考react-router的实现
    return (
      <div className={`${this.props.className || ''} ${styles.root} ${classButton}`} onClick={this.onClick}>
        <Icon.Search className="search-icon"/>
        <input className="keyword" ref="keyword" value={this.state.key} placeholder={this.props.placeholder||'search'} onChange={this.onChange} />
        {clearButton}
        {withButton&&<MainButton className="search-button" label="search"/>}
      </div>
      );
  }
}

//function SearchWithButton (props){
  //return (<Search {...props} widthButton={true}/>);
//}

export { Search as SearchBox};

