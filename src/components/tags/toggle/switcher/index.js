import React from 'react';
import styles from './index.css';

class Switcher extends React.Component{
  constructor(props){
    super(props);
    this.state={checked:this.props.defaultValue||false};
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({checked:!this.state.checked});
  }
  componentDidMount(){

  }

  render(){
    var checkedClass = this.state.checked?'checked':'';
    return (<div className={`${styles.root} ${checkedClass}`} onClick={this.onClick}>
              <div className="track">
                <div className="thumb"></div>
              </div>
           </div>);
  }
}

export {Switcher};
