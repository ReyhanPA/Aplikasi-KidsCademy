import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { HeaderNonTabs, LeaderboardBody } from "../components";
import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";

// const data = [
//   {
//     id: 1,
//     nama: "Santi",
//     xp: "278",
//   },
//   {
//     id: 2,
//     nama: "Andika",
//     xp: "260",
//   },
//   {
//     id: 3,
//     nama: "Putri",
//     xp: "250",
//   },
//   {
//     id: 4,
//     nama: "Sumitro",
//     xp: "240",
//   },
//   {
//     id: 5,
//     nama: "Putranto",
//     xp: "222",
//   },
//   {
//     id: 6,
//     nama: "Hayati",
//     xp: "211",
//   },
//   {
//     id: 7,
//     nama: "Kinan",
//     xp: "192",
//   },
//   {
//     id: 8,
//     nama: "Anto",
//     xp: "80",
//   },
// ];

const LeaderboardScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const modulesRef = firestore().collection("users");

    modulesRef
    .orderBy("xp", "desc")
    .get()
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setData(newData);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
  }, []);

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
