import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import CustomText from './CustomText';
import { primaryColor as defaultBackgroundColor } from '../../styles/theme';

// Define Props Type
interface CustomButtonProps {
    onPress: () => void;
    label: string;
    primaryColor?: string;
    secondaryColor?: string;
    loader?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
    onPress, 
    label, 
    primaryColor, 
    loader, 
    style, 
    textStyle 
}) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, { backgroundColor: primaryColor || defaultBackgroundColor }, style]}
            disabled={loader}
            onPress={onPress}
        >
            {loader ? (
                <ActivityIndicator color="#fff" size={23} />
            ) : (
                <CustomText style={[styles.btnText, textStyle]}>
                    {label}
                </CustomText>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 10,
        marginTop: 18,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: 'black',

        // Black Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,

        // Black Shadow for Android
        elevation: 6,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 17,
    },
});
