import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const MainScreenMenu = () => {
    return (
        <View style={styles.mainMenuContainer}>
            <MyAssetsButton />
            <AnalitycsButton />
            <MarketTrendsButton />
            <PreferencesButton />
        </View>
    );
}

const MyAssetsButton = () => (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={require("../assets/icons/myAssets.png")} />    
        <Text style={styles.label}>My Assets</Text>
    </TouchableOpacity>
);

const AnalitycsButton = () => (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={require("../assets/icons/analytics.png")} />    
        <Text style={styles.label}>Analytics</Text>
    </TouchableOpacity>
);

const MarketTrendsButton = () => (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={require("../assets/icons/marketTrends.png")} />    
        <Text style={styles.label}>Market Trends</Text>
    </TouchableOpacity>
);

const PreferencesButton = () => (
    <TouchableOpacity style={styles.button}>
        <Image style={styles.image} source={require("../assets/icons/preferences.png")} />    
        <Text style={styles.label}>Preferences</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    mainMenuContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 10,
        justifyContent: "space-around", // Ensures equal spacing between buttons
        alignItems: "center",
        width: '100%', // Allows the buttons to fill the width of the container
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Set background color to 70% transparency
        borderRadius: 10, // Optional: Rounding corners
        padding: 10, // Optional: Add some padding around the container
    },
    button: {
        alignItems: 'center', // Center align the icons and text within the button
    },
    image: {
        width: 80,
        height: 80,
    },
    label: {
        color: '#FFD700', // Text color for labels
        fontSize: 14, // Text size for labels
        marginTop: 5, // Space between the icon and the label
    },
});

export default MainScreenMenu;