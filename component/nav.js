import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const ww = Dimensions.get('window').width;

export default function Mainc() {
    return (
        <View style={styles.container}>
      <Image
         style={styles.logo}
        source={require('../assets/cata.png')}
      />
      <Text style={styles.textx}> All Tasks</Text>
        </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flexDirection:'row', 
        flexWrap:'wrap',
        position: 'relative',
        top: 0,
        backgroundColor: 'white',
        width: '100%',
    },
    textx:{
        fontSize: 20,
        color: '#666666',
        paddingLeft: ww/2-80
    },
    logo:{
        marginLeft: 5
    }
  });
  
  