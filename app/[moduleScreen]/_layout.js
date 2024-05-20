import { Stack } from "expo-router";

const ModuleLayout = () => {
  return (
    <Stack >
      <Stack.Screen
        name="[moduleQuestion]"
        options={{
          title: "Module",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ModuleLayout;
