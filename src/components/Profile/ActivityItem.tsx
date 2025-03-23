import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomText from '../Common/CustomText';

interface ActivityItemProps {
    item: {
        name: string;
        location: string;
        daysAgo: string;
        rating: number;
        image: any;
    };
}

const ActivityItem: React.FC<ActivityItemProps> = ({ item }) => {
    return (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <CustomText style={styles.name}>{item.name}</CustomText>
                <CustomText style={styles.details}>{item.location} • {item.daysAgo}</CustomText>
            </View>
            <View style={styles.ratingContainer}>
                <CustomText style={styles.rating}>{item.rating}</CustomText>
            </View>
        </View>
    );
};

export default ActivityItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#323234'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    details: {
        fontSize: 12,
        color: '#bbb',
    },
    ratingContainer: {
        backgroundColor: 'red',
        borderRadius: 20,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rating: {
        color: 'white',
        fontWeight: 'bold',
    },
});
