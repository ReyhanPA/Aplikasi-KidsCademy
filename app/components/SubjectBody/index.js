import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

const SubjectBody = ({ subject }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const modulesRef = firestore().collection("libraries");

    modulesRef
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
    <ScrollView className="flex-1 h-full w-full bg-white px-4 ">
      <View className="flex flex-row flex-wrap justify-center gap-7">
        {data.map((item) => {
          if (item.subjek === subject) {
            return (
              <View key={item.id}>
                <TouchableOpacity
                  onPress={() => router.push({ pathname: "../../../(tabs)/libraryScreen/[subjectScreen]/[materialScreen]", params: item })}
                  activeOpacity={0.7}
                  className={`h-24 w-40 rounded-3xl bg-[#FFFFFF] border-2 border-[#1A8EFD]`}
                >
                  <Image 
                    source={require("../../../assets/image/material.png")}
                    className="w-full h-full rounded-3xl"
                  />
                </TouchableOpacity>
                <Text className="text-black text-center w-40 pt-2">{item.name}</Text>
              </View>
            );
          }
        })}
      </View>
    </ScrollView>
  );
};

export default SubjectBody;
