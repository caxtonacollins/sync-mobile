# Sync Mobile

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://nativewind.dev/)

## Overview

Sync Mobile is the mobile application for the Sync decentralized payment system, delivering instant fiat-to-crypto transactions on the StarkNet ecosystem directly to users' smartphones. Built with React Native and Expo, it provides a native mobile experience for managing wallets, processing payments, and leveraging the hybrid payment protocol on-the-go.

This app empowers users to:
- Manage Local Currency and Crypto Wallets with real-time balance tracking.
- Scan QR codes for seamless merchant payments and initiate transactions.
- Handle automated liquidity bridging when fiat funds are low.
- Access transaction history, analytics, and security features like 2FA.

## Features

- **Mobile-Optimized Interface**: Responsive design tailored for iOS and Android with native performance.
- **Wallet Management**: Secure handling of fiat (Naira, USD) and crypto (STRK, ETH, USDC) assets.
- **QR Code Payments**: Scan merchant QR codes for instant payment initiation.
- **Automated Liquidity**: Seamless fallback to crypto reserves for uninterrupted transactions.
- **Authentication & Security**: Biometric login, 2FA, and secure key management.
- **Real-time Updates**: Live balance updates and transaction notifications.
- **Cross-Platform**: Runs on iOS, Android, and web via Expo's compatibility.

## Tech Stack

- **Framework**: React Native with Expo SDK 53
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router for file-based routing
- **State Management**: React Context API and hooks
- **Data Fetching**: Axios for API integration
- **Charts**: react-native-chart-kit for transaction analytics
- **Icons**: Expo Vector Icons
- **Security**: Expo Secure Store for sensitive data
- **Development Tools**: EAS Build for native builds

## Installation

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (macOS) or Android Emulator/Physical Device

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sync/sync-mobile
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Environment Configuration**

   Create a `.env` file or configure environment variables in `app.json`:
   ```json
   {
     "expo": {
       "extra": {
         "API_BASE_URL": "http://localhost:5000",
         "eas": {
           "projectId": "your-eas-project-id"
         }
       }
     }
   }
   ```

4. **Start the Development Server**
   ```bash
   npx expo start
   ```

   - Scan the QR code with the Expo Go app (iOS/Android) or run on simulators:
     - **iOS**: `npx expo run:ios`
     - **Android**: `npx expo run:android`

## Usage

### Development

- **Start Metro Bundler**: `npx expo start` - Launches the development server.
- **Run on Simulators**:
  - iOS: `npx expo run:ios`
  - Android: `npx expo run:android`
- **Web Development**: `npx expo start --web` - Runs the app in a web browser.
- **Lint Code**: `npx expo lint` - Checks for code issues.
- **Test**: `yarn test` - Runs Jest tests.

### Building for Production

- **Development Build**: `yarn build:development` - Creates a development build.
- **Production Build**:
  - Android: `yarn build:android-prod`
  - iOS: `yarn build:ios`
- **Submit to Stores**: `yarn build:submit:production` - Submits to app stores via EAS.

### Key Screens and Components

- **Home/Dashboard**: Overview of wallets and recent transactions.
- **Payment Scanner**: QR code scanning for merchant payments.
- **Wallet Views**: Detailed fiat and crypto wallet management.
- **Transaction History**: List and details of past transactions.
- **Settings**: Profile management, 2FA setup, and preferences.

### Integration with Backend

Sync Mobile integrates with the Sync Backend API for:
- User authentication and session management.
- Real-time wallet balance updates.
- Transaction processing and blockchain confirmations.
- Merchant payment handling and notifications.

## Project Structure

```
sync-mobile/
├── app/                   # Expo Router app directory
│   ├── (tabs)/           # Tab-based navigation
│   ├── _layout.tsx       # Root layout
│   └── ...
├── components/           # Reusable UI components
├── constants/            # App constants and configurations
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── assets/              # Images, fonts, and static assets
├── scripts/             # Build and utility scripts
└── ...
```

## Security & Best Practices

- **Secure Storage**: Uses Expo Secure Store for sensitive data like keys and tokens.
- **Biometric Authentication**: Integrates device biometrics for login.
- **Input Validation**: Comprehensive validation for all user inputs.
- **Error Handling**: User-friendly error messages and fallback mechanisms.
- **Performance**: Optimized for mobile with lazy loading and efficient state management.

## Development Tools

- **EAS Build**: For creating native builds and submitting to app stores.
- **Expo Dev Client**: For testing native features during development.
- **Expo Doctor**: `npx expo doctor` - Diagnoses common issues.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Test on simulators and devices.
5. Push to the branch: `git push origin feature/your-feature`.
6. Open a pull request.

Ensure all contributions are tested on both iOS and Android platforms.

## License

This project is part of the Sync ecosystem and follows the same licensing as the backend.

## Support

For issues or questions, please refer to the main Sync project documentation or contact the development team.

---

*Built with React Native and Expo for a native mobile experience in the Sync payment ecosystem.*
