import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export function SecureAccount() {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.iconContainer}>
            <AntDesign name="left" size={16} color="#DEDEFF" />
          </View>
          <Text style={styles.backText}>Back</Text>
     </TouchableOpacity>

      <View style={styles.headline}>
            <Text style={styles.title}>Secure your account</Text>
            <Text style={styles.description}>
                Add another layer to secure your KryptoSync account.
            </Text>
      </View>

      <Text style={styles.body}>
        Don’t risk losing your funds. Protect your wallet by saving your <Text style={styles.highlight}>Secret Recovery Phrase</Text> in a place you trust. It’s the only way to recover your wallet if you get locked out of the app or get a new device.
      </Text>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => setSelectedOption('biometric')}
      >
        <View style={styles.selectIndicator}>
           <View style={selectedOption === 'biometric' ? styles.selectedInner : styles.innerCircle} />
        </View>
        <View>
          <Text style={styles.optionTitle}>Secure my account using biometrics</Text>
          <Text style={styles.optionDescription}>Use face ID or fingerprint to secure this account.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => setSelectedOption('phrase')}
      >
        <View style={styles.selectIndicator}>
           <View style={selectedOption === 'phrase' ? styles.selectedInner : styles.innerCircle} />
        </View>
        <View>
          <Text style={styles.optionTitle}>Secure my account using secret phrase</Text>
          <Text style={styles.optionDescription}>
            Select or manually input a secret phrase when your account is recovered.
          </Text>
        </View>
      </TouchableOpacity>

       <View style={styles.option}>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Secure account now</Text>
      </TouchableOpacity>
      </View>

       <View style={styles.option}>
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Remind me later</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.footerNote}>We highly recommend securing your account</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E1032', // dark background
    paddingVertical: 60,
    paddingHorizontal: 20,
    flex: 1,
    font: 'Montserrat',
  },
  backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 20
    },
   iconContainer: {
      backgroundColor: '#1A1A41',
      borderRadius: 90,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12
    },
  backText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  headline: {
      flexDirection: "column",
      gap: 0
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  body: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 30,
    lineHeight: 22,
  },
  highlight: {
    color: '#005EFF',
    fontWeight: 'bold', // optional, if you want it to stand out more
  },
  selectIndicator: {
      borderRadius: 100,
      backgroundColor: '#0E1032',
      height: 40,
      width: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  innerCircle: {
        borderRadius: 100,
        borderWidth: 2,
        height: 25,
        width: 25,
        borderColor: '#9693A8',
    },
  selectedInner: {
      borderRadius: 100,
      borderWidth: 2,
      height: 25,
      width: 25,
      borderColor: '#9693A8',
      backgroundColor: '#2D52EC'
  },
  optionContainer: {
      backgroundColor: '#1A1A41',
      borderColor: '#2D52EC',
      marginBottom: 20,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderWidth: 0.5,
      borderRadius: 7,
      flexDirection: 'row',
      gap: 10
  },
  option: {
    marginBottom: 25,
  },
  optionTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  optionDescription: {
    color: '#9693A8',
    marginTop: 1,
    fontSize: 14,
    maxWidth: 250
  },
  primaryButton: {
    backgroundColor: '#2D52EC',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 50
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    font: 'Montserrat',
  },
  secondaryButton: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2D52EC',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    font: 'Montserrat',
    fontSize: 16,
  },
  footerNote: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
});

