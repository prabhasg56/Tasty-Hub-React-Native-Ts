import React from 'react';
import { FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import RestaurantCard from '../../components/Cards/RestaurantCard';
import { RestImage1, RestImage2, RestImage3, RestImage4, RestImage5, RestImage6, RestImage7, RestImage8 } from '../../assets/images';
import CustomText from '../Common/CustomText';

const restaurants = [
    { id: 1, name: "Cobi’s", rating: 9.5, image: RestImage1 },
    { id: 2, name: "Don Angie", rating: 9.2, image: RestImage2 },
    { id: 3, name: "Sushi by S...", rating: 9.1, image: RestImage3 },
    { id: 4, name: "Honor Bar", rating: 9.1, image: RestImage4 },
    { id: 5, name: "Easy Street", rating: 9.1, image: RestImage5 },
    { id: 6, name: "Osteria M...", rating: 8.8, image: RestImage6 },
    { id: 7, name: "Chipotle...", rating: 8.8, image: RestImage7 },
    { id: 8, name: "Ospi Bren...", rating: 8.7, image: RestImage8 },
];

const TopRatedRestaurants: React.FC = () => {
    const { width } = useWindowDimensions();

    const numColumns = width > 400 ? 4 : 3; // Adjust based on screen width
    const itemSize = width / numColumns - 20; // Adjust spacing

    return (
        <View style={styles.container}>
            <CustomText style={styles.title}>Gaurav’s Top 8</CustomText>
            <FlatList
                data={restaurants}

                keyExtractor={(item) => item.id.toString()}
                numColumns={numColumns} // Dynamic column count
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <RestaurantCard image={item.image} name={item.name} rating={item.rating} size={itemSize} />
                )}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

export default TopRatedRestaurants;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 5,
        borderBottomColor:"#2A2A2A",
        borderBottomWidth:2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    row: {
        justifyContent: 'space-between',
    },
});
