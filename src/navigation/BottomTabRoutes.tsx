import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import { HitListStack, ListStack, MapStack, PeopleStack, ProfileStack } from './StackRoutes';
import { lightColor, primaryColor } from '../styles/theme';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabRoutes: React.FC = () => (
    <Tab.Navigator
        initialRouteName="People"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: string;
                switch (route.name) {
                    case "Map":
                        iconName = 'map';
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    case "People":
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    case "List":
                        // iconName = 'tasks';
                        // return <FontAwesome5 name={iconName} size={size} color={color} />;
                        iconName ='table-heart'
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;

                    case "HitList":
                        iconName =  focused ? 'bookmark' : 'bookmark-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                    case "Profile":
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                }
            },
            tabBarActiveTintColor: '#FF9D9D',
            tabBarInactiveTintColor: '#969696',
            tabBarStyle: { backgroundColor: primaryColor },
        })}
    >
        <Tab.Screen name="Map" component={MapStack} options={{ tabBarLabel: "MAP", headerShown: false }} />
        <Tab.Screen name="People" component={PeopleStack} options={{ tabBarLabel: "PEOPLE", headerShown: false }} />
        <Tab.Screen name="List" component={ListStack} options={{ tabBarLabel: "LISTS", headerShown: false }} />
        <Tab.Screen name="HitList" component={HitListStack} options={{ tabBarLabel: "HITLIST", headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarLabel: "Profile", headerShown: false }} />
    </Tab.Navigator>
);

export default BottomTabRoutes;
