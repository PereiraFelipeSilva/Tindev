import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App(){

  return (

    <View style={styles.container}>
      <Text style={styles.text}>Uatafoque Men</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7159c1',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#FFF'
    }
});