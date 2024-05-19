import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { useRoute } from '@react-navigation/native';
import { HeaderNonTabs, ModuleBody } from "../components";

const Module = () => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNonTabs headerName={route.params.moduleName} />
      <ModuleBody route={route}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Module;
