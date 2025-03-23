import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomText from '../Common/CustomText';

interface ListItemProps {
    item: {
        title: string;
        description: string;
        restaurants: number;
        nearby?: string;
        likes: string;
        icon: string;
    };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.item]}>
            <Image source={item.icon} style={styles.icon} />

            <View style={styles.textContainer}>
                <CustomText style={styles.title}>{item.title}</CustomText>
                <CustomText style={styles.description}>{item.description}</CustomText>
                <CustomText style={styles.details}>
                    {item.restaurants} restaurants {item.nearby && <CustomText style={styles.nearby}>{"  "}{item.nearby}</CustomText>} • {" "}
                    <Icon name="heart-o" size={10} color="white" />

                    {"  "}{item.likes}
                </CustomText>
            </View>

            <Icon name="chevron-right" size={14} color="gray" style={styles.arrow} />

        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#323234',
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: 14,
        color: '#bbb',
        marginTop: 4,
        fontWeight: 500
    },
    details: {
        fontSize: 14,
        color: '#bbb',
        marginTop: 12,
        fontWeight: 500
    },
    nearby: {
        color: 'green',
        fontWeight: 'bold',
    },
    arrow: {
        marginLeft: 10,
    },
});
