import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { IconNoImage, IconLetterA, IconLetterX, IconLetterY, IconAnimal, IconFruit, IconDragon, IconAddition, IconBasicLogic, IconBasketball } from "../../../assets/icon";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";

const material = [
  {
    id: 1,
    name: "Huruf A",
    subjek: "Huruf",
    idVideo: "HOA71GLvMiQ"
  },
  // {
  //   id: 2,
  //   name: "Video Huruf A",
  //   subject: "Huruf",
  // },
  // {
  //   id: 3,
  //   name: "Huruf Y",
  //   subject: "Huruf",
  // },
  // {
  //   id: 4,
  //   name: "Video Huruf Y",
  //   subject: "Huruf",
  // },
  // {
  //   id: 5,
  //   name: "Nama Hewan",
  //   subject: "Baca",
  // },
  // {
  //   id: 6,
  //   name: "Penjumlahan Dasar",
  //   subject: "Hitung",
  // },
  // {
  //   id: 7,
  //   name: "Logika Dasar",
  //   subject: "Logika",
  // },
  // {
  //   id: 8,
  //   name: "Video Viral Bagas Dribble",
  //   subject: "Hiburan",
  // },
  // {
  //   id: 9,
  //   name: "Huruf Z",
  //   subject: "Huruf",
  // },
  // {
  //   id: 10,
  //   name: "Video Huruf Z",
  //   subject: "Huruf",
  // },
  // {
  //   id: 9,
  //   name: "Nama Buah",
  //   subject: "Baca",
  // },
  // {
  //   id: 10,
  //   name: "Kisah Naga",
  //   subject: "Baca",
  // },
];
const renderIconSubject = (Icon) => {
  if (Icon === "Huruf A" || Icon === "Video Huruf A") {
    return <IconLetterA height={60} width={60} />;
  } else if (Icon === "Huruf Y" || Icon === "Video Huruf Y") {
    return <IconLetterY height={60} width={60} />;
  } else if (Icon === "Huruf Z" || Icon === "Video Huruf Z") {
    return <IconLetterX height={60} width={60} />;
  } else if (Icon === "Nama Hewan") {
    return <IconAnimal height={60} width={60} />;
  } else if (Icon === "Nama Buah") {
    return <IconFruit height={60} width={60} />;
  } else if (Icon === "Kisah Naga") {
    return <IconDragon height={60} width={60} />;
  } else if (Icon === "Penjumlahan Dasar") {
    return <IconAddition height={60} width={60} />;
  } else if (Icon === "Logika Dasar") {
    return <IconBasicLogic height={60} width={60} />;
  } else if (Icon === "Video Viral Bagas Dribble") {
    return <IconBasketball height={60} width={60} />;
  } else {
    return <IconNoImage height={60} width={60} />;
  }
};
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
                  className={`h-24 w-40 my-2 px-4 py-6 rounded-3xl bg-[#FFFFFF] shadow-lg shadow-black border border-[#53AC65]`}
                >
                  <View className="mx-8 mb-2 h-[60px] w-[60px]">{renderIconSubject(item.name)}</View>
                  <View className="after:h-24  after:w-3 after:rounded-sm after:bg-emerald-200 after:absolute after:right-4 after:bottom-0 after:-z-10" />
                  <View className="after:h-2  after:w-8 after:rounded-sm after:bg-emerald-200 after:absolute after:left-0 after:top-4 after:-z-10" />
                </TouchableOpacity>
                <Text className="text-black text-center w-40">{item.name}</Text>
              </View>
            );
          }
        })}
      </View>
    </ScrollView>
  );
};

export default SubjectBody;
