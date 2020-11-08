import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';


const GameOver = props => {

    return ( <View style={styles.screen}>
                <Text>The Game Is Over !</Text>
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/pp.jpg')} 
                    resizeMode="cover"
                 //   source={{uri: 'yourwebimagelink'}}
                    /> 
                </View>
                <Text>Number of Rounds You Took : <Text style={styles.rounds}>{props.roundsNumber}</Text></Text>
                <Text>Number Was : <Text style={styles.rounds}>{props.userNumber}</Text></Text>
                <Button title="New Game"  onPress={props.onRestart} />
            </View>

);
};

const styles = StyleSheet.create({

    rounds : {
            color : 'red'
    },
    screen: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageContainer : {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30

    },
    image : {

        width: '100%',
        height: '100%',
         

    }
});

export default GameOver;