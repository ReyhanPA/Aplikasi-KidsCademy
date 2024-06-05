import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { HeaderNonTabs, LeaderboardBody } from "../components";
import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "../../contexts/AuthProvider";
import Spinner from 'react-native-loading-spinner-overlay';

const LeaderboardScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataUser, setUserData] = useState([]);
  const { isLogin, user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (user && user.uid && isLogin) {
          const userRef = firestore().collection("users").doc(user.uid);
          const docSnapshot = await userRef.get();
          if (docSnapshot.exists) {
            setUserData({ id: docSnapshot.id, ...docSnapshot.data() });
          } else {
            console.error("No such document!");
          }
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

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

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderNonTabs headerName="Leaderboard" />
        <Spinner visible={loading} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNonTabs headerName="Leaderboard" />
      <LeaderboardBody data={data} dataUser={dataUser} />
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
