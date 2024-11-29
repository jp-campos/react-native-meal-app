import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

export const Subtitle = ({
  children,
  style,
}: {
  children: string;
  style?: StyleSheet.NamedStyles<Text>;
}) => <Text style={[styles.subtitle]}>{children}</Text>;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "semibold",
    color: Colors.accent500,
    textAlign: "center",
  },
});
