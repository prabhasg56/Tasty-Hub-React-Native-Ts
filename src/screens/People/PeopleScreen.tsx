import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import ScreenWrapper from '../../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation/types';
import CustomText from '../../components/Common/CustomText';
import SearchBar from '../../components/SearchBar';
import PeopleCard from '../../components/Casrds/PeopleCard';

import { User1, User2, User3, User4 } from '../../assets/images';


const peopleData = [
    { id: "1", name: "CaptainCrunch", location: "Los Angeles, CA", avatar: User1 },
    { id: "2", name: "how.kev.eats", location: "Los Angeles, CA", avatar: User2, verified: true },
    { id: "3", name: "tenderlove", location: "Los Angeles, CA", avatar: User3 },
    { id: "4", name: "GourmetGuru", location: "Los Angeles, CA", avatar: User4 },
];

const PeopleScreen: React.FC = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const [selectedFilter, setSelectedFilter] = useState("Friends");


    return (
        <ScreenWrapper title="" showNav={false}>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <CustomText style={styles.header}>People</CustomText>

                    <View style={styles.filterContainer}>
                        {["Friends", "Verified", "Everyone"].map((filter) => (
                            <TouchableOpacity
                                key={filter}
                                style={[styles.filterButton, selectedFilter === filter && styles.activeFilter]}
                                onPress={() => setSelectedFilter(filter)}
                            >
                                <CustomText style={selectedFilter === filter ? styles.activeText : styles.filterText}>{filter}</CustomText>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.listContainer}>

                <FlatList
                    data={peopleData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <PeopleCard person={item} />}
                />

                <SearchBar placeholder="Search people" />
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default PeopleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
    },
    topContainer:{
        borderBottomWidth:2,
        borderBottomColor:"#323234",
        padding: 16,
    },
    listContainer:{
        flex:1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginBottom: 16,
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
        borderRadius:16,
        borderWidth:2,
        backgroundColor: "#2A2A2A",

    },
    filterButton: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    activeFilter: {
        backgroundColor: "white",
    },
    filterText: {
        color: "white",
        fontSize: 14,
        fontWeight:700,
    },
    activeText: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
    },
});






