import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useRoute } from '@react-navigation/native';
import { SubjectBody, DashboardTopBar, HeaderNonTabs } from "../../../components";

const SubjectScreen = () => {
  const route = useRoute();
  
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar pathname="../../../leaderboardScreen"/>
      <HeaderNonTabs headerName={`Library > ${route.params.subject}`} />
      <SubjectBody subject={route.params.subject}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});

export default SubjectScreen;
