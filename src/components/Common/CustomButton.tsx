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
        marginHorizontal: 10,
        marginTop: 18,
        borderRadius: 6,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 17,
    },
});
