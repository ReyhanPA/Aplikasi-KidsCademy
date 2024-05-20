import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { HeaderNonTabs, LeaderboardBody } from "../components";

const data = [
  {
    id: 1,
    rank: 1,
    nama: "Santi",
    score: "278 XP",
  },
  {
    id: 2,
    rank: 2,
    nama: "Andika",
    score: "260 XP",
  },
  {
    id: 3,
    rank: 3,
    nama: "Putri",
    score: "250 XP",
  },
  {
    id: 4,
    rank: 4,
    nama: "Sumitro",
    score: "240 XP",
  },
  {
    id: 5,
    rank: 5,
    nama: "Putranto",
    score: "222 XP",
  },
  {
    id: 6,
    rank: 6,
    nama: "Hayati",
    score: "211 XP",
  },
  {
    id: 7,
    rank: 7,
    nama: "Kinan",
    score: "192 XP",
  },
  {
    id: 8,
    rank: 8,
    nama: "Anto",
    score: "80 XP",
  },
];

const LeaderboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNonTabs headerName="Leaderboard" />
      <LeaderboardBody data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default LeaderboardScreen;
