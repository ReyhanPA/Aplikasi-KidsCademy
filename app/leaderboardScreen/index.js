import React from "react";
import { View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
const LeaderboardScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Text>Leaderboard {route.params.userID}</Text>
    </View>
  );
};

export default LeaderboardScreen;
