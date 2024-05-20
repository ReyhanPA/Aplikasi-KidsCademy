import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useRoute } from '@react-navigation/native';
import { MaterialBody, DashboardTopBar, HeaderNonTabs } from "../../../../components";

const MaterialScreen = () => {
  const route = useRoute();
  
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar pathname="../../../../leaderboardScreen"/>
      <HeaderNonTabs headerName={`Konten ${route.params.material}`} />
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
