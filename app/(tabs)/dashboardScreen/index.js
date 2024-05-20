import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import DashboardTopBar from '../../components/DashboardTopBar';
import DashboardBody from '../../components/DashboardBody';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar />
      <DashboardBody />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});


export default DashboardScreen;
