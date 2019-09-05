import React from 'react';
import {
    FlatList,
    ActivityIndicator,
    View,
    Text,
    ToastAndroid,
} from 'react-native';

interface Movie {
    id: string;
    title: string;
    releaseYear: string;
}

interface DynamicDataScreenState {
    isLoading: boolean;
    dataSource: Movie[];
}

class DynamicDataScreen extends React.Component<{}, DynamicDataScreenState> {
    static navigationOptions = {
        title: 'Page with dynamic data',
    };

    constructor(props: {}) {
        super(props);
        this.state = { isLoading: true, dataSource: [] };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson: { movies: Movie[] }) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });
            })
            .catch((error) => {
                ToastAndroid.show(`Something went wrong while fetching movies: ${error}`, ToastAndroid.LONG);
            });
    }

    render() {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    {this.state.isLoading ?
                        <ActivityIndicator /> :
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
                            keyExtractor={({ id }, index) => id}
                        />}
                </View>
            )

    }
}

export default DynamicDataScreen;
