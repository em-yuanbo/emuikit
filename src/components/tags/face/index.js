/**
 * 表情
 * 表情系列: 微博系列，微信系列，qq系列
 *
 *
 *
 */
import React from 'react';

import styles from './style.css';

class BaseFace extends React.Component {
  render(){
    return (
      <div className={`${styles.root}`} onClick={this.props.onClick}>
        <img src={this.props.src}/>
      </div>
    );
  }
}

var face_map = {
  '[):]': 'ee_1',
  '[:D]': 'ee_2',
  '[;)]': 'ee_3',
  '[:-o]': 'ee_4',
  '[:p]': 'ee_5',
  '[(H)]': 'ee_6',
  '[:@]': 'ee_7',
  '[:s]': 'ee_8',
  '[:$]': 'ee_9',
  '[:(]': 'ee_10',
  '[:\'(]': 'ee_11',
  '[:|]': 'ee_12',
  '[(a)]': 'ee_13',
  '[8o|]': 'ee_14',
  '[8-|]': 'ee_15',
  '[+o(]': 'ee_16',
  '[<o)]': 'ee_17',
  '[|-)]': 'ee_18',
  '[*-)]': 'ee_19',
  '[:-#]': 'ee_20',
  '[:-*]': 'ee_21',
  '[^o)]': 'ee_22',
  '[8-)]': 'ee_23',
  '[(|)]': 'ee_24',
  '[(u)]': 'ee_25',
  '[(S)]': 'ee_26',
  '[(*)]': 'ee_27',
  '[(#)]': 'ee_28',
  '[(R)]': 'ee_29',
  '[({)]': 'ee_30',
  '[(})]': 'ee_31',
  '[(k)]': 'ee_32',
  '[(F)]': 'ee_33',
  '[(W)]': 'ee_34',
  '[(D)]': 'ee_35'
};

const Face = {
  All:function(){
    var allfaces = Object.keys(face_map).map((key,index)=>{
      return <BaseFace key={index} src={`http://sandbox.kefu.easemob.com/images/faces/${face_map[key]}.png`} />
    });
    return (
      <div>
      {allfaces}
      </div>
    );

  }

};

export { BaseFace, Face };
