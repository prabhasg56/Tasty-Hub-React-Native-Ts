import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomText from './CustomText';
import { primaryColor } from '../../styles/theme';

// Define Props Type
interface CustomTextInputProps {
    labelName: string;
    value: string;
    name: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    multiline?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'decimal-pad';
    error_msg?: string;
    error?: boolean;
    numberOfLines?: number;
    maxLength?: number;
    disabled?: boolean;
    placeholder?: string;
    handleInput: (name: string, text: string) => void;
    secureTextEntry?: boolean;
    style?: ViewStyle;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    labelName,
    value,
    name,
    autoCapitalize = 'none',
    multiline = false,
    keyboardType = 'default',
    error_msg = '',
    error = false,
    numberOfLines = 1,
    maxLength = 255,
    disabled = false,
    placeholder = '',
    handleInput,
    secureTextEntry = false,
    style
}) => {
    const [showPasswordText, setShowPasswordText] = useState(secureTextEntry);

    return (
        <KeyboardAvoidingView style={[styles.container, style]}>
            <TextInput
                label={labelName}
                disabled={disabled}
                mode="outlined"
                value={value}
                onChangeText={(text) => handleInput(name, text)}
                placeholder={placeholder}
                maxLength={maxLength}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={numberOfLines}
                autoCapitalize={autoCapitalize}
                textColor={primaryColor}
                outlineColor={primaryColor}
                activeOutlineColor={primaryColor}
                style={styles.input}
                secureTextEntry={showPasswordText}
                right={
                    name === 'password' ? (
                        <TextInput.Icon 
                            icon={showPasswordText ? 'eye-off' : 'eye'}
                            onPress={() => setShowPasswordText(!showPasswordText)}
                        />
                    ) : null
                }
            />
            {error && <CustomText style={styles.errorText}>{error_msg}</CustomText>}
        </KeyboardAvoidingView>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 10,
    },
    input: {
        backgroundColor: 'transparent',
    },
    errorText: {
        color: 'red',
    },
});
