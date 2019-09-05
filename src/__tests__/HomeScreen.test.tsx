import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation';

import HomeScreen from '../HomeScreen';

const navMock = { navigate: jest.fn() } as unknown as NavigationScreenProp<NavigationRoute<NavigationParams>>;

it('renders correctly', () => {
  renderer.create(<HomeScreen navigation={navMock}/>);
});
