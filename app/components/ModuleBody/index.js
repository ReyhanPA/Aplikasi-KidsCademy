import React from "react";
import { View, Text } from "react-native";

const ModuleBody = (props) => {
  const { route } = props;

  return (
    <View>
      <Text className="text-xl font-semibold text-black">Pilih jawaban yang tepat</Text>
    </View>
  );
};


export default ModuleBody;
