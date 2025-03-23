import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '../../components/ScreenWrapper';
import { primaryColor } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation/types';

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
        <ScreenWrapper title="" showNav={false} >
            <View style={styles.container}>
                <Button title="Logout" color={primaryColor} onPress={handleLogout} />
            </View>
        </ScreenWrapper>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
});
