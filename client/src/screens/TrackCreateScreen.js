import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import useLocation from '../hooks/useLocation';
import '../_mockLocation';
import { Context as LocationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';
import { AntDesign } from '@expo/vector-icons'; 



const TrackCreateScreen = ({ isFocused }) => {

    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, state.recording);
    }, [state.recording]);

    const [err] = useLocation(isFocused || state.recording, callback);



    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Tracky</Text>
            <Map />
            {err ? <Text style={styles.err}>{err.message}, you cunt</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Add Track',
        tabBarIcon: <AntDesign name="pluscircle" size={24} color="black" />
    };
};

const styles = StyleSheet.create({
    err: {
        fontSize: 30,
        color: 'red',
        margin: 15
    }
});

export default withNavigationFocus(TrackCreateScreen);