import { Stack } from "expo-router";

const SubjectLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Subject",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default SubjectLayout;
