import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlxSgTWtIDy3kaoUb-but1qkPjZ6RRq3s",
  authDomain: "ecommerreacjs.firebaseapp.com",
  projectId: "ecommerreacjs",
  storageBucket: "ecommerreacjs.appspot.com",
  messagingSenderId: "804579954690",
  appId: "1:804579954690:web:7a552558f3a70ccf83971b"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
