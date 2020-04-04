import React from 'react';
import {Button, Text, View} from 'react-native';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class App extends React.Component {
    state = {
        loading: false,
        expoPushToken: '',
    };

    refreshPushNotificationsToken = async () => {
        try {
            this.setState({loading: true});
            if (Constants.isDevice) {
                const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                    finalStatus = status;
                }
                if (finalStatus !== 'granted') {
                    alert('Failed to get push token for push notification!');
                    return;
                }
                const token = await Notifications.getExpoPushTokenAsync();
                this.setState({expoPushToken: token});
            } else {
                alert('Must use physical device for Push Notifications');
            }
        } catch (e) {
            alert(e);
        }
        this.setState({loading: false});
    };

    async componentDidMount() {
        await this.refreshPushNotificationsToken();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Token</Text>
                    <Text style={{fontSize: 18}}>
                        {this.state.loading
                            ? 'Loading...'
                            : this.state.expoPushToken || '<empty>'
                        }
                    </Text>
                </View>
                <Button title="Refresh push notifications token" onPress={this.refreshPushNotificationsToken}/>
            </View>
        );
    }
}
