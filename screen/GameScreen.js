import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if(rndNum === exclude) {

            return generateRandomBetween(min, max, exclude);

        }
        else {

            return rndNum;
        }

};

const renderListItem =(value, numOfRounds) => (
    <View key={value} style={styles.listItem}>
        <Text>#{numOfRounds}</Text>
     <Text>{value}</Text>
    </View>
);

const GameScreen = props => {
    const initialGuesses = generateRandomBetween(1,100,props.userChoice);
    const[currentGuess, setCurrentGuess] = useState(initialGuesses);
    const[pastGuesses, setPastGuesses] = useState([initialGuesses]);
    const curretLow = useRef(1);
    const curretHigh = useRef(100);
   

    const {userChoice, onGameOver } = props;

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {

        if(direction === 'lower' && currentGuess < props.userChoice || direction === 'greater' && currentGuess > props.userChoice)
        {

            Alert.alert('Dont Lie','You Know that is wrong...',[{text:'Sorry!', style: 'cancel'}]);
            return;

        }
        if(direction === 'lower') {
            curretHigh.current = currentGuess;
            //generateRandomBetween()

        }
        else {

            curretLow.current = currentGuess + 1;

        }
      const nextNumber =   generateRandomBetween(curretLow.current, curretHigh.current, currentGuess );
      setCurrentGuess(nextNumber);
      //setRounds(currentRounds => currentRounds + 1);
      setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    };

    return (

        <View style={styles.screen}>
            <Text>Opponent's Number</Text>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card style={styles.buttonContainer}>
        <Button title="LOWER" color="purple" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')}/>
    </Card>
    <View style={styles.list}>
        <ScrollView>
            {pastGuesses.map((guess,index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView>
    </View>
        </View>

    );

};
const styles = StyleSheet.create({

screen: {

flex: 1,
padding:10,
alignItems: 'center'
},

buttonContainer: {

flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 20,
width: 300,
maxWidth: '80%'
},
list: {
flex: 1,
width: '80%'

},
listItem: {

borderColor: '#ccc',
borderWidth: 1,
padding: 15,
flexDirection : 'row',
marginVertical: 10,
backgroundColor: 'white',
justifyContent: 'space-between'

}

});



export default GameScreen;