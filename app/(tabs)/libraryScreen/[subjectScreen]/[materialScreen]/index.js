import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import MaterialBody from "../../../../components/MaterialBody";
import DashboardTopBar from "../../../../components/DashboardTopBar";
const MaterialScreen = () => {
  const route = useRoute();
  
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar />
      <MaterialBody material={route.params.material}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});

export default MaterialScreen;
