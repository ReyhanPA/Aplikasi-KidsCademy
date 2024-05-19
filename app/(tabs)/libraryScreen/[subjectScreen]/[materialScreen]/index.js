import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
const MaterialScreen = () => {
  const route = useRoute();
  
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MaterialScreen;
