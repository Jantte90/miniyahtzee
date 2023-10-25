import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function Scoreboard({ route, navigation }) {
  const { gameScores } = route.params;

  const clearScores = () => {
    navigation.navigate('Scoreboard', {
      gameScores: [],
    });
  };

  const renderScoreItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
      <Text>{`${item.playerName} ${item.totalScore} points`}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Scoreboard</Text>
      <FlatList
        data={gameScores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderScoreItem}
      />
      <Button title="Clear Scores" onPress={clearScores} />
    </View>
  );
}
