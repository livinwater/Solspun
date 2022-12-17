import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import TwoFA from '../screens/TwoFA';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();
const {primary, tertiary} = Colors;
const RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerStyle:{
                    backgroundColor: 'transparent'
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
            initialRouteName='Login'
            >
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='SignUp' component={SignUp}/>
                <Stack.Screen name='TwoFA' component={TwoFA}/>
                <Stack.Screen name='HomePage' component={HomePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default RootStack;