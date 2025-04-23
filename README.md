
# **Kryptosync Mobile** 📱  
*React Native (Expo) Wallet with Biometric Auth*  

![image](https://github.com/user-attachments/assets/8f82ff24-97a4-4ca4-b5bd-94873f6afbad)

## ✨ Mobile-Exclusive Features  
✅ **Real-Time Overdrafts**  
- Auto-convert crypto to fiat when balances are low  
- Slippage-protected swaps via Pragma Oracle  

✅ **Unified Dashboard**  
- View combined fiat + crypto balances  
- Transaction history with CSV export  

✅ **Web3Auth Integration**  
- Email/Social login + ArgentX/Braavos wallet connect
🔒 **Biometric Auth**  
- FaceID/TouchID secured transactions  

📲 **Offline Mode**  
- Cache recent transactions when offline  

🔄 **Background Sync**  
- StarkNet state updates via Expo TaskManager  

## 📱 Tech Stack  
| Layer               | Technology           |
|---------------------|----------------------|
| **Framework**       | Expo SDK 49          |
| **State**           | Jotai                |
| **Blockchain**      | expo-starknet        |
| **Auth**            | react-native-biometrics |
| **UI**              | NativeWind           |

## 🚀 Quick Start  
```bash
# Fork the repo
https://github.com/caxtonacollins/sync-mobile
# Clone repo
git clone https://github.com/yourorg/sync-mobile.git
cd sync-mobile

# Install
yarn install

# Start dev server
expo start
```

## 📲 Build for Production  
```bash
# Android
eas build --platform android

# iOS
eas build --platform ios
```

