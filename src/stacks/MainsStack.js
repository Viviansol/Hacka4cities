import React from 'react';
import {createStackNavigator} from '@react-nvigation/stack'
import Preload from '../screens/signIn';
import SignIn from '../screens/preload';

const Stack = createStackNavigator();


export default() =>{
    <Stack.Navigator
    initialRouteName = "Preload"
    screenOptions ={{
        headerShown: false
    }}>
        <Stack.Screen name = "Preload " component = {Preload} />
        <Stack.Screen name = "SignIn " component = {SignIn} />

    </Stack.Navigator>
}