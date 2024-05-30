import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import LibraryBody from "../../components/LibraryBody";
import { DashboardTopBar } from "../../components";
import { useAuth } from "../../../contexts/AuthProvider";
import firestore from "@react-native-firebase/firestore";
import Spinner from 'react-native-loading-spinner-overlay';

const LibraryScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLogin, user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (user && user.uid && isLogin) {
          const userRef = firestore().collection("users").doc(user.uid);
          const docSnapshot = await userRef.get();
          if (docSnapshot.exists) {
            setData({ id: docSnapshot.id, ...docSnapshot.data() });
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

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Spinner visible={loading}/>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar pathname="../../leaderboardScreen" data={data}/>
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
