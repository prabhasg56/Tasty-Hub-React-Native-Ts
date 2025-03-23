import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation/types';
import CustomText from '../../components/Common/CustomText';

const ListScreen: React.FC = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    return (
        <ScreenWrapper title="" showNav={false}>
            <View style={styles.container}>
                <CustomText fontSize={16}>
                    Lists
                </CustomText>
            </View>
        </ScreenWrapper>
    );
};

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
