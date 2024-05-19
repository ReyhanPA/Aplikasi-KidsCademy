import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import SubjectBody from "../../../components/SubjectBody";
const SubjectScreen = () => {
  const route = useRoute();
  
  return (
    <SafeAreaView style={styles.container}>
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
