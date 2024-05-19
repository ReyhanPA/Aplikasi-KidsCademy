import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import SubjectBody from "../../../components/SubjectBody";
const SubjectScreen = () => {
  const route = useRoute();
  
  return (
    <SafeAreaView style={styles.container}>
      <SubjectBody/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SubjectScreen;
