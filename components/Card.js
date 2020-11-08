import React from 'react';
import {View, StyleSheet} from 'react-native';


const Card = props => {

return <View style={{...styles.card, ...props.style}}>{props.children}</View>

};


const styles = StyleSheet.create({

card : {

    
    backgroundColor: 'white',
    elevation: 7, // this gives a card look to android not IOS for ios their is Shadow styling
    padding: 12,
    borderRadius: 10

}
});
export default Card;