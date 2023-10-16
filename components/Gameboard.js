

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/style';

function randomDiceValue() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function Gameboard({ route }) {
  const playerName = route.params.playerName;
  const [dice, setDice] = useState([randomDiceValue(), randomDiceValue(), randomDiceValue(), randomDiceValue(), randomDiceValue()]);
  const [selectedDice, setSelectedDice] = useState([false, false, false, false, false]);
  const [turns, setTurns] = useState(0);

  const rollDice = () => {
    if (turns < 3) {
      setDice(dice.map((value, index) => selectedDice[index] ? value : randomDiceValue()));
      setTurns(turns + 1);
    } else {
      alert('You have used all your turns. Please select a score.');
    }
  };

  // For simplicity, we'll just sum the dice as a score.
  const calculateScore = () => {
    return dice.reduce((acc, val) => acc + val, 0);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome, {playerName}</Text>
      <Text>Dice: {dice.join(', ')}</Text>
      <Button title="Roll Dice" onPress={rollDice} />
      <Text>Score: {calculateScore()}</Text>
    </View>
  );
}
