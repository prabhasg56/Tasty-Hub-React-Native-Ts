import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RestaurantCardProps {
    image: any; // Image source
    name: string;
    rating: number;
    size: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ image, name, rating, size }) => {
    return (
        <TouchableOpacity style={[styles.card, { width: size }]}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={image} style={[styles.image, { width: size, height: size }]} />
                <View style={styles.badge}>
                    <Text style={styles.rating}>{rating}</Text>
                </View>

            </View>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
        </TouchableOpacity>
    );
};

export default RestaurantCard;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        borderRadius: 10,
    },
    badge: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rating: {
        color: 'white',
        fontWeight: 'bold',
    },
    name: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        width: '100%',
    },
});
