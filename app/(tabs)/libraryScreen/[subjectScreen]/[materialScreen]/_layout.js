import { Stack } from "expo-router";

const MaterialLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Material",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default MaterialLayout;
