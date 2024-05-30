import React, { useCallback, useState } from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { DashboardTopBar, DashboardBody } from "../../components";
import { useAuth } from "../../../contexts/AuthProvider";
import firestore from "@react-native-firebase/firestore";
import { useFocusEffect } from '@react-navigation/native';

const DashboardScreen = () => {
  const { isLogin, user } = useAuth();
  const [data, setData] = useState([]);
  
  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
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
        }
      };
  
      fetchData();
    }, [user])
  );

  return (
    <SafeAreaView style={styles.container}>
      <DashboardTopBar pathname="../../leaderboardScreen"/>
      <DashboardBody/>
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
