import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Stack Navigation Types
export type RootStackParamList = {
    MapStack: undefined;
    PeopleStack: undefined;
    AuthStack: undefined;
    ListStack: undefined;
    HitListStack: undefined;
    ProfileStack: undefined;
    BottomTabRoutes: undefined;
    LoginScreen: undefined;
    HitListScreen: undefined;
    ProfileScreen: undefined;
    MapScreen: undefined;
    PeopleScreen: undefined;
    ListScreen: undefined;
};

// Bottom Tab Navigation Types
export type BottomTabParamList = {
    Map: undefined;
    People: undefined;
    List: undefined;
    HitList: undefined;
    Profile: undefined;
};

// Navigation Prop Types for Screens
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>;
export type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AuthStack'>;
export type BottomTabNavigationCustomProp = BottomTabNavigationProp<BottomTabParamList, 'People'>;
