import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  diceContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dice: {
    width: 60,
    height: 60,
    borderRadius: 8,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceText: {
    fontSize: 24,
  },
  scoreButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  scoreButton: {
    width: 55,
    height: 55,
    borderRadius: 4,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  centeredButton: {
    width: 150, 
    height: 60, 
    backgroundColor: '#3498db', 
    borderRadius: 10, 
  },
  resetButton: {
    backgroundColor: 'lightgray', 
  },
});

export default styles;
