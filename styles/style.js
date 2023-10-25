import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2', // Some light background color
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  diceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  dice: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceText: {
    fontSize: 24,
  },
  scoreButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  scoreButton: {
    width: '30%',
    backgroundColor: 'white',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
  },
  scoreButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
