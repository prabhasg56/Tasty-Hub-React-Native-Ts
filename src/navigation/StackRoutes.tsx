import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTabRoutes from './BottomTabRoutes';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import { RootStackParamList } from './types';
import HitListScreen from '../screens/HitLists/HitListScreen';
import MapScreen from '../screens/Map/MapScreen';
import PeopleScreen from '../screens/People/PeopleScreen';
import ListScreen from '../screens/List/ListScreen';

const Stack = createStackNavigator<RootStackParamList>();

type StackScreenProps = {
  navigation: NavigationProp<RootStackParamList>;
  route: any;
};

export const MapStack: React.FC<StackScreenProps> = () => (
  <Stack.Navigator initialRouteName="MapScreen">
    <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export const PeopleStack: React.FC<StackScreenProps> = () => (
  <Stack.Navigator initialRouteName="PeopleScreen">
    <Stack.Screen name="PeopleScreen" component={PeopleScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export const ListStack: React.FC<StackScreenProps> = () => (
  <Stack.Navigator initialRouteName="ListScreen">
    <Stack.Screen name="ListScreen" component={ListScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export const HitListStack: React.FC<StackScreenProps> = () => (
  <Stack.Navigator initialRouteName="HitListScreen">
    <Stack.Screen name="HitListScreen" component={HitListScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export const AuthStack: React.FC<StackScreenProps> = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export const ProfileStack: React.FC<StackScreenProps> = () => (
  <Stack.Navigator initialRouteName="ProfileScreen">
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const StackRoutes: React.FC = () => {
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);

  const routeArray = [
    {
      name: 'MapStack',
      component: MapStack,
      options: { headerShown: false },
    },
    {
      name: 'PeopleStack',
      component: PeopleStack,
      options: { headerShown: false },
    },
    {
      name: 'ListStack',
      component: ListStack,
      options: { headerShown: false },
    },
    {
      name: 'HitListStack',
      component: HitListStack,
      options: { headerShown: false },
    },
    {
      name: 'AuthStack',
      component: AuthStack,
      options: { headerShown: false },
    },
    {
      name: 'ProfileStack',
      component: ProfileStack,
      options: { headerShown: false },
    },
    {
      name: 'BottomTabRoutes',
      component: BottomTabRoutes,
      options: { headerShown: false },
    },
  ];

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('user');
        setInitialRoute(token ? 'BottomTabRoutes' : 'AuthStack');
      } catch (error) {
        console.error('Error getting token:', error);
        setInitialRoute('AuthStack');
      }
    };

    checkToken();
  }, []);

  if (!initialRoute) {
    return null; // Show a loader if necessary
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#2157AD' },
        headerTitle: '',
      }}
    >
      {routeArray.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name as keyof RootStackParamList}
          component={route.component}
          options={route.options as StackNavigationOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackRoutes;

const styles = StyleSheet.create({});
