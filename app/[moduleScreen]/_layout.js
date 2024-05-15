import { Stack } from "expo-router";

const ModuleLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Module",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ModuleLayout;
