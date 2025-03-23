import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


// Define Props Type
interface SearchBarProps extends TextInputProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, ...rest }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#A9A9A9" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        style={styles.input}
        {...rest} // Pass additional TextInput props
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 2,
    borderWidth: 2,
    gap: 16
  },
  icon: {
    left: 2
  },
  input: {
    flex: 1,
    color: "white",
  },
});

export default SearchBar;
