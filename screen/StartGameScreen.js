import React , {useState} from 'react';
import {View, Text, TextInput, Keyboard, Alert, StyleSheet, Button, TouchableWithoutFeedback} from 'react-native';
import Card from '../components/Card';
import Colors from '../Constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const[enterdNumber, setEnteredNumber] = useState('');
    const[confirmInput, setConfirmInput] = useState(false);
    const[selectedNumber, setSelectedNumber] = useState();



    const validateHandler = (inputNumber) =>{
        setEnteredNumber(inputNumber.replace(/[^0-9]/g, ''));
    }

    const resetGameHandler = () => {
        setEnteredNumber('');
        setConfirmInput(false);
     } 
     const confirmGameHandler= () => {

        const choosenNumber = parseInt(enterdNumber);
        if(isNaN(choosenNumber) || choosenNumber > 99 || choosenNumber <=0 ) {
        Alert.alert('Invalid Number', 'Number Has to be a number Between 1 and 99.',
        [{text: 'Okay', style: 'destruction', onPress: resetGameHandler}]
        );
        return; 
        }
        setConfirmInput(true);
        setSelectedNumber(choosenNumber);
        setEnteredNumber('');
        Keyboard.dismiss();
    }

    let ConfirmOutPut;
    if(confirmInput) {

        ConfirmOutPut =  (
        
        <Card style={styles.summaryContainer}>
        <Text>You Selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
        </Card>
        );
    }



    return(
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss()}}
        >
        <View style={styles.gamescreen}>

            <Text style={styles.title}>Start The Game</Text>
          <Card style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <Input style={styles.input} value={enterdNumber} onChangeText={validateHandler} blurOnSubmit autoCapitalize="none" autoCorrect={false} maxLength={2} keyboardType="number-pad" />
                    <View style={styles.buttonContainer}>

                    <View style={styles.buttons}><Button color={Colors.secondary} onPress={resetGameHandler} title="Reset" /></View>
                    <View style={styles.buttons}><Button color={Colors.primany} onPress={confirmGameHandler} title="Confirm" /></View>
                </View>
           </Card>
            {ConfirmOutPut}
        </View>
       
        </TouchableWithoutFeedback>

    );

}; 


const styles = StyleSheet.create({
    
    input : {

        width: 50,
        textAlign: 'center'

    },
    buttons: {

width: '40%'
    },

    gamescreen : {

        alignItems: "center",
        padding : 10

    },

    
    inputContainer: {

        width: 300,
        maxWidth: '80%',
        alignItems: "center",
       


    },

    buttonContainer: {
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        width : '100%',
        
    },

    title:{

        fontSize: 20,
        marginVertical: 10,

    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;