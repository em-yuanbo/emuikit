//require('normalize.css/normalize.css');
var styles = require('styles/App.css');

import React from 'react';
import {SearchBox} from './tags/search';
import {EmInput} from './tags/form';
import {Loading} from './tags/loading';

import {EmSpacer as Spacer} from './tags/spacer';
import {Icon} from './tags/icon';
import {Switcher} from './tags/toggle/switcher';

import {ToggleTag} from './tags/toggle/tag';
import {ToggleButton} from './tags/toggle/tagbutton';

import {Checkbox,CheckboxWithoutBackground} from './tags/toggle/checkbox';

import { MainButton, RegularButton, CancelButton, DisabledButton, LoadingButton, CountingButton, TipButton, WarningButton, CustomButton} from './tags/button';

class AppComponent extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div>loading</div>
        <Spacer />
        <div style={{width:200,height:20}}>
          <Loading />
        </div>
        <Spacer />
        <div>text input</div>
        <Spacer />
        <div style={{width:200,height:60}}>
          <EmInput placeholder="input"/>
        </div>
        <Spacer />
        <div>search</div>
        <Spacer />
        <div style={{width:300}}>
          <SearchBox placeholder="search" withButton={true}/>
        </div>
        <Spacer />
        <div style={{width:300}}>
          <SearchBox placeholder="search" withButton={false}/>
        </div>
        <Spacer />
        <div>toggled</div>
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

        <div>buttons</div>
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
        <div>icon</div>
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
