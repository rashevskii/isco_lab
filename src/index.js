import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { Research } from './pages/Research/Reasearch';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuSRYtXspqOZ5gZGtr0y2dmJ_XT8eNVU4",
  authDomain: "isco-lab.firebaseapp.com",
  projectId: "isco-lab",
  storageBucket: "isco-lab.appspot.com",
  messagingSenderId: "729778422984",
  appId: "1:729778422984:web:6fee9c0883da34739751fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/research",
    element: <Research />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
