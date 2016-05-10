import React from 'react';
import styles from './index.css';

const {cloneElement} = React;

class EuiButton extends React.Component {
  render() {
    return <div className={styles.root}>{this.props.label}</div>
  }
}

class RegularButton extends React.Component {
  render() {
    return <div className={`${styles.root} ${this.props.theme || ''} regular`}>{this.props.label}</div>
  }
}
class MainButton extends React.Component {
  render() {
    return <div className={`${styles.root} ${this.props.theme || ''} ${this.props.className} main`}>{this.props.label}</div>
  }
}
class CancelButton extends React.Component {
  render() {
    return <div className={`${styles.root} ${this.props.theme || ''} cancel`}>{this.props.label}</div>
  }
}
class DisabledButton extends React.Component {
  render() {
    return <div className={`${styles.root} ${this.props.theme || ''} disabled`}>{this.props.label}</div>
  }
}
class TipButton extends React.Component {
  render() {
    return <div className={`${styles.root} ${this.props.theme || ''} tip`}>{this.props.label}</div>
  }
}
class WarningButton extends React.Component {
  render() {
    return <div className={`${styles.root} ${this.props.theme || ''} warning`}>{this.props.label}</div>
  }
}
class LoadingButton extends React.Component {
  render() {
    return (<div className={`${styles.root} ${this.props.theme || ''} loading`}>
              <span className="dot dot0"></span>
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
              <span className="dot dot3"></span>
            </div>)
  }
}
class CountingButton extends React.Component {
  constructor(arg0, arg1, arg2) {
    super(arg0, arg1, arg2);
    this.state = {
      counting: true,
      current: this.props. from || 10
    };
  }

  componentDidMount() {
    this.countDown();
  }
  componentWillUnMount() {
    clearTimeout(this.counttimer);
  }

  countDown() {
    var counting = this.state.counting;
    var current = this.state.current;
    if (current > this.props.to) {
      this.counttimer = setTimeout(this.countDown.bind(this), 1000);
    } else {
      counting = false;
    }
    if (counting > this.props.to) {
      this.setState({
        current: current - 1
      });
    }
    this.setState({
      counting: counting
    });
  }

  render() {
    if (this.state.counting) {
      return (<div className={`${styles.root} ${this.props.theme || ''} counting`}>
                <span className="count">{this.state.current}</span>
              </div>)
    } else {
      return (<MainButton {...this.props}/>);
    }
  }
}

class CustomButton extends React.Component {
  render(){
    let children = this.props.children;
    console.log(children);
    console.log(cloneElement);
    let newchildren = React.Children.map(children,(child)=>cloneElement(child,{className:`custom-icon ${child.props.className||''}`}));
    console.log(newchildren);
    return (
      <div className={`${styles.root} custom-button ${this.props.theme||''} ${this.props.className||''}`} >
      {newchildren}
      <span className="custom-label">{this.props.label}</span>
      </div>
    );
  }

}
export { EuiButton, RegularButton, MainButton, CancelButton, DisabledButton, LoadingButton, CountingButton, TipButton, WarningButton, CustomButton};
