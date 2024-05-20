import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import LibraryBody from "../../components/LibraryBody";
import { DashboardTopBar } from "../../components";

const LibraryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar pathname="../../leaderboardScreen"/>
      <LibraryBody />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});

export default LibraryScreen;
