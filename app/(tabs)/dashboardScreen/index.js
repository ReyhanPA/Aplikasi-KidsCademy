import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { DashboardTopBar, DashboardBody } from '../../components';

const dataModul = [
  {
    id: 1,
    name: "Modul 1",
    description: "Berhitung tingkat 1",
    done: true,
    soal : [
      {
        idSoal: 1,
        pertanyaan: "23 + 65",
        opsiA: "17",
        opsiB: "88",
        opsiC: "76",
        opsiD: "95",
        jawaban: "opsiB"
      },
      {
        idSoal: 2,
        pertanyaan: "20 + 60",
        opsiA: "17",
        opsiB: "88",
        opsiC: "80",
        opsiD: "95",
        jawaban: "opsiC"
      },
    ]
  },
  {
    id: 2,
    name: "Modul 2",
    description: "Berhitung tingkat 2",
    done: true,
    soal : [
      {
        idSoal: 1,
        pertanyaan: "43 + 65",
        opsiA: "108",
        opsiB: "88",
        opsiC: "76",
        opsiD: "95",
        jawaban: "opsiA"
      },
      {
        idSoal: 2,
        pertanyaan: "20 + 80",
        opsiA: "17",
        opsiB: "88",
        opsiC: "80",
        opsiD: "100",
        jawaban: "opsiD"
      },
    ]
  },
  {
    id: 3,
    name: "Modul 3",
    description: "Berhitung tingkat 3",
    done: false,
    soal : [
      {
        idSoal: 1,
        pertanyaan: "30 + 65",
        opsiA: "17",
        opsiB: "88",
        opsiC: "76",
        opsiD: "95",
        jawaban: "opsiD"
      },
      {
        idSoal: 2,
        pertanyaan: "20 + 50",
        opsiA: "17",
        opsiB: "88",
        opsiC: "70",
        opsiD: "95",
        jawaban: "opsiC"
      },
    ]
  },
  {
    id: 4,
    name: "Modul 4",
    description: "Berhitung tingkat 4",
    done: false,
    soal : [
      {
        idSoal: 1,
        pertanyaan: "23 + 66",
        opsiA: "17",
        opsiB: "89",
        opsiC: "76",
        opsiD: "95",
        jawaban: "opsiB"
      },
      {
        idSoal: 2,
        pertanyaan: "20 + 40",
        opsiA: "17",
        opsiB: "88",
        opsiC: "60",
        opsiD: "95",
        jawaban: "opsiC"
      },
    ]
  },
]

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar pathname="../../leaderboardScreen" />
      <DashboardBody data={dataModul}/>
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
