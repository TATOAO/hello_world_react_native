/**
 * @format
 */

import {AppRegistry} from 'react-native';
import name from './app.json';
import App from './App.tsx';

AppRegistry.registerComponent(name, () => App);
AppRegistry.runApplication(name, {rootTag: document.getElementById('root')});
