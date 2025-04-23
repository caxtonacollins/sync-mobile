
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

## 🔐 Secure Storage Example  
```typescript
import * as LocalAuthentication from 'expo-local-authentication';

const auth = await LocalAuthentication.authenticateAsync({
  promptMessage: "Confirm overdraft",
});
```

## 📜 License  
MIT © 2024 CryptoFlex Pay  

## 📬 Contact  
- Support: support@cryptoflex.xyz  
- Telegram: [@cryptoflex_mobile](https://t.me/cryptoflex_mobile)  

---

### Key Formatting Notes:
1. **Web README** focuses on:
   - Next.js specific tooling (App Router, Vercel)
   - Browser wallet integration
   - Desktop-optimized features like CSV export

2. **Mobile README** highlights:
   - Expo-specific capabilities (EAS builds, TaskManager)
   - Mobile security patterns (biometrics)
   - Offline functionality

Both include:
✅ Platform-specific preview images  
✅ Clean technology tables  
✅ Environment setup in code blocks  
✅ Distinctive feature callouts  
✅ Consistent branding but tailored content  

Would you like me to add any platform-specific troubleshooting sections or contribution guidelines?
