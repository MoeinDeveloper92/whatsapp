import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NotImplementedScreen from "../screens/NotImplementedScreen"
import ChatsScreen from "../screens/ChatsScreen"
const Tab = createBottomTabNavigator()
import { Ionicons } from "@expo/vector-icons"
const MainTabNavigator = () => {

    return (
        <Tab.Navigator initialRouteName="Chats">
            <Tab.Screen
                name="Status"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="logo-whatsapp" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Calls"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="call-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Camera"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            size={size}
                            color={color}
                            name="camera-outline"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Chats"
                component={ChatsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="ios-chatbubbles-sharp"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={NotImplementedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="settings-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator