import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import DynamicDataScreen from './DynamicData';

const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Dynamic: {
        screen: DynamicDataScreen,
    },

}, {
    initialRouteName: 'Home',
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
