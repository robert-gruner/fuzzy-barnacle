import React from 'react';
import {
    View,
    Text,
} from 'react-native';

class DynamicDataScreen extends React.Component {
    static navigationOptions = {
        title: 'Page with dynamic data',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Just fancy...</Text>
            </View>
        );
    }
}

export default DynamicDataScreen;
