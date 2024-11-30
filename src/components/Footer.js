import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Incredible ToDo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    padding: 10,
    backgroundColor: "#3b82f6",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "white",
  },
});

export default Footer;
