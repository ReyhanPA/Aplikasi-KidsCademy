import React from "react";
import { View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';

const Module = () => {
  const route = useRoute();

  return (
    <View>
      <Text>Module {route.params.moduleID}</Text>
    </View>
  );
};

export default Module;
