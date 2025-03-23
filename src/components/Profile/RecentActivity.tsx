import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ActivityItem from './ActivityItem';
import { RestImage1, RestImage2, RestImage3 } from '../../assets/images';
import CustomButton from '../Common/CustomButton';
import CustomText from '../Common/CustomText';

const recentActivity = [
    { id: 1, name: "Anajak Thai Cuisine", location: "Sherman Oaks, CA", daysAgo: "1d", rating: 9.2, image: RestImage1 },
    { id: 2, name: "Night + Market Weho", location: "West Hollywood, CA", daysAgo: "4d", rating: 9.2, image: RestImage2 },
    { id: 3, name: "Thai Boom", location: "West Hollywood, CA", daysAgo: "1w", rating: 9.2, image: RestImage3 },
];

const RecentActivity: React.FC = () => {
    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>Recent Activity</CustomText>
            <FlatList
                data={recentActivity}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ActivityItem item={item} />}
            />
            <CustomButton label="See more" primaryColor="#252525" onPress={() =>{}} />
        </View>
    );
};

export default RecentActivity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        borderBottomColor:"#2A2A2A",
        borderBottomWidth:2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
});
