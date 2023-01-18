import { View, Text } from "react-native";

import { styles } from "./styles";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDescription}>
        Quarta, 18 de Janeiro de 2022.
      </Text>
    </View>
  );
};
