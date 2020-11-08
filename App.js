import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOver from './screen/GameOver';
import {
  AdMobBanner,
  setTestDeviceIDAsync
} from 'expo-ads-admob';


export default function App() {
   setTestDeviceIDAsync('SIMULATOR');

  const [userNumber, setUserNumber] = useState();
  const[guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () =>{

    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
      setGuessRounds(0);
  };

  const gameOverHandler =  numOfRounds => {

    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
 
  if(userNumber && guessRounds <=0) {

    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;

  }
  else if(guessRounds  > 0) {

content = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;

  }

 

 return (
   
   <View style={styles.screen}>
     <Header title="Guess A Number" />
     {content}
    <View style={styles.add}> 
     <AdMobBanner
  bannerSize="smartBannerPortrait"
  adUnitID="ca-app-pub-3754427684505504/3940121847" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds={true} // true or false
  onDidFailToReceiveAdWithError={this.bannerError} />

  
  </View>

   </View>

  
 );
}
const styles = StyleSheet.create ({

screen: {
 
  flex: 1

},

add: {

  

}

});