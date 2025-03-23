import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomText from '../Common/CustomText';
import { ProfileImage } from '../../assets/images';
import SpoonBadge from '../Badges/SpoonBadge';

interface ProfileCardProps {
    username: string;
    name: string;
    location: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ username, name, location }) => {
    return (
        <View style={styles.profileCard}>
            <View style={styles.row}>
                {/* User Info */}
                <View style={styles.userInfo}>
                    <View style={styles.profileHeader}>
                        <CustomText style={styles.username}>{username}</CustomText>
                        <SpoonBadge/>
                    </View>
                    <CustomText style={styles.name}>{name}</CustomText>
                    <CustomText style={styles.location}>{location}</CustomText>
                </View>

                <Image source={ProfileImage} style={styles.profileImage} resizeMode="cover" />

            </View>

            {/* Follow Button Below Content */}
            <TouchableOpacity style={styles.followButton} activeOpacity={0.7}>
                <Icon name="heart-o" size={18} color="white" />
                <CustomText style={styles.followText}>Follow</CustomText>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileCard;

const styles = StyleSheet.create({
    profileCard: {
        paddingHorizontal: 16,
        paddingVertical:20,
        borderBottomColor:"#2A2A2A",
        borderBottomWidth:2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // Space between content and follow button
    },
    userInfo: {
        flex: 1,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    username: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    location: {
        color: '#ccc',
        fontSize: 14,
        marginTop: 2,
    },
    followButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2A2A2A',
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignSelf: 'flex-start',
        gap:10
    },
    followText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 5,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 30,
    },
});
