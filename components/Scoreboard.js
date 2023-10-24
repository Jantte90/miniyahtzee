import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function Scoreboard({ route }) {
  const { gameScores } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Scoreboard</Text>
      <FlatList
        data={gameScores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Text>{item.playerName}</Text>
            <Text>{item.totalScore}</Text>
          </View>
        )}
      />
    </View>
  );
}
