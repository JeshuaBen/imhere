import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export const Home: React.FC = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe",
        "Não foi possível adicionar participante com este nome, pois já existe um participante com este nome"
      );
    }
    if (participantName.length === 0) {
      return Alert.alert("Erro", "Digite um nome");
    }

    setParticipants((previous) => [...previous, participantName]);
    setParticipantName("");
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Remover", `Deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDescription}>
        Quarta, 18 de Janeiro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.clickHere}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Participant
            key={index}
            name={item}
            onRemove={handleRemoveParticipant}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicioneo nome dos participantes à
            lista de presença
          </Text>
        )}
      />
    </View>
  );
};
