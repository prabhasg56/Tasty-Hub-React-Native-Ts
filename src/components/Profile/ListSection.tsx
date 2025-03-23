import React from 'react';
import { FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import ListItem from './ListItem';
import CustomButton from '../Common/CustomButton';
import CustomText from '../Common/CustomText';
import { Tendie, BestThai,DateSpot, } from '../../assets/images';

const lists = [
    { id: 1, title: "best thai in LA", description: "Exactly what it says dummy!", restaurants: 3, nearby: "1 nearby!", likes: "No likes yet", icon:  BestThai},
    { id: 2, title: "tendies", description: "You already know i love me some basement chicken tendies", restaurants: 5, likes: "12 likes", icon:Tendie},
    { id: 3, title: "Favorite date spots", description: "If we make it to one of these spots, we are vibin hard", restaurants: 3, likes: "27 likes", icon: DateSpot },
];

const ListSection: React.FC = () => {

    return (
        <View style={[styles.container]}>
            <CustomText style={styles.header}>Lists</CustomText>
            <FlatList
                data={lists}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ListItem item={item} />}
            />
            <CustomButton label="See more" primaryColor="#252525" onPress={() => { }} />

        </View>
    );
};

export default ListSection;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 10,
        borderBottomColor:"#2A2A2A",
        borderBottomWidth:2,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
});
