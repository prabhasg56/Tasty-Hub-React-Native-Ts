import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

// Define Props Interface
interface CustomTextProps extends TextProps {
    onPress?: () => void;
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    style?: object;
    children: ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({
    onPress,
    color = "#969696",
    fontFamily = 'Roboto-Medium',
    fontSize = 14,
    style = {},
    children,
    ...rest
}) => {
    return (
        <Text
            onPress={onPress}
            ellipsizeMode="tail"
            style={[styles.text, { color, fontFamily, fontSize }, style]}
            {...rest} // Allows additional props like numberOfLines
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#969696",
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
    },
});

export default React.memo(CustomText);
