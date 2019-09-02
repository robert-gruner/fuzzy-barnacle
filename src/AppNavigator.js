import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const MainNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
