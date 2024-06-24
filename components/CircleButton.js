import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CircleButton() {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton}>
        <MaterialIcons name="add" size={38} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 4,
    borderColor: "#ffd33d",
    marginHorizontal: 60,
    padding: 3,
  },

  circleButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 42,
  },
});
