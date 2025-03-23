import React from 'react';
import { ActivityIndicator } from 'react-native';
import { primaryColor } from '../../styles/theme';

// Define Props Type
interface LoaderProps {
    size?: number | "small" | "large"; 
    color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 15, color = primaryColor }) => {
    return <ActivityIndicator size={size} color={color} />;
};

export default Loader;
