import { StyleSheet, StatusBar, SafeAreaView, View } from 'react-native';
import TopBarDashboard from '../../components/TopBarDashboard';
import BodyDashboard from '../../components/BodyDashboard';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarDashboard />
      <BodyDashboard />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});


export default Dashboard;
