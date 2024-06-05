import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { IconClick, IconClickBlack, IconArrowDown } from "../../../assets/icon";
import { router } from 'expo-router';
import { useAuth } from "../../../contexts/AuthProvider";
import firestore from "@react-native-firebase/firestore";
import Spinner from 'react-native-loading-spinner-overlay';
import { useFocusEffect } from '@react-navigation/native';

const optionLearningPath = [
  {
    id: 1,
    label: "Semua"
  },
  {
    id: 2,
    label: "2-4"
  },
  {
    id: 3,
    label: "5-6"
  },
  {
    id: 4,
    label: "7-8"
  },
]

const Dropdown = ({ openDropdown, optionDropdown, handleOpenDropdown, handleDropdown }) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={handleOpenDropdown}>
        <View className="before:absolute before:top-10 before:left-8 before:z-10">
          {openDropdown ? (
            <View className="rotate-180">
              <IconArrowDown height={20} width={20}/> 
            </View>
          ) : (
            <View>
              <IconArrowDown height={20} width={20}/> 
            </View>
          )}
        </View>
        <View className="flex items-center justify-center my-4 p-4 h-16 w-full bg-[#EFF9FF] rounded-full">
          <Text className="text-xl font-semibold text-black">Umur : {optionDropdown} Tahun</Text> 
        </View>
        <View className="before:h-16 before:w-full before:bg-[#55ACEE] before:rounded-full before:absolute before:top-5 before:-z-10" />
      </TouchableOpacity>
      {openDropdown && (
        <View className="before:flex before:h-56 before:left-3 before:right-3 before:w-full before:items-center before:gap-3 before:absolute before:top-14 before:rounded-3xl before:pt-10 before:-z-10 before:bg-white before:border-b-2 before:border-x-2 before:border-[#55ACEE]">
          {optionLearningPath.map((option) => (
            <TouchableOpacity key={option.id} onPress={() => handleDropdown(option.label)} className="flex justify-center items-center w-[60%] bg-white">
              <Text className="text-xl font-normal text-black">Umur : {option.label} Tahun</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const DashboardBody = (props) => {
  const { dataUser } = props;
  const { isLogin, user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [optionDropdown, setOptionDropdown] = useState(optionLearningPath[0].label);
  const [filterDropdown, setFilterDropdown] = useState(["2-4", "5-6", "7-8"]);
  
  useEffect(() => {
    if (optionDropdown === "Semua") {
      setFilterDropdown(["2-4", "5-6", "7-8"]);
    }  else if (optionDropdown === "2-4") {
      setFilterDropdown(["2-4"]);
    } else if (optionDropdown === "5-6") {
      setFilterDropdown(["2-4", "5-6"]);
    } else {
      setFilterDropdown(["2-4", "5-6", "7-8"]);
    }
  }, [optionDropdown]);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const modulesRef = firestore().collection("modules");
        const querySnapshot = await modulesRef.orderBy("learningPath", "asc").orderBy("name", "asc").where("learningPath", "in", filterDropdown).get();
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
  }, [optionDropdown, filterDropdown]);

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  }

  const handleDropdown = (label) => {
    setOpenDropdown(false);
    setOptionDropdown(label);
  }

  if (loading) {
    return (
      <Spinner visible={loading} />
    );
  }

  let moduleDone = [];
  if (isLogin) {
    moduleDone = dataUser.moduleDone || [];
  } else {
    moduleDone = [];
  }

  return (
    <ScrollView className="flex-1 h-full w-full bg-white px-4">
      <Text className="text-xl font-semibold text-black">Learning Path</Text>
      <Dropdown
        openDropdown={openDropdown} 
        optionDropdown={optionDropdown} 
        handleOpenDropdown={handleOpenDropdown} 
        handleDropdown={handleDropdown} 
      />
      <View className="flex items-end mx-4 bg-inherit">
        {data.map((item) => (
          <View key={item.id} className="flex flex-row justify-between w-full -z-20">
            <View className="flex-1 py-1 justify-between items-center">
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="flex justify-center items-center h-7 w-7 rounded-full bg-[#0979BD]">
                <View className={`h-3 w-3 rounded-full ${moduleDone.includes(item.id) ? 'bg-[#FFCF7C]' : 'bg-[#DFE3E6]'}`}/>
              </View>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
              <View className="h-3 w-3 rounded-full bg-[#58BCEB]"/>
            </View>
            <TouchableOpacity 
              onPress={() => router.navigate({pathname: "../../[moduleScreen]/[moduleQuestion]", params: {moduleID: item.id, moduleName: item.name}})} 
              activeOpacity={0.7} 
              key={item.id} 
              className={`flex justify-between h-28 w-60 my-2 px-4 py-6 rounded-2xl ${moduleDone.includes(item.id) ? 'bg-[#0979BD]' : 'bg-[#DFE3E6]'} shadow-lg shadow-black`}
            >
              <View className="flex flex-row items-center gap-2">
                <Text className={`text-3xl font-medium ${moduleDone.includes(item.id) ? 'text-white' : 'text-black'} items-center`}>{item.name}</Text> 
                {moduleDone.includes(item.id) ? <IconClick height={25} width={25}/> : <IconClickBlack height={25} width={25}/>}
              </View>
              <Text className={`text-lg font-normal ${moduleDone.includes(item.id) ? 'text-white' : 'text-black'} items-center`}>{item.description}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DashboardBody;
