import { Stack } from "expo-router";

const SubjectLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
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
