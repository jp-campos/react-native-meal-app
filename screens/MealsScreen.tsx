import { View, Text } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

export const MealsScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>{route.params.categoryId} </Text>
    </View>
  );
};
