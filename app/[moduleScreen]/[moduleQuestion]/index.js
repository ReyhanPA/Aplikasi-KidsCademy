import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import { HeaderNonTabs, ModuleBody } from "../../components";
import firestore from "@react-native-firebase/firestore";
import Spinner from 'react-native-loading-spinner-overlay';

const Module = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const moduleID = route.params.moduleID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const modulesRef = firestore().collection("modules");
        const querySnapshot = await modulesRef.orderBy("learningPath", "asc").orderBy("name", "asc").get();
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectedModule = data.find(modul => modul.id === moduleID);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderNonTabs headerName={route.params.moduleName} />
        <Spinner visible={loading} />
      </SafeAreaView>
    );
  }

  if (!selectedModule) {
    return (
      <SafeAreaView style={styles.container}>
        <HeaderNonTabs headerName={route.params.moduleName} />
        <Text>Module not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderNonTabs headerName={route.params.moduleName} />
      <ModuleBody selectedModule={selectedModule}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Module;
