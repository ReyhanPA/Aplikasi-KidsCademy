import React from "react";
import { ScrollView, View, Text } from "react-native";
import {
  IconProfilePicture,
  IconMedal
} from "../../../assets/icon";

const getColorByRank = (rank) => {
  switch (rank) {
    case 1:
      return "#FFFA87";
    case 2:
      return "#AFB1B2";
    case 3:
      return "#FBA319";
    default:
      return "#FFFFFF";
  }
};

const LeaderboardBody = (props) => {
  const { data, dataUser } = props;

  return (
    <View className="flex-1 w-full h-full bg-white">
      <View className="flex flex-row w-full h-auto p-4">
        <View className="flex-1 items-center justify-center h-20 rounded-2xl border-2 border-[#898787]">
          <Text className="text-xl font-medium text-[#969696]">Yuk capai peringkat tertinggi!</Text>
          <View className="flex flex-row items-center justify-center gap-2">
            <IconMedal height={18} width={18} />
            <Text className="text-xl font-medium text-black">Ranking saat ini : {dataUser.ranking}</Text>
          </View>
        </View>
      </View>
      <ScrollView className="flex w-full h-auto border-t bg-white border-[#969696] py-4">
        {data.map((item) => (
          <View
            key={item.id}
            className={`flex flex-row items-center justify-between mb-3 ${
              item.username === dataUser.username
                ? "px-4 border-slate-400 border-2 rounded-2xl"
                : "mx-4"
            }`}
          >
            <View className="flex flex-row justify-center items-center">
              <View
                className="flex justify-center items-center h-10 w-10 rounded-full mr-2"
                style={{ backgroundColor: getColorByRank(item.ranking) }}
              >
                <Text className="text-xl font-medium text-black">
                  {item.ranking}
                </Text>
              </View>
              <IconProfilePicture height={45} width={45} />
              <Text className="text-xl font-medium text-black ml-2">
                {item.username}
              </Text>
            </View>
            <View>
              <Text className="text-xl font-normal text-black">
                {item.xp} XP
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LeaderboardBody;
