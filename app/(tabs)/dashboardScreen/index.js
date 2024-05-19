import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { DashboardTopBar, DashboardBody } from '../../components';

const data = [
  {
    id: 1,
    name: "Modul 1",
    description: "Berhitung tingkat 1",
    done: true,
  },
  {
    id: 2,
    name: "Modul 2",
    description: "Berhitung tingkat 2",
    done: true
  },
  {
    id: 3,
    name: "Modul 3",
    description: "Berhitung tingkat 3",
    done: false
  },
  {
    id: 4,
    name: "Modul 4",
    description: "Berhitung tingkat 4",
    done: false
  },
  {
    id: 5,
    name: "Modul 5",
    description: "Berhitung tingkat 5",
    done: false
  },
  {
    id: 6,
    name: "Modul 6",
    description: "Berhitung tingkat 6",
    done: false
  },
]

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar />
      <DashboardBody data={data}/>
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
