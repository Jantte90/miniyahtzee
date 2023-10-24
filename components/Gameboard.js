import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function Gameboard({ route }) {
  const { playerName } = route.params;

  const [dices, setDices] = useState(Array(5).fill(1));
  const [selectedDices, setSelectedDices] = useState([]);
  const [throwsLeft, setThrowsLeft] = useState(3);

  const rollDice = () => {
    if (throwsLeft === 0) return;

    let newDices = dices.map((dice, index) => {
      if (selectedDices.includes(index)) {
        return dice;
      }
      return Math.floor(Math.random() * 6) + 1;
    });

    setDices(newDices);
    setThrowsLeft(prev => prev - 1);
  };

  const selectDice = (index) => {
    setSelectedDices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome, {playerName}!</Text>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        {dices.map((dice, index) => (
          <TouchableOpacity key={index} onPress={() => selectDice(index)} style={{ marginHorizontal: 10, padding: 20, borderColor: selectedDices.includes(index) ? 'blue' : 'gray', borderWidth: 2 }}>
            <Text>{dice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>Throws Left: {throwsLeft}</Text>
      <Button title="Throw Dice" onPress={rollDice} />
    </View>
  );
}
