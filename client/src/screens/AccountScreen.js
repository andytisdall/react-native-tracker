import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{fontSize: 48}}>Sign Out Screen</Text>
            <Spacer>
                <Button title='Sign Oot' onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = () => {
    return {
        title: 'Account',
        tabBarIcon: <MaterialIcons name="settings-applications" size={30} color="black" />
    };
};

const styles = StyleSheet.create({

});

export default AccountScreen;