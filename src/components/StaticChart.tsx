import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { Graph } from '../assets/images';
import CustomText from './Common/CustomText';

const { width } = Dimensions.get("window"); // Get screen width dynamically

const StaticChart = () => {
    return (
        <View style={styles.container}>
            <Image source={Graph} style={styles.graph} resizeMode="contain" />
            <View style={styles.labelContainer}>
                <CustomText style={styles.value}>5.3</CustomText>
                <CustomText style={styles.value}>9.8</CustomText>
            </View>
        </View>
    );
};

export default StaticChart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
        borderBottomColor:"#2A2A2A",
        borderBottomWidth:2,
        paddingBottom: 24,
    },
    graph: {
        width: width*0.96, 
        // height: 200,
    },
    labelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width*0.95,
        paddingHorizontal:5
    },
    value: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
        color:"white"
    }

});
