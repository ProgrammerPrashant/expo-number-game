import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';

const Header = prpps => {

return (
 
    <View style={styles.header}>
        <Text style={styles.title}>{prpps.title}</Text>
    </View>

);
};

const styles = StyleSheet.create({

    header: {

        backgroundColor : Colors.headerpink,
        height: 50,
        justifyContent :"center",
        alignItems: "center",
        marginTop: 28


    },

    title: {

        fontSize: 20
    }
   
});

export default Header;