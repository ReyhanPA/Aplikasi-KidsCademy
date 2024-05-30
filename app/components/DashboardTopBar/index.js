import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { IconElectrifity, IconMedal } from "../../../assets/icon";
import { useAuth } from "../../../contexts/AuthProvider";
import { router } from 'expo-router';
import firestore from "@react-native-firebase/firestore";
import Spinner from 'react-native-loading-spinner-overlay';

const DashboardTopBar = (props) => {
  const { pathname } = props;
  const { isLogin, user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <Spinner visible={loading}/>
    );
  }

  return (
    <View className="flex flex-row h-12 items-center justify-between px-4 bg-white fixed top-0">
      <View className="flex-1 flex-row items-center justify-start">
        <Text className="text-xl font-semibold text-[#1A8EFD]">XP</Text>
        <Text className="text-xl font-semibold text-black">{isLogin ? data.xp : `-`}</Text>
      </View>
      <TouchableOpacity onPress={() => router.push({pathname: `${pathname}`})} activeOpacity={0.7}>
        <View className="flex flex-row h-8 w-24 items-center justify-center bg-[#EFF9FF] rounded-full">
          <IconMedal height={18} width={18} />
          <Text className="text-xl font-semibold text-black items-center">{isLogin ? `#${data.ranking}` : `-`}</Text>
        </View>
        <View className="before:bg-[#55ACEE] before:h-8 before:w-24 before:rounded-full before:absolute before:top-1 before:-z-10" />
      </TouchableOpacity>
      <View className="flex-1 flex-row items-center justify-end">
        <IconElectrifity height={20} width={20} />
        <Text className="text-xl font-semibold text-black items-center">{isLogin ? data.energi : `-`}</Text>
      </View>
    </View>
  );
};

export default DashboardTopBar;
