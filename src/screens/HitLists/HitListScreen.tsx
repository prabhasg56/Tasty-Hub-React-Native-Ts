import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation/types';
import CustomText from '../../components/Common/CustomText';

const HitListScreen: React.FC = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return (
        <ScreenWrapper title="" showNav={false}>
            <View style={styles.container}>
                <CustomText fontSize={16}>
                    Hit Lists
                </CustomText>
            </View>
        </ScreenWrapper>
    );
};

export default HitListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
