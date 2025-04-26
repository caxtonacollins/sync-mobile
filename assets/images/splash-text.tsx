import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>KRYPO SYNC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1032',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 4,
  },
});
