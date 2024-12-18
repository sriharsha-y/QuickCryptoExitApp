/**
 * @format
 */

import './gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { install } from 'react-native-quick-crypto';
import MyStack from './navigator';

install();

AppRegistry.registerComponent(appName, () => MyStack);
