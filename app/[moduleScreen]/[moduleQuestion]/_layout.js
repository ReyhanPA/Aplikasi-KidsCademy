import { Stack } from "expo-router";

const ModuleQuestionLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Module Question",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ModuleQuestionLayout;
