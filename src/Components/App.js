import React from 'react';
import {
  Platform,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import Chat from './Chat';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key='home' title='Home' component={Home}/>
          <Scene key='chat' title='Chat' component={Chat}/>
        </Scene>
      </Router>
    );
  }
}