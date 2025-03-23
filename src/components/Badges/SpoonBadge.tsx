import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Spoon, Star } from "../../assets/icons"; 

const SpoonBadge: React.FC = () => { 
    return (
        <View style={styles.starCon}>
            <Image source={Spoon} style={styles.spoon} />
            <Image source={Star} style={styles.star} />
        </View>                   
    );
};

const styles = StyleSheet.create({
    starCon: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    star: {
        width: 20,
        height: 20,
    },
    spoon: {
        position: "absolute",
        zIndex: 10, 
        top: 4,
        right: 4,
    },
});

export default SpoonBadge;
