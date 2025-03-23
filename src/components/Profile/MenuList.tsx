import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
    { id: '1', label: 'Following', count: 3, icon: 'user-o' },
    { id: '2', label: 'Hitlist', count: 3, icon: 'bookmark-o' },
];

const MenuList: React.FC = () => {
    const renderItem = ({ item }: { item: { label: string; count: number; icon: string } }) => (
        <TouchableOpacity style={styles.item}>
            <Icon name={item.icon} size={20} color="white" style={styles.icon} />
            <Text style={styles.text}>{item.label}</Text>
            <Text style={styles.count}>{item.count}</Text>
            <Icon name="chevron-right" size={14} color="gray" style={styles.arrow} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList data={data} keyExtractor={(item) => item.id} renderItem={renderItem} />
        </View>
    );
};

export default MenuList;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10,
       
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#323234',
    },
    icon: {
        marginRight: 12,
    },
    text: {
        flex: 1,
        color: 'white',
        fontSize: 16,
    },
    count: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrow: {
        marginLeft: 10,
    },
});
