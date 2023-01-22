import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { IParticipant } from "./types";

export const Participant: React.FC<IParticipant> = ({ name, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
        <Text style={styles.clickHere}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
