import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Common/Header';
import { primaryColor } from '../styles/theme';

// Define Props Type
interface ScreenWrapperProps {
    children: ReactNode;
    showNav?: boolean;
    title?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, showNav, title }) => {
    return (
        <>
            <Header showNav={showNav} title={title} />
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </>
    );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
    },
});
