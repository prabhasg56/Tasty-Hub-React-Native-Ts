import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Heart, Spoon, Star } from "../../assets/icons";

// Define Type for Props
interface Person {
    avatar: ImageSourcePropType;
    name: string;
    location: string;
    Heart: string
}

interface PeopleCardProps {
    person: Person;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ person }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
                <View>
                    <View style={styles.heartCon}>
                        <Image source={Heart} style={styles.star} />
                    </View>

                    <Image source={person.avatar} style={styles.avatar} />

                </View>
                <View>
                    <View style={styles.contentCon}>
                        <Text style={styles.name}>
                            {person.name}
                        </Text>
                        <View style={styles.starCon}>
                            <Image source={Spoon} style={styles.spoon} />
                            <Image source={Star} style={styles.star} />
                        </View>
                    </View>
                    <Text style={styles.location}>{person.location}</Text>
                </View>
            </View>
            <AntDesign name="right" color={"#fff"} size={14} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        // backgroundColor: "#2A2A2A",
        // borderRadius: 10,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: '#323234'

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    cardContent: {
        flexDirection: 'row',
        gap: 6
    },
    name: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    location: {
        color: "#A9A9A9",
        fontSize: 14,
    },
    star: {
        width: 20,
        height: 20,
    },
    heartCon: {
        position: "absolute",
        right: 10,
        zIndex: 10
    },
    contentCon: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    },

    starCon: {
        justifyContent: "center",
        alignItems: "center"
    },
    spoon: {
        position: "absolute",
        zIndex: 100,
        top: 4,
        bottom: 2,
        right: 4,
    }
});

export default PeopleCard;
