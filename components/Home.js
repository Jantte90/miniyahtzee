import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/style';

export default function Home({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="For scoreboard enter your name..."
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button 
          title="OK" 
          onPress={() => {
              navigation.navigate('Gameboard', { playerName: name });
          }} 
      />
    </View>
  );
}
