import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native';
import styles from '../styles/style';

const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const MIN_SPOT = 1;
const MAX_SPOT = 6;
const BONUS_POINTS_LIMIT = 63;
const BONUS_POINTS = 35;

export default function Gameboard({ route, navigation }) {
  const { playerName } = route.params;

  const [dices, setDices] = useState(Array(NBR_OF_DICES).fill(0));
  const [throwsLeft, setThrowsLeft] = useState(NBR_OF_THROWS);
  const [scores, setScores] = useState({
    [MIN_SPOT]: null,
    [MIN_SPOT + 1]: null,
    [MIN_SPOT + 2]: null,
    [MIN_SPOT + 3]: null,
    [MIN_SPOT + 4]: null,
    [MIN_SPOT + 5]: null,
  });
  const [totalScore, setTotalScore] = useState(0);
  const [gameScores, setGameScores] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    calculateTotalScore();
  }, [scores]);

  const rollDice = () => {
    if (throwsLeft === 0 || gameEnded) return;

    let newDices = dices.map((dice, index) => {
      if (dice === 0) {
        return Math.floor(Math.random() * 6) + 1;
      }
      return dice;
    });
    setDices(newDices);
    setThrowsLeft((prev) => prev - 1);
  };

  const toggleDice = (index) => {
    if (throwsLeft > 0 && !gameEnded) {
      let newDices = [...dices];
      newDices[index] = newDices[index] === 0 ? Math.floor(Math.random() * 6) + 1 : 0;
      setDices(newDices);
    }
  };

  const calculateScore = (spot) => {
    if (scores[spot] !== null || gameEnded) return;

    const count = dices.filter((dice) => dice === spot).length;
    const score = count * spot;

    setScores((prevScores) => ({
      ...prevScores,
      [spot]: score,
    }));

    setThrowsLeft(NBR_OF_THROWS);
    // Reset the dice to '?'
    setDices(Array(NBR_OF_DICES).fill(0));

    // Check if the game should end
    const filledSpots = Object.values(scores).filter((score) => score !== null);
    if (filledSpots.length === MAX_SPOT - MIN_SPOT + 1) {
      setGameEnded(true);
    }
  };

  const calculateTotalScore = () => {
    const spots = Array.from({ length: MAX_SPOT - MIN_SPOT + 1 }, (_, index) => MIN_SPOT + index);
    let total = 0;

    for (const spot of spots) {
      if (scores[spot] !== null) {
        total += scores[spot];
      }
    }

    if (total >= BONUS_POINTS_LIMIT) {
      total += BONUS_POINTS;
    }

    setTotalScore(total);
  };

  const saveGameScore = () => {
    if (totalScore === 0) return; // Only save if there is a score

    const newGameScores = [
      ...gameScores,
      {
        playerName: playerName,
        totalScore: totalScore,
      },
    ];

    setGameScores(newGameScores);

    // Reset the game after saving the score
    resetGame();

    // Navigate to the Scoreboard screen
    navigation.navigate('Scoreboard', {
      gameScores: newGameScores, // Pass the updated scores
    });
  };

  const clearScores = () => {
    setGameScores([]);
  };

  const resetGame = () => {
    setDices(Array(NBR_OF_DICES).fill(0));
    setThrowsLeft(NBR_OF_THROWS);
    setScores({
      [MIN_SPOT]: null,
      [MIN_SPOT + 1]: null,
      [MIN_SPOT + 2]: null,
      [MIN_SPOT + 3]: null,
      [MIN_SPOT + 4]: null,
      [MIN_SPOT + 5]: null,
    });
    setTotalScore(0);
    setGameEnded(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yahtzee Game</Text>
      <Text>Welcome, {playerName}!</Text>
      <View style={styles.diceContainer}>
        {dices.map((dice, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dice, { backgroundColor: dice === 0 ? 'lightgray' : 'white' }]}
            onPress={() => toggleDice(index)}
            disabled={throwsLeft === 0 || gameEnded}
          >
            <Text style={styles.diceText}>{dice === 0 ? '?' : dice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text>Throws Left: {throwsLeft}</Text>
      <Button title="Roll Dice" onPress={rollDice} disabled={throwsLeft === 0 || gameEnded} />
      <View style={styles.scoreButtonsContainer}>
        {Object.keys(scores).map((spot) => (
          <TouchableOpacity
            key={spot}
            style={[
              styles.scoreButton,
              {
                backgroundColor: gameEnded ? 'lightgray' : scores[spot] === null ? 'white' : 'lightgreen',
              },
            ]}
            onPress={() => calculateScore(Number(spot))}
            disabled={scores[spot] !== null || gameEnded}
          >
            <Text style={styles.scoreButtonText}>{spot}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.scoreButton, styles.centeredButton]}
        onPress={saveGameScore}
        disabled={totalScore === 0}
      >
        <Text style={styles.scoreButtonText}>Save score</Text>
      </TouchableOpacity>
      <Text>Total Score: {totalScore}</Text>
      <Button title="Reset Game" onPress={resetGame} />
    </ScrollView>
  );
}