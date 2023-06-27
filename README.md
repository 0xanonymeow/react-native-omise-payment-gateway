# react-native-omise-payment-gateway

This React Native app demonstrates how to integrate with the Omise payment gateway.

<br />

<p align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/131508930/249190458-92e05c31-b704-4a9b-a032-2f7a9958afa1.PNG" width="25%" height="25%" />
</p>

<br />

## Installation
### Install dependencies

```
npm install
```

<br />

### Run `patch-package` to apply patches to `omise-react-native` SDK

```
npm run patch-package  
```

<br />

### Specify Omise API Keys

You will need to obtain a public and secret key from the Omise dashboard to use this app.

1. Sign up for an Omise account and login
2. Go to Dashboard > Settings > Keys
3. Copy your Public and Secret keys
4. Create a `.env` file in the root of the project and add the keys:

```
OMISE_PUBLIC_KEY=your_public_key  
OMISE_SECRET_KEY=your_secret_key
```

For more details on obtaining and using Omise keys, see https://www.omise.co/how-to-access-omise-api-keys

<br />

### Download Expo Go

Download the Expo Go app on your iOS or Android device. https://expo.dev/client

<br />

### Run the server

This will start a development server for you.

```
npm start
```

<br />

### Connect to your server

Open the Expo Go app on your device and scan the QR code in your terminal to open your project.

Your app will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to rebuild or restart the development server to see changes in the app.

<br />

## How to use

### Add a card

You can add a credit card by specifying the card details. The information needs to be in the correct pattern.
This app is connected to the Omise payment gateway in a testing environment. <ins><b>Do not specify real credit card data!</b></ins>

<b>Example card data:</b>

```
Visa

Card Number: 4249 2577 8082 2614
Holder Name: John Doe
Card Expiry: 11/2026
CVV/CVV2: 731
```

<br />

<p align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/131508930/249190353-72f03e10-0594-4416-8d0a-92718b8bed99.PNG" width="25%" height="25%" />
</p>

<br />

## Charge a card

You can charge a card by tapping the card added to the list.

<br />

<p align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/131508930/249190430-b1c6b34e-e4c2-4406-ad6b-e62dbab075f0.PNG" width="25%" height="25%" />
</p>

<br />

## Remove a card

If you press and hold a card, you can remove it from the list.

<br />

<p align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/131508930/249193682-ca9e6127-7659-4e5e-a573-0708ca0f1c72.PNG" width="25%" height="25%" />
</p>

<br />

## References

### Omise React Native
source: https://github.com/tnylee/omise-react-native

The `omise-react-native` SDK is incomplete. I have updated some parts to allow the app to create charges.

The change is made and updated here https://github.com/0xanonymeow/react-native-omise-payment-gateway/blob/main/patches/omise-react-native%2B0.1.0.patch

