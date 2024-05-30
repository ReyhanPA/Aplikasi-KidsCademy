import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const MaterialBody = () => {
  const item = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 h-full w-full bg-white px-4 ">
      <Text className="text-xl text-black mb-4">Video {item.name}</Text>

      <YoutubePlayer 
       height={300}
       play={true}
       videoId={item.idVideo}
      />
    </ScrollView>
  );
};

export default MaterialBody;
