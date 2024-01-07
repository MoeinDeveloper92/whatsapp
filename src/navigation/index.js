import { View, Text } from 'react-native'
import React from 'react'
import ChatScreen from "../screens/ChatScreen"
import ChatsScreen from "../screens/ChatsScreen"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator'

const Stack = createStackNavigator();


const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* you should put tab navigator */}
                <Stack.Screen name='Home' component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name='Chat' component={ChatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator