import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Gameboard"
          component={Gameboard}
          initialParams={{ playerName: '' }} // Initialize playerName as empty string
        />
        <Tab.Screen
          name="Scoreboard"
          component={Scoreboard}
          initialParams={{ gameScores: [] }} // Initialize gameScores as an empty array
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
