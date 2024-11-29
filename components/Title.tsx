import { StyleSheet, Text } from "react-native";

export const Title = ({ children }: { children: string }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 15,
    textAlign: "center",
  },
});
