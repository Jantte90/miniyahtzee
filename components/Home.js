import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import styles from '../styles/style';

export default function Home({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mini Yahtzee!</Text>
      <Text style={styles.ruleText}>
        Rules of the game:
        {"\n"}
        THE GAME: Upper section of the classic Yahtzee dice game. You have 5 dices and
        for every dice you have 3 throws. After each throw, you can keep dices in
        order to get the same dice spot counts as many as possible. At the end of the turn, you must select
        your points from 1 to 6. The game ends when all points have been selected.
        The order for selecting those is free.
        {"\n\n"}
        POINTS: After each turn, the game calculates the sum
        for the dices you selected. Only the dices having
        the same spot count are calculated. Inside the
        game, you cannot select the same points from
        1 to 6 again.
        {"\n\n"}
        GOAL: To get as many points as possible.
        63 points is the limit for
        getting a bonus, which gives you 35 points more.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.bold}>For the scoreboard, enter your name:</Text>
        <TextInput
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Button
          title="Start Game"
          onPress={() => {
            navigation.navigate('Gameboard', { playerName: name });
          }}
        />
      </View>
    </View>
  );
}
