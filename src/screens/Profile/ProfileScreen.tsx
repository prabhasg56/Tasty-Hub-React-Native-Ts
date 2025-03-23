import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dangerBtnColor, primaryColor } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation/types';
import { Map } from '../../assets/images';
import ProfileCard from '../../components/Cards/ProfileCard';
import TopRatedRestaurants from '../../components/Profile/TopRatedRestaurants';
import RecentActivity from '../../components/Profile/RecentActivity';
import ListSection from '../../components/Profile/ListSection';
import MenuList from '../../components/Profile/MenuList';
import CustomButton from '../../components/Common/CustomButton';
import StaticChart from '../../components/StaticChart';

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const handleLogout = async (): Promise<void> => {
        try {
            await AsyncStorage.removeItem('user');
            navigation.replace('AuthStack');
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    };

    return (
        <ScrollView style={styles.container} >
            <View>
                <Image source={Map} style={styles.map} />
                <ProfileCard
                    username="kumargauravof"
                    name="Kumar Gaurav"
                    location="Los Angeles, CA"
                />
            </View>

            <TopRatedRestaurants />

            <RecentActivity />

            <ListSection />

            {/* <StaticChart/> */}

            <MenuList />

            <View style={styles.logoutBtn}>
                <CustomButton label="Logout"
                    primaryColor="#252525"
                    textStyle={{ color: dangerBtnColor }}
                    onPress={() => handleLogout()} />
            </View>

        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor
    },
    map: {
        width: "auto"
    },
    logoutBtn: {
        marginVertical: 20,
        marginBottom: 10,
        marginHorizontal: 20,
    }
});
