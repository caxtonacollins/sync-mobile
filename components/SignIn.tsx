import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import { BackButton } from './BackButton';
import { useRouter } from 'expo-router';

export function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const onSignUp = () => {

  }

  const onSignIn = () => {
    router.push('/(tabs)');
  }

  const onBack = () => {
    router.back();

  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <BackButton onPress={onBack} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Welcome back to KryptoSync</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#666666"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.rememberContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && <View style={styles.checkboxInner} />}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Keep me logged in</Text>
          </View>

          <TouchableOpacity
            style={styles.signInButton}
            onPress={onSignIn}
          >
            <Text style={styles.signInButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/images/google-icon.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/images/x.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Continue with X</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.signUpLink}>Sign Up Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1032',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 100,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#CCCCCC',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Inter',
    backgroundColor: '#1A1B3D',
    borderRadius: 8,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#2D52EC',
    borderRadius: 2,
  },
  rememberText: {
    fontFamily: 'Inter',
    color: '#CCCCCC',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#2D52EC',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  signInButtonText: {
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#333333',
  },
  dividerText: {
    fontFamily: 'Inter',
    color: '#CCCCCC',
    marginHorizontal: 10,
  },
  socialButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 8,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialButtonText: {
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontFamily: 'Inter',
    color: '#CCCCCC',
    fontSize: 14,
  },
  signUpLink: {
    fontFamily: 'Inter-Bold',
    color: '#2D52EC',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
