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

export function SignUp() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const onBack = () => {
    router.back();
  }

  const onSignIn = () => {
    
  }

  const onSignUp = () => {
    
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <BackButton onPress={onBack} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>Sign up to KryptoSync to get started</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#666666"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

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
            <Text style={styles.label}>Create Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor="#666666"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.termsContainer}>
            <TouchableOpacity 
              style={styles.checkbox} 
              onPress={() => setAgreeToTerms(!agreeToTerms)}
            >
              {agreeToTerms && <View style={styles.checkboxInner} />}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              By signing up, you agree to our{' '}
              <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.signUpButton} 
            onPress={onSignUp}
          >
            <Text style={styles.signUpButtonText}>Create An Account</Text>
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

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <TouchableOpacity onPress={onSignIn}>
              <Text style={styles.signInLink}>Login Here</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
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
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1A1B3D',
    borderRadius: 8,
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    marginRight: 10,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#2D52EC',
    borderRadius: 2,
  },
  termsText: {
    flex: 1,
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
  },
  link: {
    color: '#2D52EC',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#2D52EC',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 25,
  },
  signUpButtonText: {
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
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signInText: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  signInLink: {
    color: '#2D52EC',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
