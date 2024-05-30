import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { DashboardTopBar, DashboardBody } from "../../components";

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar pathname="../../leaderboardScreen" />
      <DashboardBody />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default DashboardScreen;
